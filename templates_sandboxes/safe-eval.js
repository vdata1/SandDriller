let code = `

//YOUR CODE HERE; 

`;


let leak = console.log;
let endows = {leak:leak}
let safeEval = require("safe-eval");
safeEval("1;" + code, endows);
console.log("Done");
console.log(Object.prototype.p, {}.polluted, Object.prototype.FEA, Object.prototype.FET, Object.prototype.FIA, Object.prototype.FIT, Object.prototype.CCA, Object.prototype.CCT);
