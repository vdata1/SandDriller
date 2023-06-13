const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const csvsync = require("csvsync");

const analysis = require("../src/analysis.js");
const { ConsoleMessage } = require("puppeteer");

global.Tout = false;

const POOL_SIZE = 16; //16 for a single test;
const TIMEOUT =  20000; //20000 for client-side sandbox
const OUT_DIR = "/tmp/res";

function writeCSV(data){
    var csv = csvsync.stringify(data);
    fs.appendFileSync(path.resolve(__dirname, "../Results/RESULTS.csv"), csv);
}

if (!fs.existsSync(OUT_DIR))
    fs.mkdirSync(OUT_DIR);

let procs = [];
let counter = 0;
let results = {instErrors: 0, totalRunTime: 0, runErrors: 0, secErrors: [], oracleChecks: 0, crashes: [], timeouts: [], totalRun: 0}
let runningTasks = [];
let ofInterest = 0;

for (let i = 0; i < POOL_SIZE; i++) {
    console.log(`${__dirname}/process-runner.js`);
    let proc = cp.fork(`${__dirname}/process-runner.js`);
    let currIndex = i;
    procs.push(proc);

    function receiveMsg(msgArray) {

        results.totalRun++;
        let fileId = msgArray[0].fileId;

        for (let i = 0; i < msgArray.length; i++) {
            let msg = msgArray[i];
            results.instErrors += msg.instError;
            results.runErrors += msg.runError;
            results.totalRunTime += msg.timeExec;
            if (msg.secError) {
                // save for future reruns
                saveFile(msg.fileId);
                results.secErrors.push(msg.fileId);
            }            
            
            results.oracleChecks += msg.oracleChecks;
            let data = [[msg.fileId, msg.sandBox, msg.timeExec, msg.variants, msg.oracleChecks, msg.instError, msg.runError, msg.secError]];
            writeCSV(data);
            console.log(data);
            // console.log("12")
            console.log([msg.fileId, msg.instError, msg.runError, msg.secError])
            // console.log("23");
            console.log(results.totalRun + " " + results.totalRunTime +" " + results.secErrors.length + "  " + results.crashes.length + " " + results.runErrors, msg.variants);
            // console.log("34"); 
        }

        if (counter < entries.length && runningTasks[currIndex] && results.timeouts.indexOf(fileId) === -1) {
            runWithTimeout(currIndex);
            if(global.Tout == true){
                console.log("******************************************** TIMEOUT **************************************************");
                let data = [[msgArray[0].fileId, msgArray[0].sandBox, 0, msgArray[0].variants, 0, 0, 1, 0]];
                writeCSV(data);
                console.log("**************************************** Written on CSV ***********************************************");
                global.Tout = false;
            }
        }
        if (counter >= entries.length) {
            setTimeout(() => {
                results.timeouts = results.timeouts.length;
                console.log(results);
                process.exit(0);
            }, 5000);
        }
    }

    function respawn(a) {
        results.totalRun++;
        // results.crashes++;
        let fileName = entries[runningTasks[currIndex]];
        if (results.timeouts.indexOf(fileName) === -1) {
            // console.log(procs[currIndex].stderr.toString());
            // save for future reruns
            saveFile(fileName);
            results.crashes.push(fileName);
        }
        // console.log("Respawning...")
        let newProc = cp.fork(`${__dirname}/process-runner.js`);
        procs[currIndex] = newProc;
        newProc.on('message', receiveMsg);
        newProc.on('exit', respawn);
        // console.log("to:" + currIndex + " " + runningTasks[currIndex]);
        if (counter < entries.length) {            
            setTimeout(() => {
                runWithTimeout(currIndex);
            }, 500);
        } else {
            setTimeout(() => {
                results.timeouts = results.timeouts.length;
                console.log(results);
                process.exit(0);
            }, 5000);
        }
    }

    proc.on('message', receiveMsg);
    proc.on('exit', respawn);
}

