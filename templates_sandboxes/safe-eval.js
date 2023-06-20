const fs = require("fs"), path = require("path");
let code = fs.readFileSync(path.resolve(__dirname, "./exploit.js")).toString(); // put your exploit in this file

console.log("Prototype before:");
console.log(Object.prototype);

let endows = {leak:()=>{}, stats:{}}
let safeEval = require("safe-eval");
safeEval("1;" + code, endows);

console.log("Prototype after:");
console.log(Object.prototype);
