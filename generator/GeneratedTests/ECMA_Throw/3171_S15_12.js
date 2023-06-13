try {
    var x = new Array(0, 1, 2, 3);
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '+';
        }
    };
    if (x.join(object) !== '0[object Object]1[object Object]2[object Object]3') {
        $ERROR('#1: var object = {valueOf: function() {return "+"}}; x.join(object) === "0[object Object]1[object Object]2[object Object]3". Actual: ' + x.join(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '+';
        },
        toString: function () {
            let REPLACER = 23;
            return '*';
        }
    };
    if (x.join(object) !== '0*1*2*3') {
        $ERROR('#2: var object = {valueOf: function() {return "+"}, toString: function() {return "*"}}; x.join(object) === "0*1*2*3". Actual: ' + x.join(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '+';
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    if (x.join(object) !== '0+1+2+3') {
        $ERROR('#3: var object = {valueOf: function() {return "+"}, toString: function() {return {}}}; x.join(object) === "0+1+2+3". Actual: ' + x.join(object));
    }
    try {
        var object = {
            valueOf: function () {
                let REPLACER = 23;
                throw 'error';
            },
            toString: function () {
                let REPLACER = 23;
                return '*';
            }
        };
        if (x.join(object) !== '0*1*2*3') {
            $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}}; x.join(object) === "0*1*2*3". Actual: ' + x.join(object));
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}}; x.join(object) not throw "error"');
        } else {
            $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}}; x.join(object) not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            let REPLACER = 23;
            return '*';
        }
    };
    if (x.join(object) !== '0*1*2*3') {
        $ERROR('#5: var object = {toString: function() {return "*"}}; x.join(object) === "0*1*2*3". Actual: ' + x.join(object));
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            let REPLACER = 23;
            return '*';
        }
    };
    if (x.join(object) !== '0*1*2*3') {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return "*"}}; x.join(object) === "0*1*2*3". Actual: ' + x.join(object));
    }
    try {
        var object = {
            valueOf: function () {
                let REPLACER = 23;
                return '+';
            },
            toString: function () {
                let REPLACER = 23;
                throw 'error';
            }
        };
        x.join(object);
        $ERROR('#7.1: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}}; x.join(object) throw "error". Actual: ' + x.join(object));
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}}; x.join(object) throw "error". Actual: ' + e);
        }
    }
    try {
        var object = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return {};
            },
            toString: function () {
                return {};
            }
        };
        x.join(object);
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; x.join(object) throw TypeError. Actual: ' + x.join(object));
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; x.join(object) throw TypeError. Actual: ' + e);
        }
    }
    try {
        var object = {
            toString: function () {
                throw 'error';
            }
        };
        [].join(object);
        $ERROR('#9.1: var object = {toString: function() {throw "error"}}; [].join(object) throw "error". Actual: ' + [].join(object));
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#9.2: var object = {toString: function() {throw "error"}}; [].join(object) throw "error". Actual: ' + e);
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