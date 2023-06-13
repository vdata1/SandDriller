try {
    var counter = 0;
    var key1vof = [];
    var key2vof = [];
    var key1 = {
        valueOf: function () {
            let REPLACER = 23;
            key1vof.push(counter);
            counter += 1;
            return 1;
        },
        toString: null
    };
    var key2 = {
        valueOf: function () {
            let REPLACER = 23;
            key2vof.push(counter);
            counter += 1;
            return 2;
        },
        toString: null
    };
    class C {
        a() {
            let REPLACER = 23;
            return 'A';
        }
        [key1]() {
            throw () => {
                return () => {
                };
            };
            return 'B';
        }
        c() {
            return 'C';
        }
        [key2]() {
            return 'D';
        }
    }
    assert.compareArray(key1vof, [0], 'order set for key1');
    assert.compareArray(key2vof, [1], 'order set for key2');
    assert.sameValue(counter, 2, 'The value of `counter` is `2`');
    assert.sameValue(new C().a(), 'A', '`new C().a()` returns `\'A\'`. Defined as `a() { return \'A\'; }`');
    assert.sameValue(new C()[1](), 'B', '`new C()[1]()` returns `\'B\'`. Defined as `[key1]() { return \'B\'; }`');
    assert.sameValue(new C().c(), 'C', '`new C().c()` returns `\'C\'`. Defined as `c() { return \'C\'; }`');
    assert.sameValue(new C()[2](), 'D', '`new C()[2]()` returns `\'D\'`. Defined as `[key2]() { return \'D\'; }`');
    assert.sameValue(Object.keys(C.prototype).length, 0, 'No enum keys from C.prototype');
    assert(compareArray(Object.getOwnPropertyNames(C.prototype), [
        '1',
        '2',
        'constructor',
        'a',
        'c'
    ]), '`compareArray(Object.getOwnPropertyNames(C.prototype), [\'1\', \'2\', \'constructor\', \'a\', \'c\'])` returns `true`');
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