const walk = function(dir) {
    let results = [];
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
};

let entries = [];
    // entries = entries.concat(walk(path.resolve(__dirname, "../Dataset/1GroundTruth/")));
    // entries = entries.concat(walk(path.resolve(__dirname, "../Dataset/ECMA/")));
    entries = entries.concat(walk(path.resolve(__dirname, "../Dataset/V8/")));
    
    //crashes with vm2 node v14.15.3
    // entries = ['../Dataset/V8/regress/regress-11491.js']
    
    //
    // entries = ['/Users/vdata/Desktop/github_SandDriller/SandDriller/Dataset/V8/regress/regress-crbug-548580.js']
    // entries = ['/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/annexB/built-ins/Date/prototype/setYear/this-time-valid.js']
    //entries = [entries[3842], '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Array/proto-from-ctor-realm-one.js'];
    //14: ECMA
     // let stopPoint  = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/built-ins/Proxy/getPrototypeOf/trap-is-undefined.js");
     // let stopPoint1 = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/language/expressions/class/elements/syntax/early-errors/grammar-static-gen-meth-super.js");
     //entries = entries.slice(8+28+2+901+50+41+296+436+253+745+564+342+36+184+25+282+51+271+484+1007+547+3561+460+719+stopPoint+624+50+50+30+50+600+100+100+200+300+300+100+100+2366+1842+16+268+44+9+76+8+8+32+134+1362+stopPoint1 ,entries.length);
	
	//V8 
	//entries = entries.slice(145+143+896+252+246+570+696+288+144+180+184+281+260+453+414+462, entries.length);
	
//15: ECMA
	// let stopPoint = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/built-ins/Proxy/getPrototypeOf/trap-is-undefined.js");
	// let stpPnt = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/language/expressions/class/elements/syntax/early-errors/grammar-static-gen-meth-super.js");
	// entries = entries.slice(393+544+53+157+317+370+470+456+564+342+36+184+25+287+48+267+444+1043+553+3561+460+719+stopPoint+stpPnt, entries.length);
      //V8
	   	
		
   //16: ECMA
	// console.log(entries.length - stopPoint1);
	// let stpnt = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/built-ins/Proxy/getPrototypeOf/trap-is-undefined.js"); 
     	// let startPnt = 939+50+41+296+436+253+745+564+342+37+182+23+271+65+271+420+1044+574+3561+460+719
	// startPnt = startPnt + (stpnt - startPnt) + 144+1639+263+1372+119+67+42+4+9+9+25+35+30+103+138+34+43+117+85+35+48+47+47+154+15+17+17+11+11+8+19+58+98+30+57+183+478+257+84+135+92+73+127+95+106+134+41+15+557+1005+652+136+1592
	// console.log(startPnt, stpnt)
	// entries = entries.slice(startPnt, entries.length);
	// let pnt = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/language/expressions/class/elements/syntax/early-errors/grammar-static-gen-meth-super.js"); 
	// entries = entries.slice(pnt+1080+2129+875+235+113+310+78+8+9+1529+250, entries.length);
	// pnt = entries.indexOf("/home/abdullah/original/js-isolation/analysis/Dataset/ECMA/language/statements/class/elements/syntax/early-errors/grammar-special-meth-contains-super-method.js");
	// entries = entries.slice(pnt+160+16+404+216+385+2347+470+219+9+25+221+297, entries.length);
       //entries.slice(stopPoint1, entries.length);
    
    //V8: 
	//  entries = entries.slice(165+165+803+331+356+1354+117+213+249+270+262+452+524+403, entries.length);
    // entries = "//Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/asm/do-while.js"
    // entries = entries.concat(walk("/home/cris/work/node/test"));
    // entries = entries.concat(walk("/home/cris/work/node/deps/v8/test/mjsunit"));
