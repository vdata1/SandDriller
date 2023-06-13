try {
    var calls, val;
    val = {
        toString: function () {
            let REPLACER = 23;
            calls += 'toString';
            return {};
        },
        valueOf: function () {
            let REPLACER = 23;
            calls += 'valueOf';
        }
    };
    calls = '';
    Symbol(val);
    assert.sameValue(calls, 'toStringvalueOf');
    val = {
        toString: function () {
            let REPLACER = 23;
            calls += 'toString';
        },
        valueOf: function () {
            let REPLACER = 23;
            calls += 'valueOf';
        }
    };
    calls = '';
    Symbol(val);
    assert.sameValue(calls, 'toString');
    val = {
        toString: null,
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            calls += 'valueOf';
        }
    };
    calls = '';
    Symbol(val);
    assert.sameValue(calls, 'valueOf');
    val = {
        toString: null,
        valueOf: function () {
            calls += 'valueOf';
            return {};
        }
    };
    calls = '';
    assert.throws(TypeError, function () {
        Symbol(val);
    }, '`toString` is not callable, and `valueOf` returns a non-primitive value');
    assert.sameValue(calls, 'valueOf', 'invocation pattern for non-callable `toString`');
    val = {
        toString: function () {
            calls += 'toString';
            return {};
        },
        valueOf: function () {
            calls += 'valueOf';
            return {};
        }
    };
    calls = '';
    assert.throws(TypeError, function () {
        Symbol(val);
    }, '`toString` nor `valueOf` both return non-primitive values');
    assert.sameValue(calls, 'toStringvalueOf', 'invocation pattern for non-callable `toString` and `valueOf`');
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