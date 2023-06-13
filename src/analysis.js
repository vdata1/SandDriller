const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");
const fs = require("fs");
const path = require("path");
let globalAnalysisCode = fs.readFileSync(path.resolve(__dirname, "./helper.js")).toString();
let countAnon = 0;
let tempCounter = 0;
//program = "";

// Object.prototype.canary = true;

module.exports.instrument = function (code) {
  tempCounter = 0;
  let ast = esprima.parse(code, {loc:true});
  ast = transformAndReplace(ast);
  ast = transform(ast);  

  // console.log(escodegen.generate(ast));
  return escodegen.generate(ast);
};

function isNotAnalysisFunctionDefinition(name) {
  return (
    name !== "getRootPrototype" &&
    name !== "leak" &&
    name !== "start" &&
    name !== "exploreChileds" &&
    name !== "hasChildren" &&
    name !== "getRootConstructor" &&
    name !== "checkNodes" &&
    name !== "analysisPart" &&
    name !== "functionInvocationAnalysis" &&
    name !== "checkBreakout" && 
    name !== "getRefsRecursive" && 
    name !== "checkReferenceRecursive" && 
    name !== "getAllReferences" &&
    name !== "getAllProperties"
  );
}

function transformAndReplace(ast) {
  // TODO intercept return values from function invocation, and check the function
  ////REPLACE NODE: FUNCTION INVOCATION
  estraverse.replace(ast, {
    enter: function (node, parent) {
      if (node.type === "SequenceExpression") {
        return node;
      }
      if (node.type === "CallExpression" || node.type === "NewExpression") {                
        if (
          parent &&
          // parent.type !== "CallExpression" &&
          parent.type !== "SequenceExpression"          
        ) {
          //Elite if statement ^_^          
          let fctName = node.name ? node.id : "annonymous";          
          let functionInvocationAnalysis = ` 
                   function functionInvocationAnalysis(r){                        
                        let grtA = getRootPrototype(r);                        
                        if (grtA !== Object.__proto__) { //prototype
                            try {
                              grtA.FIA = "FI: Got it?";
                              Object.defineProperty(grtA,"FEA", {value: "FE: Got it?"});
                            } catch(e) {}
                            leak("FIA-SUCCESS: The result of function ${fctName} has a different root prototype [line ${node.loc.start.line}]");     
                        }                        
                        checkReferenceRecursive(r, (root, path) => {
                          try {
                              root.FIA = "FI: Got it?";
                              Object.defineProperty(root,"FEA", {value: "FE: Got it?"});
                          } catch(e) {}
                          leak("FIA-SUCCESS: The property " + path + " of the result of function ${fctName} has a different root prototype [line ${node.loc.start.line}]");     
                        });
                }(temp${tempCounter})`;
          let analysisTree = esprima.parse(
            `(global.temp${tempCounter} = foo(), ${functionInvocationAnalysis}, global.temp${tempCounter})`
          );          
          tempCounter++;
          // let newNode = analysisTree.body[0].expression;
          // newNode.expressions[0].right = node;
          // return newNode;
          let parentKeys = Object.getOwnPropertyNames(parent);          
          if (isNotAnalysisFunctionDefinition(node.callee.name)) {            
            for (let key = 0; key < parentKeys.length; key++) {
              if (parent[parentKeys[key]] === node) {                
                let newNode = analysisTree.body[0].expression;
                newNode.expressions[0].right = node;
                parent[parentKeys[key]] = newNode;
              }
            }
          }
        }
      }
    },
  });
  return ast;
}

