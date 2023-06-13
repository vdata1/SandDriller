try {
    var x = [];
    x.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    if (x.length !== 2) {
        $ERROR('#1: x = []; x.length = {valueOf: function() {return 2}};  x.length === 2. Actual: ' + x.length);
    }
    x = [];
    x.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    if (x.length !== 2) {
        $ERROR('#0: x = []; x.length = {valueOf: function() {return 2}, toString: function() {return 1}};  x.length === 2. Actual: ' + x.length);
    }
    x = [];
    x.length = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    if (x.length !== 2) {
        $ERROR('#3: x = []; x.length = {valueOf: function() {return 2}, toString: function() {return {}}};  x.length === 2. Actual: ' + x.length);
    }
    try {
        x = [];
        x.length = {
            valueOf: function () {
                let REPLACER = 23;
                return 2;
            },
            toString: function () {
                let REPLACER = 23;
                throw 'error';
            }
        };
        if (x.length !== 2) {
            $ERROR('#4.1: x = []; x.length = {valueOf: function() {return 2}, toString: function() {throw "error"}}; x.length === ",". Actual: ' + x.length);
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: x = []; x.length = {valueOf: function() {return 2}, toString: function() {throw "error"}}; x.length not throw "error"');
        } else {
            $ERROR('#4.3: x = []; x.length = {valueOf: function() {return 2}, toString: function() {throw "error"}}; x.length not throw Error. Actual: ' + e);
        }
    }
    x = [];
    x.length = {
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    if (x.length !== 1) {
        $ERROR('#5: x = []; x.length = {toString: function() {return 1}};  x.length === 1. Actual: ' + x.length);
    }
    x = [];
    x.length = {
        valueOf: function () {
            let REPLACER = 23;
            return {};
        },
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 1;
        }
    };
    if (x.length !== 1) {
        $ERROR('#6: x = []; x.length = {valueOf: function() {return {}}, toString: function() {return 1}};  x.length === 1. Actual: ' + x.length);
    }
    try {
        x = [];
        x.length = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 1;
            }
        };
        x.length;
        $ERROR('#7.1: x = []; x.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; x.length throw "error". Actual: ' + x.length);
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: x = []; x.length = {valueOf: function() {throw "error"}, toString: function() {return 1}}; x.length throw "error". Actual: ' + e);
        }
    }
    try {
        x = [];
        x.length = {
            valueOf: function () {
                return {};
            },
            toString: function () {
                return {};
            }
        };
        x.length;
        $ERROR('#8.1: x = []; x.length = {valueOf: function() {return {}}, toString: function() {return {}}}  x.length throw TypeError. Actual: ' + x.length);
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: x = []; x.length = {valueOf: function() {return {}}, toString: function() {return {}}}  x.length throw TypeError. Actual: ' + e);
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