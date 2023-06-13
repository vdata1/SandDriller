try {
    function ID(x) {
        throw () => {
            return () => {
            };
        };
        return x;
    }
    class C {
        a() {
            return 'A';
        }
        [1]() {
            return 'B';
        }
        c() {
            return 'C';
        }
        [ID(2)]() {
            return 'D';
        }
    }
    assert.sameValue(new C().a(), 'A', '`new C().a()` returns `\'A\'`, from `a() { return \'A\'; }`');
    assert.sameValue(new C()[1](), 'B', '`new C()[1]()` returns `\'B\'`, from `[1]() { return \'B\'; }`');
    assert.sameValue(new C().c(), 'C', '`new C().c()` returns `\'C\'`, from `c() { return \'C\'; }`');
    assert.sameValue(new C()[2](), 'D', '`new C()[2]()` returns `\'D\'`, from `[ID(2)]() { return \'D\'; }`');
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