try {
    function assertMethodDescriptor(object, name) {
        var desc = Object.getOwnPropertyDescriptor(object, name);
        assert.sameValue(desc.configurable, true, 'The value of `desc.configurable` is `true`');
        assert.sameValue(desc.enumerable, false, 'The value of `desc.enumerable` is `false`');
        assert.sameValue(desc.writable, true, 'The value of `desc.writable` is `true`');
        assert.sameValue(typeof desc.value, 'function', '`typeof desc.value` is `\'function\'`');
        assert.sameValue('prototype' in desc.value, false, 'The result of `\'prototype\' in desc.value` is `false`');
    }
    class C {
        method() {
            return 1;
        }
        static staticMethod() {
            return 2;
        }
        method2() {
            return 3;
        }
        static staticMethod2() {
            return 4;
        }
    }
    assertMethodDescriptor(C.prototype, 'method');
    assertMethodDescriptor(C.prototype, 'method2');
    assertMethodDescriptor(C, 'staticMethod');
    assertMethodDescriptor(C, 'staticMethod2');
    assert.sameValue(new C().method(), 1, '`new C().method()` returns `1`. Defined as `method() { return 1; }`');
    assert.sameValue(C.staticMethod(), 2, '`C.staticMethod()` returns `2`. Defined as `static staticMethod() { return 2; }`');
    assert.sameValue(new C().method2(), 3, '`new C().method2()` returns `3`. Defined as `method2() { return 3; }`');
    assert.sameValue(C.staticMethod2(), 4, '`C.staticMethod2()` returns `4`. Defined as `static staticMethod2() { return 4; }`');
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