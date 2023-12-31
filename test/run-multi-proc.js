const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const csvsync = require("csvsync");

const analysis = require("../src/analysis.js");
const { ConsoleMessage } = require("puppeteer");

global.Tout = false;

const POOL_SIZE = 1; //1 for a single test or testing the client-side; 16 for others.
const TIMEOUT =  10000; //10000 for server-side sandbox, 20000 for client-side sandbox.
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

    /* For basic test */
    entries = walk(path.resolve(__dirname, "../Dataset/toy-corpus"));

    /* For E1 */ 
    //entries = [path.resolve(__dirname, "../Dataset/node/deps/v8/test/mjsunit/regress/regress-746909.js")]
    
    /* For E2 */
    //entries = [path.resolve(__dirname, "../Dataset/node/deps/v8/test/mjsunit/array-push2.js")]

    /* For E3 */
    //entries = walk(path.resolve(__dirname, "../Dataset/node/deps/v8/test/mjsunit"));
   
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
    let currCounter = counter;
    runningTasks[workerID] = counter;
    procs[workerID].send({file: entries[counter]});
    counter++;
    setTimeout(() => {
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
