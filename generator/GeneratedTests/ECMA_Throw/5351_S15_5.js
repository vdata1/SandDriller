try {
    var obj = {};
    obj.unshift = Array.prototype.unshift;
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        }
    };
    var unshift = obj.unshift();
    if (unshift !== 3) {
        $ERROR('#1:  obj.length = {valueOf: function() {return 3}}  obj.unshift() === 3. Actual: ' + unshift);
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    var unshift = obj.unshift();
    if (unshift !== 3) {
        $ERROR('#0:  obj.length = {valueOf: function() {return 3}, toString: function() {return 1}}  obj.unshift() === 3. Actual: ' + unshift);
    }
    obj.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 3;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    var unshift = obj.unshift();
    if (unshift !== 3) {
        $ERROR('#1:  obj.length = {valueOf: function() {return 3}, toString: function() {return {}}}  obj.unshift() === 3. Actual: ' + unshift);
    }
    try {
        obj.length = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 3;
            },
            toString: function () {
                throw 'error';
            }
        };
        var unshift = obj.unshift();
        if (unshift !== 3) {
            $ERROR('#4.1:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.unshift() === ",". Actual: ' + unshift);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.unshift() not throw "error"');
        } else {
            $ERROR('#4.3:  obj.length = {valueOf: function() {return 3}, toString: function() {throw "error"}}; obj.unshift() not throw Error. Actual: ' + e);
        }
    }
    obj.length = {
        toString: function () {
            return 1;
        }
    };
    var unshift = obj.unshift();
    if (unshift !== 1) {
        $ERROR('#5:  obj.length = {toString: function() {return 1}}  obj.unshift() === 1. Actual: ' + unshift);
    }
    obj.length = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    var unshift = obj.unshift();
    if (unshift !== 1) {
        $ERROR('#6:  obj.length = {valueOf: function() {return {}}, toString: function() {return 1}}  obj.unshift() === 1. Actual: ' + unshift);
    }
    try {
        obj.length = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        var unshift = obj.unshift();
        $ERROR('#7.1:  obj.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; obj.unshift() throw "error". Actual: ' + unshift);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2:  obj.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; obj.unshift() throw "error". Actual: ' + e);
        }
    }
    try {
        obj.length = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        var unshift = obj.unshift();
        $ERROR('#8.1:  obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.unshift() throw TypeError. Actual: ' + unshift);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2:  obj.length = {valueOf: function() {return {}}, toString: function() {return {}}}  obj.unshift() throw TypeError. Actual: ' + e);
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