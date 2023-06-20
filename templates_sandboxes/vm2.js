const fs = require("fs"), path = require("path");
let code = fs.readFileSync(path.resolve(__dirname, "./exploit.js")).toString(); // put your exploit in this file

console.log("Prototype before:");
console.log(Object.prototype);

const {VM} = require("vm2");
let vmInstance = new VM({sandbox: {stats: {}}});
try {
	vmInstance.run(code);
} catch (e) {}

console.log("Prototype after:")
console.log(Object.prototype);
