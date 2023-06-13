try {
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return '+';
        }
    };
    var x = new Array(object);
    if (x.join() !== '[object Object]') {
        $ERROR('#1: var object = {valueOf: function() {return "+"}} var x = new Array(object); x.join() === "[object Object]". Actual: ' + x.join());
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
    var x = new Array(object);
    if (x.join() !== '*') {
        $ERROR('#2: var object = {valueOf: function() {return "+"}, toString: function() {return "*"}} var x = new Array(object); x.join() === "*". Actual: ' + x.join());
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
    var x = new Array(object);
    if (x.join() !== '+') {
        $ERROR('#3: var object = {valueOf: function() {return "+"}, toString: function() {return {}}} var x = new Array(object); x.join() === "+". Actual: ' + x.join());
    }
    try {
        var object = {
            valueOf: function () {
                let REPLACER = 23;
                throw 'error';
            },
            toString: function () {
                throw () => {
                    return () => {
                    };
                };
                return '*';
            }
        };
        var x = new Array(object);
        if (x.join() !== '*') {
            $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.join() === "*". Actual: ' + x.join());
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.join() not throw "error"');
        } else {
            $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.join() not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return '*';
        }
    };
    var x = new Array(object);
    if (x.join() !== '*') {
        $ERROR('#5: var object = {toString: function() {return "*"}} var x = new Array(object); x.join() === "*". Actual: ' + x.join());
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return '*';
        }
    };
    var x = new Array(object);
    if (x.join() !== '*') {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return "*"}} var x = new Array(object); x.join() === "*". Actual: ' + x.join());
    }
    try {
        var object = {
            valueOf: function () {
                return '+';
            },
            toString: function () {
                throw 'error';
            }
        };
        var x = new Array(object);
        x.join();
        $ERROR('#7.1: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}} var x = new Array(object); x.join() throw "error". Actual: ' + x.join());
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}} var x = new Array(object); x.join() throw "error". Actual: ' + e);
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
        var x = new Array(object);
        x.join();
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}} var x = new Array(object); x.join() throw TypeError. Actual: ' + x.join());
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}} var x = new Array(object); x.join() throw TypeError. Actual: ' + e);
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