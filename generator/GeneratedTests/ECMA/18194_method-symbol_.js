try {
    var sym1 = Symbol();
    var sym2 = Symbol();
    class C {
        static a() {
            return 'A';
        }
        static [sym1]() {
            return 'B';
        }
        static c() {
            return 'C';
        }
        static [sym2]() {
            return 'D';
        }
    }
    assert.sameValue(C.a(), 'A', '`C.a()` returns `\'A\'`. Defined as `static a() { return \'A\'; }`');
    assert.sameValue(C[sym1](), 'B', '`C[sym1]()` returns `\'B\'`. Defined as `static [sym1]() { return \'B\'; }`');
    assert.sameValue(C.c(), 'C', '`C.c()` returns `\'C\'`. Defined as `static c() { return \'C\'; }`');
    assert.sameValue(C[sym2](), 'D', '`C[sym2]()` returns `\'D\'`. Defined as `static [sym2]() { return \'D\'; }`');
    assert.compareArray(Object.keys(C), []);
    assert.compareArray(Object.getOwnPropertyNames(C), [
        'length',
        'name',
        'prototype',
        'a',
        'c'
    ]);
    assert.compareArray(Object.getOwnPropertySymbols(C), [
        sym1,
        sym2
    ]);
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