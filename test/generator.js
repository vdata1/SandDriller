const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");

//-----------------Code Instrumentation and Generation----------------//
let variants = [];
let countAnon = 0;

//transform and instrument
//to put each assert statemnt in a try-catch and then reconstruct the code to have "a new" looking testcase
let replacementCode = ` 
    throw function thrower() {  
        return ()=>{ return this; }; 
    }; 
`;
let replacementTree = esprima.parse(replacementCode).body[0];
function transform(ast) {
    estraverse.replace(ast, {
        enter: function (node, parent) {            
            if (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'ArrowFunctionExpression') {            
                let fctName = (node.id) ? node.id.name : ("anonymous" + (countAnon++));
                                                                        
                if (fctName != "catchFct" && node.body.type === "BlockStatement" && parent.type !== "ThrowStatement") {                        
                    node.body.body.unshift(replacementTree);
                    variants.push(escodegen.generate(ast));
                    node.body.body.shift();                    
                }
                
            }
        }
    });
    return ast;
}

module.exports.generate = function(code) {
    variants = [];
    let ast = esprima.parse(`
        try {
            ${code}
        } catch (e) {
            try {
                e(function catchFct() {
                });
            } catch (e) {
            }
        }    
    `);    
    ast = transform(ast);
    variants.push(ast);
    return variants;
};
