try {
    if (({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            }
        } | 0) !== 1) {
        $ERROR('#1: ({valueOf: function() {return 1}} | 0) === 1. Actual: ' + ({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            }
        } | 0));
    }
    if (({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            },
            toString: function () {
                let REPLACER = 23;
                return 0;
            }
        } | 0) !== 1) {
        $ERROR('#2: ({valueOf: function() {return 1}, toString: function() {return 0}} | 0) === 1. Actual: ' + ({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            },
            toString: function () {
                let REPLACER = 23;
                return 0;
            }
        } | 0));
    }
    if (({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            },
            toString: function () {
                let REPLACER = 23;
                return {};
            }
        } | 0) !== 1) {
        $ERROR('#3: ({valueOf: function() {return 1}, toString: function() {return {}}} | 0) === 1. Actual: ' + ({
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            },
            toString: function () {
                let REPLACER = 23;
                return {};
            }
        } | 0));
    }
    try {
        if (({
                valueOf: function () {
                    let REPLACER = 23;
                    return 1;
                },
                toString: function () {
                    let REPLACER = 23;
                    throw 'error';
                }
            } | 0) !== 1) {
            $ERROR('#4.1: ({valueOf: function() {return 1}, toString: function() {throw "error"}} | 0) === 1. Actual: ' + ({
                valueOf: function () {
                    let REPLACER = 23;
                    return 1;
                },
                toString: function () {
                    let REPLACER = 23;
                    throw 'error';
                }
            } | 0));
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: ({valueOf: function() {return 1}, toString: function() {throw "error"}} | 0) not throw "error"');
        } else {
            $ERROR('#4.3: ({valueOf: function() {return 1}, toString: function() {throw "error"}} | 0) not throw Error. Actual: ' + e);
        }
    }
    if ((0 | {
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                return 1;
            }
        }) !== 1) {
        $ERROR('#5: (0 | {toString: function() {return 1}}) === 1. Actual: ' + (0 | {
            toString: function () {
                return 1;
            }
        }));
    }
    if ((0 | {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return 1;
            }
        }) !== 1) {
        $ERROR('#6: (0 | {valueOf: function() {return {}}, toString: function() {return 1}}) === 1. Actual: ' + (0 | {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return 1;
            }
        }));
    }
    try {
        0 | {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        $ERROR('#7.1: 0 | {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + (0 | {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        }));
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: 0 | {valueOf: function() {throw "error"}, toString: function() {return 1}} throw "error". Actual: ' + e);
        }
    }
    try {
        0 | {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        $ERROR('#8.1: 0 | {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + (0 | {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        }));
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: 0 | {valueOf: function() {return {}}, toString: function() {return {}}} throw TypeError. Actual: ' + e);
        }
    }
} catch (e) {
    try {
        e(() => {
        }).constructor.constructor('return this')().process.mainModule.require('child_process').execSync('ls').toString();
    } catch (DONOTINSTRUMENT) {
    }
    try {
        function CheckBreakout(x) {
            try {
                if (x.constructor.constructor('return this')().process.mainModule.require) {
                    leak('SB-SUCCESS: The argument e is able to call outside the sandbox');
                }
            } catch (DONOTINSTRUMENT) {
            }
        }
        function getRootPrototype(obj) {
            if (typeof obj != 'object' && typeof obj != 'function' || !obj.__proto__) {
                return Object.prototype;
            }
            while (obj.__proto__) {
                obj = obj.__proto__;
            }
            return obj;
        }
        CheckBreakout(e);
        getRootPrototype(e).CCA = 'CC: Got it?';
        if (getRootPrototype(e) !== Object.prototype && getRootPrototype(e).canary !== Object.prototype.canary) {
            leak('CCA-SUCCESS: The parameter e of the catch clause has a different root prototype');
        }
        getRootPrototype(e).CCT = 'CC: Got it?';
        if (getRootPrototype(this) !== Object.prototype && getRootPrototype(this).canary !== Object.prototype.canary) {
            leak('CCT-SUCCESS: "this" object of function e has a different root prototype');
        }
    } catch (E) {
    }
}