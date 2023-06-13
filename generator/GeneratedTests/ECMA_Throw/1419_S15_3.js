try {
    var x = [];
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    x[object] = 0;
    if (x['[object Object]'] !== 0) {
        $ERROR('#1: x = []; var object = {valueOf: function() {return 1}}; x[object] = 0; x["[object Object]"] === 0. Actual: ' + x['[object Object]']);
    }
    x = [];
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
    x[object] = 0;
    if (x[0] !== 0) {
        $ERROR('#2: x = []; var object = {valueOf: function() {return 1}, toString: function() {return 0}}; x[object] = 0; x[0] === 0. Actual: ' + x[0]);
    }
    x = [];
    var object = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return 1;
        },
        toString: function () {
            return {};
        }
    };
    x[object] = 0;
    if (x[1] !== 0) {
        $ERROR('#3: x = []; var object = {valueOf: function() {return 1}, toString: function() {return {}}}; x[object] = 0; x[1] === 0. Actual: ' + x[1]);
    }
    try {
        x = [];
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        x[object] = 0;
        if (x[1] !== 0) {
            $ERROR('#4.1: x = []; var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; x[object] = 0; x[1] === 1. Actual: ' + x[1]);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: x = []; var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; x[object] = 0; x[1] === 1. Actual: ' + 'error');
        } else {
            $ERROR('#4.3: x = []; var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; x[object] = 0; x[1] === 1. Actual: ' + e);
        }
    }
    x = [];
    var object = {
        toString: function () {
            return 1;
        }
    };
    x[object] = 0;
    if (x[1] !== 0) {
        $ERROR('#5: x = []; var object = {toString: function() {return 1}}; x[object] = 0; x[1] === 0. Actual: ' + x[1]);
    }
    x = [];
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 1;
        }
    };
    x[object] = 0;
    if (x[1] !== 0) {
        $ERROR('#6: x = []; var object = {valueOf: function() {return {}}, toString: function() {return 1}}; x[object] = 0; x[1] === 0. Actual: ' + x[1]);
    }
    try {
        x = [];
        var object = {
            valueOf: function () {
                return 1;
            },
            toString: function () {
                throw 'error';
            }
        };
        x[object];
        $ERROR('#7.1: x = []; var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; x[object] throw "error". Actual: ' + x[object]);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: x = []; var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; x[object] throw "error". Actual: ' + e);
        }
    }
    try {
        x = [];
        var object = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        x[object];
        $ERROR('#8.1: x = []; var object = {valueOf: function() {return {}}, toString: function() {return {}}}; x[object] throw TypeError. Actual: ' + x[object]);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: x = []; var object = {valueOf: function() {return {}}, toString: function() {return {}}}; x[object] throw TypeError. Actual: ' + e);
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