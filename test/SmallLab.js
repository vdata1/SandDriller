global.secError = 0; 
async function runHTMLCase(testCase){

         let  testCode = {code: testCase};
         const puppeteer = require('puppeteer');
         const browser = await puppeteer.launch({           
         slowMo : 250, 
         headless : false, //false,
     //  devtools : true
         args: [
             "--disable-web-security" ,
             '--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure', 
             '--disable-background-timer-throttling',
             '--disable-backgrounding-occluded-windows',
             '--disable-renderer-backgrounding', 
             "--enable-chrome-logs", 
             "--log-level=ALL",
             "--log-path=/Users/vdata/Desktop/js-isolation/js-isolation/analysis/test/browser.log"
                 ],
         });
         const page = await browser.newPage();

         const session = await page.target().createCDPSession();
         await session.send('Page.enable');
         await session.send('Page.setWebLifecycleState', {state: 'active'});

         await page.goto("file:///Users/vdata/Desktop/js-isolation/js-isolation/analysis/src/html-helper.html", {waitUntil: 'load', timeout: 60000});
        
         page.on("console", consoleObj => {
                 console.log(consoleObj.text()); 
         });

         //await page.setBypassCSP(true);
         // testCase = testCase.replace(/`/g, "");
         console.log(testCode.code);
         //let base = fs.readFileSync("/Users/vdata/Desktop/js-isolation/js-isolation/analysis/test/BaseFunctions_client.js");
         //await page.evaluate(base.toString());
         let code = `
         ADSAFE.go("TEMPLATE_", function (dom, lib){
             const start = performance.now();
             let secError = 0; 
             const leak = (msg) => {
                 console.log(msg)
                 if (msg.indexOf("SB-SUCCESS") != -1 || (Object.prototype.P || Object.prototype.FEA || Object.prototype.FET || Object.prototype.FIA || Object.prototype.FIT || Object.prototype.CCA || Object.prototype.CCT))
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
         console.log(this.EFT)
         `;
         // console.log(code.toString());
         await page.evaluate(code.toString());
        // await console.log(global.FET)
        // await console.log(this.FET)
        // await console.log(global.FET)

         //await browser.close();
     
     // console.log(testCase)
 }




 let code = `
 
 let x = {}; 
 x.__proto__.FET = "SB-SUCCESS : got it?"
 //window.__proto__.__proto__.FET = "SB-SUCCESS : FET: got it?";
 leak(Object.__proto__.FET);
 console.log(window.__proto__.__proto__);
 console.log(Object.__proto__.__proto__);
 console.log(Object.__proto__ == x.__proto__);

 `; 
  runHTMLCase(code);