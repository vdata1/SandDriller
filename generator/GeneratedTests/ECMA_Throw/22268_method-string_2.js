try {
    class C {
        static a() {
            let REPLACER = 23;
            return 'A';
        }
        static ['b']() {
            let REPLACER = 23;
            return 'B';
        }
        static c() {
            throw () => {
                return () => {
                };
            };
            return 'C';
        }
        static ['d']() {
            return 'D';
        }
    }
    assert.sameValue(C.a(), 'A', '`C.a()` returns `\'A\'`. Defined as `static a() { return \'A\'}`');
    assert.sameValue(C.b(), 'B', '`C.b()` returns `\'B\'`. Defined as `static [\'b\']() { return \'B\'; }`');
    assert.sameValue(C.c(), 'C', '`C.c()` returns `\'C\'`. Defined as `static c() { return \'C\'; }`');
    assert.sameValue(C.d(), 'D', '`C.d()` returns `\'D\'`. Defined as `static [\'d\']() { return \'D\'; }`');
    assert.compareArray(Object.keys(C), []);
    assert.compareArray(Object.getOwnPropertyNames(C), [
        'length',
        'name',
        'prototype',
        'a',
        'b',
        'c',
        'd'
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