//entries = entries.concat([
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/annexB/language/expressions/template-literal/legacy-octal-escape-sequence-strict.js",
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/compiler/simple-binary-op.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/compiler/simple-global-access.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/es6/typedarray-set-length.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/eval-origin.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/eval-stack-trace.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-1529.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-444805.js-script',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-596718.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-672041.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-719380.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-746909.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-758763.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-800538.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-builtinbust-5.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-1105383.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-18639.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-528379.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-578039-Proxy_construct_prototype_change.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-580584.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-610207.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-618845.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-r3391.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-recurse-patch-binary-op.js',
    // // `/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/annexB/built-ins/Date/prototype/getYear/this-not-date.js`
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/annexB/built-ins/Date/prototype/setYear/not-a-constructor.js',
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/wasm/wasm-module-builder.js"
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/language/statements/while/tco-body.js"
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/wasm/embenchen/memops.js"

    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayBuffer/Symbol.species/symbol-species.js",
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayBuffer/data-allocation-after-object-creation.js',

    
    //ECMA
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/RegExp/prototype/Symbol.matchAll/isregexp-called-once.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/RegExp/prototype/Symbol.split/last-index-exceeds-str-size.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-get-throws.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/RegExpStringIteratorPrototype/next/custom-regexpexec-match-get-0-tostring.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/String/prototype/match/invoke-builtin-match.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/language/expressions/dynamic-import/usage-from-eval.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/language/expressions/assignmenttargettype/direct-lefthandsideexpression-coalesce-assignment-assignmentexpression-0.js',

    //ECMA crashes
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-223-1.js", 
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-228-1.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-226-1.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-253-1.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-256-1.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Object/defineProperty/15.2.3.6-3-258-1.js'
    // "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/language/expressions/class/cpn-class-expr-computed-property-name-from-function-declaration.js",
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/annexB/language/eval-code/direct/func-block-decl-eval-func-block-scoping.js',
    
    //v8
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/eval-origin.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/eval-stack-trace.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-596718.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-746909.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-crbug-528379.js',
    
    //v8 crashes
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-11491.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayBuffer/prototype/slice/species-returns-same-arraybuffer.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayBuffer/prototype/slice/species-returns-same-arraybuffer.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayIteratorPrototype/next/args-unmapped-truncation-before-exhaustion.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/ArrayBuffer/toindex-length.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Array/prototype/values/length.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Array/prototype/values/name.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Array/prototype/values/iteration.js',
    // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/ECMA/built-ins/Array/prototype/values/prop-desc.js',
//]);
//entries = entries.concat([
   // '/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1GroundTruth/vm2-exploit13.js', 
   //  "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1GroundTruth/vm2-exploit15.js",
   //  "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/asm/float64array-store-div.js",
   //  "/Users/vdata/Desktop/js-isolation/js-isolation/analysis/Dataset/1V8/regress/regress-672041.js"
//]);

console.log("To run " + entries.length);

process
    .on('unhandledRejection', (reason, p) => {
        // console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        // console.error(err, 'Uncaught Exception thrown');
    });

    //run the sandbox
while (counter < POOL_SIZE) {
    runWithTimeout(counter);
}


function runWithTimeout(workerID) {
    // console.log("Running " + counter);
    let currCounter = counter;
    runningTasks[workerID] = counter;
    procs[workerID].send({file: entries[counter]});
    // console.log(entries[counter])
    counter++;
    setTimeout(() => {
        // console.log("Killed child " + currCounter)
        if (currCounter === runningTasks[workerID]) {
            results.timeouts.push(entries[currCounter]);
            // results.timeouts++;            
            procs[workerID].kill();
            global.Tout = true;
        }
    }, TIMEOUT);
}

function saveFile(file) {
    let fileContent = fs.readFileSync(file).toString();
    fileContent = analysis.instrument(fileContent);
    let split = file.split("/");
    split = split[split.length - 1].split(".")[0];
    let outFile = path.resolve(OUT_DIR, split + (ofInterest++) + ".js");
    fs.writeFileSync(outFile, fileContent);
}
