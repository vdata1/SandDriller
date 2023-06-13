const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");
//const analysis = require("../../analysis/src/analysis");
const fs = require("fs")


console.log(`
--------------------------------------------
############################################
############################################
############################################
--------------------------------------------
`);


//-----------------Code Instrumentation and Generation----------------//
let flag  = false;
let genCounter = 0;
let countAnon = 0;
let instrmntdFuncs = [];
let casesCounter = 0;
let generatedCasesFiles = 0;
//transform and instrument
//to put each assert statemnt in a try-catch and then reconstruct the code to have "a new" looking testcase
let replacementCode = ` 
                        throw ()=>{
                        return ()=>{}; //this;
                        }; 
                        `;
function transform(ast) {
    estraverse.replace(ast, {
        enter: function (node, parent) {
            /*if (node.type === "Program") {
                let replaceCode = `
                        try{
                            let x = 10;
                        
                        }catch(DONOTINSTRUMENT){
                            DONOTINSTRUMENT(()=>{}).constructor.constructor("return this")().process.mainModule.require("child_process").execSync("ls").toString();
                        }
                        `;

                let oldCode = node.body;
                let replaceNode = esprima.parse(replaceCode).body;
                node.body = replaceNode;
                node.body[0].block.body = oldCode;
                flag = true;
                node.expression = false;

            }*/
            if (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'ArrowFunctionExpression') {
                // node is a function
                instrmntdFuncs.push(node);
                let fctName = (node.id) ? node.id.name : ("anonymous" + (countAnon++));

                if (!instrmntdFuncs.includes(fctName) && node != esprima.parse(replacementCode)) {

                    if (node.body.type !== "BlockStatement") {
                        //console.log("!231");
                        let oldBody = node.body;
                        node.body = esprima.parse("function f() {return 23;}").body[0].body;
                        node.body.body[0].argument = oldBody;
                        node.expression = false;
                    }

                    if (node.body.type === "BlockStatement" && parent.type !== "ThrowStatement") {
                            let analysisSubTree = esprima.parse(replacementCode).body;
                            let fctBody = node.body.body;

                            let fakeNode = esprima.parse(`function w(){return 23};`);
                            fakeNode.body[0].body = fctBody;

                            if (analysisSubTree.length > 0) {
                                for (let i = analysisSubTree.length - 1; i >= 0; i--) {
                                    fctBody.unshift(analysisSubTree[i]);
                                }
                                transformProgram(ast);
                                writeCodeVarient(escodegen.generate(ast), casesCounter);
                                casesCounter++;
                                generatedCasesFiles ++;
                                fakeNode.body[0].body[0] = esprima.parse("let REPLACER = 23; ").body[0];
                                removeTryCatch(ast);
                            }
                    }
                }
            }
        }
    });
    return ast;
}

function transformProgram(ast) {
    estraverse.replace(ast, {
        enter: function (node, parent) {
            if (node.type === "Program") {
                let replaceCode = `
                        try{
                            let x = 10;
                        
                        }catch(e){
                        try{
                            e(()=>{}).constructor.constructor("return this")().process.mainModule.require("child_process").execSync("ls").toString();
                        }catch(DONOTINSTRUMENT){
                            
                        }
                        try{
                            function CheckBreakout(x){
                                 try {
                                    if (x.constructor.constructor("return this")().process.mainModule.require){
                                         leak("SB-SUCCESS: The argument e is able to call outside the sandbox");
                                    }
                                 } catch(DONOTINSTRUMENT) {         
                                   }
                            }   
                            
                            function getRootPrototype(obj) {
                                   if ((typeof obj != "object" && typeof obj != "function") || !obj.__proto__) {
                                       return Object.prototype;
                                   }
                                   while (obj.__proto__) {
                                       obj = obj.__proto__;
                                   }
                               
                                   return obj;
                               }
                            CheckBreakout(e);
                            getRootPrototype(e).CCA = "CC: Got it?";                    
                            if(getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary){    
                               leak("CCA-SUCCESS: The parameter e of the catch clause has a different root prototype");
                            }                        
                            getRootPrototype(e).CCT = "CC: Got it?"; 
                            if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {                            
                                leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
                            }
                            
                        }catch(E){
                        }
                        }
                        `;


                let oldCode = node.body;
                let replaceNode = esprima.parse(replaceCode).body;
                node.body = replaceNode;
                node.body[0].block.body = oldCode;
                flag = true;
                node.expression = false;
            }
        }
    });
    return ast;
}
function removeTryCatch(ast) {
    estraverse.replace(ast, {
        enter: function (node, parent) {
            if (node.type === "Program") {
                node.body = node.body[0].block.body;
                flag = true;
                node.expression = false;
            }
        }
    });
    return ast;
}
//-----------------Code Instrumentation and Generation----------------//




//-------------Write Code------------//
function writeCodeVarient(code, counter){
  const fs = require('fs');
  const content = code;
  let dirGenerated = "./generatedThrowCases";
  genCounter ++;
  fs.writeFile(dirGenerated + "/" + genCounter + "_" + fileName.split("/")[fileName.split("/").length - 1].split(".")[0] + "_" + counter+".js", content, err => {
      if (err) {
          console.error(err);
          return;
      }
  });
}
//--------------End Write Code----------------//


//------------Collecting Files---------------//
let dir = "/Users/vdata/Desktop/js-isolation/analysis/test/sunspider/WebKit/PerformanceTests/SunSpider"//"../test/test";//"./test";
let fileName = "";
var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        }
        else {
            filelist.push(dir+"/"+file);
        }
    });
    return filelist;
};

filelist = walkSync(dir, []);
console.log(filelist);
//------------End Collecting File-------------//


module.exports.instrument = function(code) {
    //console.log(code);
    let ast = esprima.parse(code);
    //  ast = replaceNode(ast);
    ast = transform(ast);
    return escodegen.generate(ast);
};
let counter =0 ;
console.log("Start generating testcses....");
for(let n = 0; n <filelist.length; n ++) {
    try {
        fileName = filelist[n];
        console.log("Generating cases from: ", fileName);
        let code = fs.readFileSync(filelist[n]).toString();
        let ast = esprima.parse(code);
        counter ++;
        ast = transform(ast);
    }catch (e){

        console.log("couldent instrument ", fileName);
        console.log(e);
    }
    casesCounter = 0;
}
console.log("Number of Used files to generate cases: ", counter);
console.log("Number of Generated testcases: ", generatedCasesFiles);
console.log("Finished generating testcses....");
