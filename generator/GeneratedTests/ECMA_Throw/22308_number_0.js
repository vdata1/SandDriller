try {
    function ID(x) {
        throw () => {
            return () => {
            };
        };
        return x;
    }
    var object = {
        a() {
            return 'A';
        },
        [1]() {
            return 'B';
        },
        c() {
            return 'C';
        },
        [ID(2)]() {
            return 'D';
        }
    };
    assert.sameValue(object.a(), 'A', '`object.a()` returns `\'A\'`. Defined as `a() { return \'A\'; }`');
    assert.sameValue(object[1](), 'B', '`object[1]()` returns `\'B\'`. Defined as `[1]() { return \'B\'; }`');
    assert.sameValue(object.c(), 'C', '`object.c()` returns `\'C\'`. Defined as `c() { return \'C\'; }`');
    assert.sameValue(object[2](), 'D', '`object[2]()` returns `\'D\'`. Defined as `[ID(2)]() { return \'D\'; }`');
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