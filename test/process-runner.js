var babel = require("@babel/core");
const EVAL = eval; 
global.secError = 0;
const generator = require("./generator");
const fs = require("fs");

const base = require("./BaseFunctions.js");
const { CONNREFUSED } = require("dns");

const sandbox = "vm2";
const useGenerator = false; //change to 'true' if you want to use varient generator
const maxVariants = 5;

process
    .on('unhandledRejection', (reason, p) => {
        // console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        // console.error(err, 'Uncaught Exception thrown');
    });

global.flag = "SandDriller-23420409";

if (sandbox === "vm2") {
    const {VM} = require('vm2');
    startWithSandbox(VM);
}
if (sandbox === "realms-shim") {
    const Realm = require('realms-shim/dist/realms-shim.cjs.js');
    startWithSandbox(Realm);
}
if (sandbox === "ses") {
    let ses = require("ses");
    startWithSandbox(ses);
}
if (sandbox === "safe-eval") {
    const safeEval = require("safe-eval");
    startWithSandbox(safeEval);
}
if (sandbox === "notevil") {
    const notEvil = require("notevil");
    startWithSandbox(notEvil);
}
if (sandbox === "near-membrane") {

    import('@locker/near-membrane-node').then((a) => {
        const createVirtualEnvironment = a.default;
        startWithSandbox(createVirtualEnvironment);
    });
}
if (sandbox === "adsafe" || sandbox === "caja") {
    //
    startWithSandbox(""); 
    console.log("Client-side analysis");


}
if(sandbox === "none"){
    startWithClientSideSandbox("");
    console.log("Running testcases without sandbox, without instrumentation");

}

function startWithClientSideSandbox(){
    return 0; 
}

