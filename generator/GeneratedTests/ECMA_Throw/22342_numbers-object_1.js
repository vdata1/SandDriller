try {
    var counter = 0;
    var key1 = {
        valueOf: function () {
            let REPLACER = 23;
            assert.sameValue(counter++, 0, 'The result of `counter++` is `0`');
            return 1;
        },
        toString: null
    };
    var key2 = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            assert.sameValue(counter++, 1, 'The result of `counter++` is `1`');
            return 2;
        },
        toString: null
    };
    var object = {
        a: 'A',
        [key1]: 'B',
        c: 'C',
        [key2]: 'D'
    };
    assert.sameValue(counter, 2, 'The value of `counter` is `2`');
    assert.sameValue(object.a, 'A', 'The value of `object.a` is `\'A\'`. Defined as `a: \'A\'`');
    assert.sameValue(object[1], 'B', 'The value of `object[1]` is `\'B\'`. Defined as `[key1]: \'B\'`');
    assert.sameValue(object.c, 'C', 'The value of `object.c` is `\'C\'`. Defined as `c: \'C\'`');
    assert.sameValue(object[2], 'D', 'The value of `object[2]` is `\'D\'`. Defined as `[key2]: \'D\'`');
    assert(compareArray(Object.getOwnPropertyNames(object), [
        '1',
        '2',
        'a',
        'c'
    ]), '`compareArray(Object.getOwnPropertyNames(object), [\'1\', \'2\', \'a\', \'c\'])` returns `true`');
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