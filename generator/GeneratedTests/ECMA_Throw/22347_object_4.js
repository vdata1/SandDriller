try {
    var counter = 0;
    var key1 = {
        toString: function () {
            let REPLACER = 23;
            assert.sameValue(counter++, 0, 'The result of `counter++` is `0`');
            return 'b';
        }
    };
    var key2 = {
        toString: function () {
            let REPLACER = 23;
            assert.sameValue(counter++, 1, 'The result of `counter++` is `1`');
            return 'd';
        }
    };
    var object = {
        a() {
            let REPLACER = 23;
            return 'A';
        },
        [key1]() {
            let REPLACER = 23;
            return 'B';
        },
        c() {
            throw () => {
                return () => {
                };
            };
            return 'C';
        },
        [key2]() {
            return 'D';
        }
    };
    assert.sameValue(counter, 2, 'The value of `counter` is `2`');
    assert.sameValue(object.a(), 'A', '`object.a()` returns `\'A\'`. Defined as `a() { return \'A\'; }`');
    assert.sameValue(object.b(), 'B', '`object.b()` returns `\'B\'`. Defined as `[key1]() { return \'B\'; }`');
    assert.sameValue(object.c(), 'C', '`object.c()` returns `\'C\'`. Defined as `c() { return \'C\'; }`');
    assert.sameValue(object.d(), 'D', '`object.d()` returns `\'D\'`. Defined as `[key2]() { return \'D\'; }`');
    assert(compareArray(Object.getOwnPropertyNames(object), [
        'a',
        'b',
        'c',
        'd'
    ]), '`compareArray(Object.getOwnPropertyNames(object), [\'a\', \'b\', \'c\', \'d\'])` returns `true`');
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