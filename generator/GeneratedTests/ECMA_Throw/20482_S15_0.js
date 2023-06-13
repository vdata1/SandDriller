try {
    var object = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return '^';
        }
    };
    if (encodeURI(object) !== '%5Bobject%20Object%5D') {
        $ERROR('#1: var object = {valueOf: function() {return "^"}}; encodeURI(object) === %5Bobject%20Object%5D. Actual: ' + encodeURI(object));
    }
    var object = {
        valueOf: function () {
            return '';
        },
        toString: function () {
            return '^';
        }
    };
    if (encodeURI(object) !== '%5E') {
        $ERROR('#2: var object = {valueOf: function() {return ""}, toString: function() {return "^"}}; encodeURI(object) === "%5E". Actual: ' + encodeURI(object));
    }
    var object = {
        valueOf: function () {
            return '^';
        },
        toString: function () {
            return {};
        }
    };
    if (encodeURI(object) !== '%5E') {
        $ERROR('#3: var object = {valueOf: function() {return "^"}, toString: function() {return {}}}; encodeURI(object) === "%5E". Actual: ' + encodeURI(object));
    }
    try {
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return '^';
            }
        };
        if (encodeURI(object) !== '%5E') {
            $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return "^"}}; encodeURI(object) === "%5E". Actual: ' + encodeURI(object));
        }
    } catch (e) {
        if (e === 'error') {
            $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "^"}}; encodeURI(object) not throw "error"');
        } else {
            $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "^"}}; encodeURI(object) not throw Error. Actual: ' + e);
        }
    }
    var object = {
        toString: function () {
            return '^';
        }
    };
    if (encodeURI(object) !== '%5E') {
        $ERROR('#5: var object = {toString: function() {return "^"}}; encodeURI(object) === "%5E". Actual: ' + encodeURI(object));
    }
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return '^';
        }
    };
    if (encodeURI(object) !== '%5E') {
        $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return "^"}}; encodeURI(object) === "%5E". Actual: ' + encodeURI(object));
    }
    try {
        var object = {
            valueOf: function () {
                return '^';
            },
            toString: function () {
                throw 'error';
            }
        };
        encodeURI(object);
        $ERROR('#7.1: var object = {valueOf: function() {return "^"}, toString: function() {throw "error"}}; encodeURI(object) throw "error". Actual: ' + encodeURI(object));
    } catch (e) {
        if (e !== 'error') {
            $ERROR('#7.2: var object = {valueOf: function() {return "^"}, toString: function() {throw "error"}}; encodeURI(object) throw "error". Actual: ' + e);
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
        encodeURI(object);
        $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; encodeURI(object) throw TypeError. Actual: ' + encodeURI(object));
    } catch (e) {
        if (e instanceof TypeError !== true) {
            $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; encodeURI(object) throw TypeError. Actual: ' + e);
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