function startWithSandbox(sb) {

    const analysis = require("../src/analysis.js");
    const fs = require("fs");
    const path = require("path");
    const assert = require("assert");

    var $262 = {
        detachArrayBuffer() {
            throw new Test262Error('$262.detachArrayBuffer called.');
        },
        destroy() {}
    };

    process.on('message', async function(info) {
        let id = info.file;

        let stats = [];
        let fileContent = fs.readFileSync(id).toString();
        let toAnalyze = [];

        if (useGenerator) {
            try {
                toAnalyze = generator.generate(fileContent);
            } catch(e) {}
        } else {
            toAnalyze.push(fileContent);
        }
        for (let i  = 0; i < toAnalyze.length && i < maxVariants; i++) {
            delete Object.prototype.P;
            delete Object.prototype.FEA;
            delete Object.prototype.FET;
            delete Object.prototype.FIA;
            delete Object.prototype.FIT;
            delete Object.prototype.CCA;
            delete Object.prototype.CCT;
            let execStart = 0;
            let execTime = 0;
            let instError = 0, runError = 0, secError = 0, indivStats = {oracleChecks: 0};
            
            function pushValues(clientRes, fn){
                fn(clientRes); 
            }

            try {                
                fileContent = analysis.instrument(toAnalyze[i]);                
                // console.log(id + i + "" , fileContent)
                // console.log("fileContent:  ", fileContent)
            } catch (e) {
                instError = 1;
            }
            let evalScript;
            if (!instError) {
                try {
                    let customRequire = function(arg) {
                        if (arg.indexOf(".") != -1)
                            return require(path.resolve(path.dirname(id), arg));
                        else
                            return require(arg);
                    }
                    assert.sameValue = assert.equal;
                    let endows = {
                        // assert : assert,
                        // assertEquals: assert.equal,
                        isConstructor: () => {},
                        $262 : $262,
                        require: customRequire,
                        stats: indivStats,
                        // console: console,
                        Test262Error: Error,
                        $DONE: function() {},                        
                        // ctorr:z=>new z(),
                        // cal:z=>z(),
                        // call:x=>x.a(),
                        // ctor:x=>new x(),
                        updateOracleChecks: (count) => {
                            indivStats.oracleChecks = count;
                        },
                        leak: (msg) => {
                            // console.log(msg)
                            if (msg.indexOf("SB-SUCCESS") != -1 || (Object.prototype.P || Object.prototype.FEA || Object.prototype.FET || Object.prototype.FIA || Object.prototype.FIT || Object.prototype.CCA || Object.prototype.CCT))
                                secError = 1;
                        },

                        //########### BASE FUNCTIONS ###########

                          $DONE : base.$DONE,
                          assert : base.assert,
                          $ERROR : base.$ERROR,
                          asyncGC : base.asyncGC,
                        //getReport : getReport,
                          __isArray : base.__isArray,
                          taintArray : base.taintArray,
                          TypedArray : base.TypedArray,
                          isWritable : base.isWritable,
                          testOption : base.testOption,
                          isSameValue : base.isSameValue,
                          end_of_time : base.end_of_time,
                          buildString : base.buildString,
                          taintMethod : base.taintMethod,
                          isEnumerable : base.isEnumerable,
                          Test262Error : base.Test262Error,
                        //Test262Error : base.Test262Error,
                          asyncGCDeref : base.asyncGCDeref,
                          compareArray : base.compareArray,
                        //$DETACHBUFFER : $DETACHBUFFER,
                          start_of_time : base.start_of_time,
                          date_2099_end : base.date_2099_end,
                          date_1969_end : base.date_1969_end,
                          date_1899_end : base.date_1899_end,
                          date_1999_end : base.date_1999_end,
                          checkSequence : base.checkSequence,
                          verifyEqualTo : base.verifyEqualTo,
                          isConstructor : base.isConstructor,
                          arrayContains : base.arrayContains,
                          AsyncFunction : base.AsyncFunction,
                          __globalObject : base.__globalObject,
                          resolveAsyncGC : base.resolveAsyncGC,
                          verifyWritable : base.verifyWritable,
                          $DONOTEVALUATE : base.$DONOTEVALUATE,
                          verifyProperty : base.verifyProperty,
                          isConfigurable : base.isConfigurable,
                          matchValidator : base.matchValidator,
                          $MAX_ITERATIONS : base.$MAX_ITERATIONS,
                          allowProxyTraps : base.allowProxyTraps,
                          date_1970_start : base.date_1970_start,
                          date_1900_start : base.date_1900_start,
                          date_2000_start : base.date_2000_start,
                          date_2100_start : base.date_2100_start,
                          taintProperties : base.taintProperties,
                          testNumberFormat : base.testNumberFormat,
                          regExpProperties : base.regExpProperties,
                          verifyEnumerable : base.verifyEnumerable,
                          taintDataProperty : base.taintDataProperty,
                          verifyNotWritable : base.verifyNotWritable,
                          GeneratorFunction : base.GeneratorFunction,
                          decimalToHexString : base.decimalToHexString,
                          verifyConfigurable : base.verifyConfigurable,
                          AsyncArrowFunction : base.AsyncArrowFunction,
                          testPropertyEscapes : base.testPropertyEscapes,
                          verifyNotEnumerable : base.verifyNotEnumerable,
                          getLocaleSupportInfo : base.getLocaleSupportInfo,
                          checkSettledPromises : base.checkSettledPromises,
                          assertRelativeDateMs : base.assertRelativeDateMs,
                          byteConversionValues : base.byteConversionValues,
                          assertNativeFunction : base.assertNativeFunction,
                          intArrayConstructors : base.intArrayConstructors,
                          getDateTimeComponents : base.getDateTimeComponents,
                          numberingSystemDigits : base.numberingSystemDigits,
                          verifyNotConfigurable : base.verifyNotConfigurable,
                          getInvalidLanguageTags : base.getInvalidLanguageTags,
                          AsyncGeneratorFunction : base.AsyncGeneratorFunction,
                          isValidNumberingSystem : base.isValidNumberingSystem,
                          __consolePrintHandle__ : base.__consolePrintHandle__,
                          floatArrayConstructors : base.floatArrayConstructors,
                          testWithIntlConstructors : base.testWithIntlConstructors,
                          testTypedArrayConversions : base.testTypedArrayConversions,
                          decimalToPercentHexString : base.decimalToPercentHexString,
                          getInvalidLocaleArguments : base.getInvalidLocaleArguments,
                          WellKnownIntrinsicObjects : base.WellKnownIntrinsicObjects,
                          getDateTimeComponentValues : base.getDateTimeComponentValues,
                          testWithAtomicsNonViewValues : base.testWithAtomicsNonViewValues,
                          testForUnwantedRegExpChanges : base.testForUnwantedRegExpChanges,
                          validateNativeFunctionSource : base.validateNativeFunctionSource,
                          regExpPropertiesDefaultValues : base.regExpPropertiesDefaultValues,
                          testWithAtomicsInBoundsIndices : base.testWithAtomicsInBoundsIndices,
                          assertToStringOrNativeFunction : base.assertToStringOrNativeFunction,
                          testWithAtomicsOutOfBoundsIndices : base.testWithAtomicsOutOfBoundsIndices,
                          testWithBigIntTypedArrayConstructors : base.testWithBigIntTypedArrayConstructors,
                          isCanonicalizedStructurallyValidLanguageTag : base.isCanonicalizedStructurallyValidLanguageTag,
                          isCanonicalizedStructurallyValidTimeZoneName : base.isCanonicalizedStructurallyValidTimeZoneName,
                          testWithAtomicsFriendlyTypedArrayConstructors : base.testWithAtomicsFriendlyTypedArrayConstructors,
                          testWithNonAtomicsFriendlyTypedArrayConstructors : base.testWithNonAtomicsFriendlyTypedArrayConstructors,


                    };
                    if (sandbox === "vm2") {
                        
                        let vmInstance = new sb({timeout: 5000, sandbox: endows});
                        execStart = process.hrtime()
                        vmInstance.run(fileContent);
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;

                    } else if (sandbox === "realms-shim") {
                        let realm = sb.makeRootRealm();
                        execStart = process.hrtime()
                        realm.evaluate(fileContent, endows);
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                    } else if (sandbox === "ses") {
                        lockdown();
                        execStart = process.hrtime()
                        let comp = new Compartment(endows);
                        comp.evaluate(fileContent);
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                    } else if (sandbox === "safe-eval") {
                        execStart = process.hrtime()
                        sb("1;" + fileContent, endows);
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                    } else if (sandbox === "notevil") {
                        let props = Object.getOwnPropertyNames(global);
                        for (let i = 0; i < props.length; i++) {
                            endows[props[i]] = global[props[i]];
                        }
                        execStart = process.hrtime()
                        sb(fileContent, endows);
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                    } else if (sandbox === "near-membrane") {                                                
                        execStart = process.hrtime()
                        evalScript = sb({endowments: endows});                        
                        evalScript(fileContent)                                                                   
                        let time = process.hrtime(execStart);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                    } else if(sandbox === "adsafe") {
                       /*
                       * WARNING: TO KEEP THE PROPERTY RIGHTS, YOU NEED TO INTIGRATE ADSAFE CODE WITH THE TOOL, 
                       * THE BEST PRACTICE IS TO COPY THE ADSAFE SANDBOX SOURCE CODE TO "${PATH_TO_PROJECT}/src/ADsafe" 
                       * ADSAFE OFFICIAL WEBSITE: https://www.adsafe.org/
                       * GITHUB: https://github.com/douglascrockford/ADsafe 
                       */
                       global.secError = 0; 
                       async function runHTMLCase(testCase){
                                let  testCode = {code: testCase};
                                const puppeteer = require('puppeteer');
			       
                                const browser = await puppeteer.launch({           
                                slowMo : 250, 
                                headless : true,
                                devtools : false,
                                //executablePath: '/usr/bin/chromium',  
                                args: [
                                        "--no-sandbox",
                                        "--single-process",
                                        "--no-zygote"
                                    ],
                                });
                                const page = await browser.newPage();
                                const session = await page.target().createCDPSession();
                                await session.send('Page.enable');
                                await session.send('Page.setWebLifecycleState', {state: 'active'});
                                await page.goto("file://"+path.resolve(__dirname, "../src/html-helper.html"), {waitUntil: 'load', timeout: 60000});
                                await console.log(id);
                                page.on("console", consoleObj => {
                                    clientRes = (consoleObj.text().split(" "));
                                    secError = parseInt(clientRes[0]);
                                    console.log("XX:  ", clientRes);
                                    indivStats.oracleChecks = parseInt(clientRes[1]);
                                    execTime = parseFloat(clientRes[2]);
                                    runError = 0; 
                                    if(clientRes.length < 3){
                                        secError = 0; 
                                        execTime = 0; 
                                        indivStats.oracleChecks = 0; 
                                        runError = 1; 
                                    }
                                    global.stat =  {fileId: id, sandBox: "adsafe", timeExec : execTime, oracleChecks: indivStats.oracleChecks, instError: instError, runError: runError, secError: secError || global.secError, variants: toAnalyze.length};
                                    stats.push(global.stat);
                                    console.log("callback scope: secError: ", secError, "callback scope: indivStats: ", indivStats, "callback scope: execTime: ", execTime);
                                    
                                    if(secError == 1 || global.secError == 1){
                                        global.secError = 0;
                                        console.log("Horray! secError!! ", secError);
                                    }
                                });
                                let code = `
                                ADSAFE.go("TEMPLATE_", function (dom, lib){
                                    const start = performance.now();
                                    let secError = 0; 
                                    const leak = (msg) => {
                                       // console.log(msg)
                                       if (msg.indexOf("SB-SUCCESS") != -1 || msg.indexOf("FIA-SUCCESS") != -1 || msg.indexOf("FIT-SUCCESS") != -1  || msg.indexOf("FEA-SUCCESS") != -1 || msg.indexOf("FIT-SUCCESS") != -1 || msg.indexOf("P-SUCCESS") != -1 || msg.indexOf("CCT-SUCCESS") != -1 || msg.indexOf("CCA-SUCCESS") != -1 || (Object.prototype.P || Object.prototype.FEA || Object.prototype.FET || Object.prototype.FIA || Object.prototype.FIT || Object.prototype.CCA || Object.prototype.CCT))
                                       secError = 1;
                                            // console.log("secError: ", secError);
                                        };  
                                        // window.stats = {oracleChecks : 0}; 
                                        let stats = {oracleChecks : 0}; 
                                        const updateOracleChecks = (count) => {
                                        stats.oracleChecks = count;
                                        }
                                    ${testCode.code}
                                    const execTime = performance.now() - start;
                                console.log(secError, stats.oracleChecks, execTime)
                                });
                                `;
                                await page.evaluate(code);
			    	            await Promise.race([page.close(), page.close(), page.close(), page.close(), page.close(), page.close()]);  
                                await browser.close();
                        }
                       await runHTMLCase(fileContent);

                    } else if(sandbox === "caja"){
                        /*
                        * WARNING: TO KEEP THE PROPERTY RIGHTS, YOU NEED CAJA SERVER UP & RUNNING, 
                        * FOR MORE DETAILS: https://developers.google.com/caja
                        * CAJA ON GITHUB: https://github.com/googlearchive/caja  
                        */
                        global.secError = 0; 
                       async function runHTMLCase(testCase){
                                let  testCode = {code: testCase};
                                const puppeteer = require('puppeteer');
                                const browser = await puppeteer.launch({           
                                slowMo : 250, 
                                headless : false,
                            //  devtools : true
                                args: [
                                    "--disable-web-security" ,
                                    '--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure'
                                        ],
                                });
                                const page = await browser.newPage();
                                await page.goto("http://localhost:3000/ses/explicit.html");

                                page.on("console", consoleObj => {
                                    //console.log(consoleObj.text());
                                        clientRes = (consoleObj.text().split(" "));
                                        secError = parseInt(clientRes[0]);
                                        console.log("XX:  ", clientRes);
                                        indivStats.oracleChecks = parseInt(clientRes[1]);
                                        execTime = parseFloat(clientRes[2]);
                                        runError = 0; 
                                        if(clientRes.length < 3){
                                            secError = 0; 
                                            execTime = 0; 
                                            indivStats.oracleChecks = 0; 
                                            runError = 1; 
                                        }
                                        global.stat =  {fileId: id, sandBox: "caja", timeExec : execTime, oracleChecks: indivStats.oracleChecks, instError: instError, runError: runError, secError: secError || global.secError, variants: toAnalyze.length};
                                        stats.push(global.stat);
                                        console.log("callback scope: secError: ", secError, "callback scope: indivStats: ", indivStats, "callback scope: execTime: ", execTime);
                                        
                                        if(secError == 1 || global.secError == 1){
                                            global.secError = 0;
                                            console.log("Horray! secError!! ", secError);
                                        }
                                });
                                console.log("First msg")
                                await page.setBypassCSP(true);
                                testCode.code = babel.transformSync(testCode.code, {presets:["@babel/preset-env"]}).code; 
                                let code = `
                                const start = performance.now();
                                 let secError = 0; 
                                const leak = (msg) => {
                                //   console.log(msg)
                                   if (msg.indexOf("SB-SUCCESS") != -1 || msg.indexOf("FIA-SUCCESS") != -1 || msg.indexOf("FIT-SUCCESS") != -1  || msg.indexOf("FEA-SUCCESS") != -1 || msg.indexOf("FIT-SUCCESS") != -1 || msg.indexOf("P-SUCCESS") != -1 || msg.indexOf("CCT-SUCCESS") != -1 || msg.indexOf("CCA-SUCCESS") != -1 || (Object.prototype.P || Object.prototype.FEA || Object.prototype.FET || Object.prototype.FIA || Object.prototype.FIT || Object.prototype.CCA || Object.prototype.CCT))
                                  secError = 1;
                                   }; 
                                   let wind = {};  
                                   let stats = {oracleChecks : 0};
                                   wind.stats = stats; 
                                   const updateOracleChecks = (count) => {
                                      stats.oracleChecks = count;
                                    }    
                                    cajaVM.Function("leak","global", "window", "updateOracleChecks",\`${testCode.code}\`)(leak, wind, wind, updateOracleChecks);
                                    const execTime = performance.now() - start;
                                    console.log(secError, stats.oracleChecks, execTime);
                                `;
                                try{
                                    console.log(code);
                                    await page.evaluate(code);
                                }catch(e){
                                    console.log(e)
                                }
                                console.log("Second msg");
                                await Promise.race([page.close(), page.close(), page.close(), page.close(), page.close(), page.close()]);  
                                await browser.close();                            
                                console.log("Closed!")
                        }
                       await runHTMLCase(fileContent);
                       
                    } else if(sandbox === "none"){

                        execStart = process.hrtime();
                        EVAL(toAnalyze[i]);
                        execTime = (time[0] * 1000 + time[1]) / 1000000;
                        
                    }
                    if(secError){
                        let split = id.split("/");
                        //console.log("writing: " + "/tmp/res/"+ split[split.length - 1].split(".")[0] + i +".js")
                        fs.writeFileSync("/tmp/res/"+ split[split.length - 1].split(".")[0] + "_v" + i +".js", fileContent);
                    }
                
                } catch(e) {
                   // console.log(e);
                    runError = 1;
                }
            }
            if (sandbox === "near-membrane") {
                try {            
                    evalScript("updateOracleChecks(stats.oracleChecks)")
                } catch(e) {
                }
            }            
            if(sandbox === "near-membrane" || sandbox === "ses" || sandbox === "realms-shim" || sandbox === "vm2" || sandbox === "safe-eval" || sandbox === "none" ){    
                global.stat =  {fileId: id, sandBox: sandbox, timeExec : execTime, oracleChecks: indivStats.oracleChecks, instError: instError, runError: runError, secError: secError || global.secError, variants: toAnalyze.length};
                stats.push(global.stat);
            }
            console.log("stat: ", global.stat);
        }

        process.send(stats);
    });

}
