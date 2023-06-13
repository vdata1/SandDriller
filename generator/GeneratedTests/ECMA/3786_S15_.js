try {
    var object = {
        valueOf: function () {
            return '+';
        }
    };
    var x = new Array(object);
    if (x.toString() !== x.join()) {
        $ERROR('#1.1: var object = {valueOf: function() {return "+"}} var x = new Array(object); x.toString() === x.join(). Actual: ' + x.toString());
    } else {
        if (x.toString() !== '[object Object]') {
            $ERROR('#1.2: var object = {valueOf: function() {return "+"}} var x = new Array(object); x.toString() === "[object Object]". Actual: ' + x.toString());
        }
    }
    var object = {
        valueOf: function () {
            return '+';
        },
        toString: function () {
            return '*';
        }
    };
    var x = new Array(object);
    if (x.toString() !== x.join()) {
        $ERROR('#2.1: var object = {valueOf: function() {return "+"}, toString: function() {return x.join()}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
    } else {
        if (x.toString() !== '*') {
            $ERROR('#2.2: var object = {valueOf: function() {return "+"}, toString: function() {return "*"}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
        }
    }
    var object = {
        valueOf: function () {
            return '+';
        },
        toString: function () {
            return {};
        }
    };
    var x = new Array(object);
    if (x.toString() !== x.join()) {
        $ERROR('#3.1: var object = {valueOf: function() {return x.join()}, toString: function() {return {}}} var x = new Array(object); x.toString() === "+". Actual: ' + x.toString());
    } else {
        if (x.toString() !== '+') {
            $ERROR('#3.2: var object = {valueOf: function() {return "+"}, toString: function() {return {}}} var x = new Array(object); x.toString() === "+". Actual: ' + x.toString());
        }
    }
    try {
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return '*';
            }
        };
        var x = new Array(object);
        if (x.toString() !== x.join()) {
            $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return x.join()}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
        } else {
            if (x.toString() !== '*') {
                $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
            }
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.toString() not throw "error"');
        } else {
            $ERROR('#4.4: var object = {valueOf: function() {throw "error"}, toString: function() {return "*"}} var x = new Array(object); x.toString() not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return '*';
        }
    };
    var x = new Array(object);
    if (x.toString() !== x.join()) {
        $ERROR('#5.1: var object = {toString: function() {return x.join()}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
    } else {
        if (x.toString() !== '*') {
            $ERROR('#5.2: var object = {toString: function() {return "*"}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
        }
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
    if (x.toString() !== x.join()) {
        $ERROR('#6.1: var object = {valueOf: function() {return {}}, toString: function() {return x.join()}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
    } else {
        if (x.toString() !== '*') {
            $ERROR('#6.2: var object = {valueOf: function() {return {}}, toString: function() {return "*"}} var x = new Array(object); x.toString() === "*". Actual: ' + x.toString());
        }
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
        x.toString();
        $ERROR('#7.1: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}} var x = new Array(object); x.toString() throw "error". Actual: ' + x.toString());
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {return "+"}, toString: function() {throw "error"}} var x = new Array(object); x.toString() throw "error". Actual: ' + e);
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
        x.toString();
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}} var x = new Array(object); x.toString() throw TypeError. Actual: ' + x.toString());
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}} var x = new Array(object); x.toString() throw TypeError. Actual: ' + e);
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