function transform(ast) {
  estraverse.traverse(ast, {
    enter: function (node, parent, key, index) {
      //Intercepting at the function entrance
      if (
        node.type === "FunctionExpression" ||
        node.type === "FunctionDeclaration" ||
        node.type === "ArrowFunctionExpression"
      ) {
        // node is a function        
        let fctName = node.id ? node.id.name : "anonymous" + countAnon++;
        if (isNotAnalysisFunctionDefinition(fctName) && node.loc) {
          // wrap non-block bodies
          if (node.body.type !== "BlockStatement") {
            let oldBody = node.body;
            node.body = esprima.parse("function f() {return 23;}").body[0].body;
            node.body.body[0].argument = oldBody;
            node.expression = false;
          }
          if (
            node.body.type === "BlockStatement"
          ) {
            //&& fctName != "functionInvocationAnalysis") {
            let analysisCode = `                                               
                        if (typeof arguments !== 'undefined' && arguments.length > 0) {                                                                           
                          checkReferenceRecursive(arguments, (root, path) => {
                            try {
                              root.FEA = "FE: Got it?";
                              Object.defineProperty(root,"FEA", {value: "FE: Got it?"});
                            } catch(e) {}
                            leak("FEA-SUCCESS: The property " + path + " of arguments of function ${fctName} has a different root prototype [line ${node.loc.start.line}]");     
                          });                                                        
                        }
                        let grtT = getRootPrototype(this);                         
                        checkBreakout(this);                        
                        if (grtT !== Object.__proto__) { //prototype
                            try {
                               grtT.FET = "FE: Got it?";    
                               Object.defineProperty(grtT,"FEA", {value: "FE: Got it?"});
                            } catch(e) {}
                            leak('FET-SUCCESS: "this" object of function ${fctName} has a different root prototype [line ${node.loc.start.line}]');
                        }
                        if (this)
                          checkReferenceRecursive(this, (root, path) => {
                            try {
                               root.FET = "FE: Got it?";
                               Object.defineProperty(root,"FEA", {value: "FE: Got it?"});
                            } catch(e) {}
                            leak("FET-SUCCESS: The property " + path + " of this in function ${fctName} has a different root prototype [line ${node.loc.start.line}]");     
                          });
                    `;
            let analysisSubTree = esprima.parse(analysisCode).body;
            fctBody = node.body.body;
            if (analysisSubTree.length > 0) {
              for (let i = analysisSubTree.length - 1; i >= 0; i--) {
                fctBody.unshift(analysisSubTree[i]);
              }
            }
          }
        }
      }

      // intercept passed arguments to catch clause
      if (node.type === "CatchClause") {
        let fctName = node.id ? node.id.name : "anonymous";
        if (isNotAnalysisFunctionDefinition(fctName) && node.loc) {          
          if (
            node.body.type === "BlockStatement"
          ) {
            // console.log("Entering the BlockStatement");
            if (node.param.name != "DONOTINSTRUMENT") {
              let catchAnalysisCode = `
                        checkBreakout(${node.param.name});                        
                        if(getRootPrototype(${node.param.name}) !== Object.__proto__){  //prototype   
                          try {
                            getRootPrototype(${node.param.name}).CCA = "CC: Got it?";
                            Object.defineProperty(getRootPrototype(${node.param.name}),"FEA", {value: "FE: Got it?"});
                          } catch(e) {}
                          leak("CCA-SUCCESS: The parameter ${node.param.name} of the catch clause has a different root prototype [line ${node.loc.start.line}]");
                        }              
                        checkReferenceRecursive(${node.param.name}, (root, path) => {
                          try {
                            root.CCA = "CC: Got it?";                    
                            Object.defineProperty(root,"FEA", {value: "FE: Got it?"});
                          } catch(e) {}
                          leak("CCA-SUCCESS: The property " + path + " of parameter ${node.param.name} of the catch clause has a different root prototype [line ${node.loc.start.line}]");
                        });                      
                    `;
              // console.log(escodegen.generate(node));
              let catchAnalysisSubTree = esprima.parse(catchAnalysisCode).body;
              catchBody = node.body.body;
              if (catchAnalysisSubTree.length > 0) {
                for (let i = catchAnalysisSubTree.length - 1; i >= 0; i--) {
                  catchBody.unshift(catchAnalysisSubTree[i]);
                }
              }
            }
          }
        }
      }

      // intercept arguments on function enter
      // TODO test on larger scale
      if (node.type == "Program") {        
        let analysisSubTree = esprima.parse(globalAnalysisCode).body;
        fctBody = node.body;
        if (analysisSubTree.length > 0) {
          for (let i = analysisSubTree.length - 1; i >= 0; i--) {
            fctBody.unshift(analysisSubTree[i]);
          }
        }
      }
    },
  });
  return ast;
}
