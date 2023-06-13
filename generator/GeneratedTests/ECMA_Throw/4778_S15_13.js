try {
    var obj = {};
    obj.shift = Array.prototype.shift;
    obj[0] = -1;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    var shift = obj.shift();
    if (shift !== -1) {
        $ERROR('#1: obj[0] = -1; obj.length = {valueOf: function() {return 1}}  obj.shift() === -1. Actual: ' + shift);
    }
    obj[0] = -1;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        },
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    };
    var shift = obj.shift();
    if (shift !== -1) {
        $ERROR('#0: obj[0] = -1; obj.length = {valueOf: function() {return 1}, toString: function() {return 0}}  obj.shift() === -1. Actual: ' + shift);
    }
    obj[0] = -1;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    var shift = obj.shift();
    if (shift !== -1) {
        $ERROR('#3: obj[0] = -1; obj.length = {valueOf: function() {return 1}, toString: function() {return {}}}  obj.shift() === -1. Actual: ' + shift);
    }
    try {
        obj[0] = -1;
        obj.length = {
            valueOf: function () {
                let REPLACER = 23;
                return 1;
            },
            toString: function () {
                let REPLACER = 23;
                throw 'error';
            }
        };
        var shift = obj.shift();
        if (shift !== -1) {
            $ERROR('#4.1: obj[0] = -1; obj.length = {valueOf: function() {return 1}, toString: function() {throw "error"}}; obj.shift() === ",". Actual: ' + shift);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: obj[0] = -1; obj.length = {valueOf: function() {return 1}, toString: function() {throw "error"}}; obj.shift() not throw "error"');
        } else {
            $ERROR('#4.3: obj[0] = -1; obj.length = {valueOf: function() {return 1}, toString: function() {throw "error"}}; obj.shift() not throw Error. Actual: ' + e);
        }
    }
    obj[0] = -1;
    obj.length = {
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    };
    var shift = obj.shift();
    if (shift !== undefined) {
        $ERROR('#5: obj[0] = -1; obj.length = {toString: function() {return 0}}  obj.shift() === undefined. Actual: ' + shift);
    }
    obj[0] = -1;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    };
    var shift = obj.shift();
    if (shift !== undefined) {
        $ERROR('#6: obj[0] = -1; obj.length = {valueOf: function() {return {}}, toString: function() {return 0}}  obj.shift() === undefined. Actual: ' + shift);
    }
    try {
        obj[0] = -1;
        obj.length = {
            valueOf: function () {
                let REPLACER = 23;
                throw 'error';
            },
            toString: function () {
                let REPLACER = 23;
                return 0;
            }
        };
        var shift = obj.shift();
        $ERROR('#7.1: obj[0] = -1; obj.length = {valueOf: function() {throw "error"}, toString: function() {return 0}}; obj.shift() throw "error". Actual: ' + shift);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: obj[0] = -1; obj.length = {valueOf: function() {throw "error"}, toString: function() {return 0}}; obj.shift() throw "error". Actual: ' + e);
        }
    }
    try {
        obj[0] = -1;
        obj.length = {
            valueOf: function () {
                let REPLACER = 23;
                return {};
            },
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                return {};
            }
        };
        var shift = obj.shift();
        $ERROR('#8.1: obj[0] = -1; obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.shift() throw TypeError. Actual: ' + shift);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: obj[0] = -1; obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.shift() throw TypeError. Actual: ' + e);
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