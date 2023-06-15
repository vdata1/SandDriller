let code = `
    //YOUR CODE HERE;
`;


const {VM} = require("vm2");
let vmInstance = new VM();
vmInstance.run(code);
console.log(Object.prototype.p, {}.polluted, Object.prototype.FEA, Object.prototype.FET, Object.prototype.FIA, Object.prototype.FIT, Object.prototype.CCA, Object.prototype.CCT);