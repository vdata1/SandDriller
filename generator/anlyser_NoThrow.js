let dir = "./generated"; //"./test";
const analysis = require("../src/analysis");
const fs = require("fs");



/////
///TODO write logs after n tests.
/////


/////////////////////////////////////////////////////////////////
///////////// For the analysis, passed to sandbox////////////////
/////////////////////////////////////////////////////////////////

let baseFunctions = require("./BaseFunctions");


var $262 = {
    detachArrayBuffer() {
        throw new Test262Error('$262.detachArrayBuffer called.');
    },
    destroy() {}
};




///////END//////
const {VM} = require("vm2");
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
//console.log(filelist);
let temp = [];
let filelisttemp = filelist;


//let Test262Error = Error;



let fileResults = [];
let Gx = [];
let analysisResults = [];
var myCallBack = function(data){
    //console.log("got "+data);
    Gx.push(data);
};
let counter_sandbox  = 0;
let counter_insterror = 0;
let counter_success = 0;
let counter_successWithNoThreat = 0;
let filenames =[];
let results = [];
let key = "";
let value= "";
// PA, FEA, FET, CCA, CCT, FIT, FIA, SB
let counters = [0, 0, 0, 0, 0, 0, 0, 0];
/*
* PA: Program Analysis
* FEA: Function Entrance Arguments
* FET: Function Entrance This
* CCA: Catch Clause Arguments
* CCT: Catch Clause This
* FIA: Function Invocation Arguments
* FIT: Function Invocation This
* SB : Snadbox Breakout
*/

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'SunSpider_V8_NoThrow_results.csv',
    header: [
        {id: "key", title: "names"},
        {id: 'value', title: 'results'}
    ]
});


for(let n = 0; n < filelist.length; n ++){
    let code= fs.readFileSync(filelisttemp[n]).toString();
    key= filelisttemp[n];
    console.log(key);
    try {
        code = analysis.instrument(code);
    }
    catch(e){
        counter_insterror++;
        value = e;
        continue;
    }
    if(key.indexOf("mootools-1")==-1) {
        try {
            let vmInstance = new VM({
                sandbox: {
                    ctor: x => new x(), call: x => x(), isConstructor: baseFunctions.isConstructor,
                    assert: baseFunctions.assert, require: require, $262: $262, leak: myCallBack
                }
            });
            reslt = vmInstance.run(code);
            if (Gx.length > 0) {

                counter_success++;

                for (let i = 0; i < Gx.length; i++) {

                    if (Gx[i].search("PA-SUCCESS") != -1) {
                        counters[0]++;
                        if ({}.P) {
                            if ({}.P == "PA: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("FEA-SUCCESS") != -1) {
                        counters[1]++;
                        if ({}.FE) {
                            if ({}.FE == "FE: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("FET-SUCCESS") != -1) {
                        counters[2]++;
                        if ({}.FE) {
                            if ({}.FE == "FE: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("CCA-SUCCESS") != -1) {
                        counters[3]++;
                        if ({}.CC) {
                            if ({}.CC == "CC: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("CCT-SUCCESS") != -1) {
                        counters[4]++;
                        if ({}.CC) {
                            if ({}.CC == "CC: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("FIA-SUCCESS") != -1) {
                        counters[5]++;
                        if ({}.FI) {
                            if ({}.FI == "FI: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("FIT-SUCCESS") != -1) {
                        counters[6]++;
                        if ({}.FI) {
                            if ({}.FI == "FI: Got it?") {
                                Gx[i] = "TP Varrified:  " + Gx[i];
                            }
                        }
                    }
                    if (Gx[i].search("SB-SUCCESS") != -1) {
                        counters[7]++;
                    }
                }
            } else {
                counter_successWithNoThreat++;
            }
            value = Gx;
        } catch (e) {
            counter_sandbox++;
            value = e;
        }
        //results.push({key: key, value: value});
        analysisResults.push({key: key, value: value});
        Gx = [];
    }
   // csvWriter.writeRecords({key: key, value: value}).then(()=> console.log('The CSV file was written successfully'));

}



//console.log(analysisResults);
console.log(filelist.length);
console.log(counters);

csvWriter.writeRecords(analysisResults).then(()=> console.log('The CSV file was written successfully'));
const content = `
Success with No issue: ${counter_successWithNoThreat}, 
Succsess: ${counter_success}, 
Sandbox: ${counter_sandbox},
InstrumentError: ${counter_insterror}`
;
fs.writeFile('SunSpider_V8_NoThrow General results.txt', content, err => {
    if (err) {
        console.error("Yaaaa hooooooooooo", err)
        return
    }
    //file written successfully
});
console.log(content);
