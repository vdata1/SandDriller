try {
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        }
    };
    assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt("11", {valueOf: function() {return 2}}) must return the same value returned by parseInt("11", 2)');
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        },
        toString: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt("11", {valueOf: function() {return 2}, toString: function() {return 1}}) must return the same value returned by parseInt("11", 2)');
    var object = {
        valueOf: function () {
            let REPLACER = 23;
            return 2;
        },
        toString: function () {
            let REPLACER = 23;
            return {};
        }
    };
    assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt("11", {valueOf: function() {return 2}, toString: function() {return {}}}) must return the same value returned by parseInt("11", 2)');
    try {
        var object = {
            valueOf: function () {
                throw () => {
                    return () => {
                    };
                };
                return 2;
            },
            toString: function () {
                throw 'error';
            }
        };
        assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt( "11", {valueOf: function() {return 2}, toString: function() {throw \\"error\\"}} ) must return the same value returned by parseInt("11", 2)');
    } catch (e) {
        assert.notSameValue(e, 'error', 'The value of `e` is not "error"');
    }
    var object = {
        toString: function () {
            return 2;
        }
    };
    assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt("11", {toString: function() {return 2}}) must return the same value returned by parseInt("11", 2)');
    var object = {
        valueOf: function () {
            return {};
        },
        toString: function () {
            return 2;
        }
    };
    assert.sameValue(parseInt('11', object), parseInt('11', 2), 'parseInt("11", {valueOf: function() {return {}}, toString: function() {return 2}}) must return the same value returned by parseInt("11", 2)');
    try {
        var object = {
            valueOf: function () {
                throw 'error';
            },
            toString: function () {
                return 2;
            }
        };
        parseInt('11', object);
        Test262Error.thrower('#7.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 2}}; parseInt("11", object) throw "error". Actual: ' + parseInt('11', object));
    } catch (e) {
        assert.sameValue(e, 'error', 'The value of `e` is "error"');
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
        parseInt('11', object);
        Test262Error.thrower('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt("11", object) throw TypeError. Actual: ' + parseInt('11', object));
    } catch (e) {
        assert.sameValue(e instanceof TypeError, true, 'The result of `(e instanceof TypeError)` is true');
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