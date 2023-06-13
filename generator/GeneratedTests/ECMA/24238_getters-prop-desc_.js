try {
    function assertGetterDescriptor(object, name) {
        var desc = Object.getOwnPropertyDescriptor(object, name);
        verifyNotEnumerable(object, name);
        verifyConfigurable(object, name);
        assert.sameValue(typeof desc.get, 'function', '`typeof desc.get` is `\'function\'`');
        assert.sameValue('prototype' in desc.get, false, 'The result of `\'prototype\' in desc.get` is `false`');
        assert.sameValue(desc.set, undefined, 'The value of `desc.set` is `undefined`');
    }
    class C {
        get x() {
            return 1;
        }
        static get staticX() {
            return 2;
        }
        get y() {
            return 3;
        }
        static get staticY() {
            return 4;
        }
    }
    assert.sameValue(new C().x, 1, 'The value of `new C().x` is `1`. Defined as `get x() { return 1; }`');
    assert.sameValue(C.staticX, 2, 'The value of `C.staticX` is `2`. Defined as `static get staticX() { return 2; }`');
    assert.sameValue(new C().y, 3, 'The value of `new C().y` is `3`. Defined as `get y() { return 3; }`');
    assert.sameValue(C.staticY, 4, 'The value of `C.staticY` is `4`. Defined as `static get staticY() { return 4; }`');
    assertGetterDescriptor(C.prototype, 'x');
    assertGetterDescriptor(C.prototype, 'y');
    assertGetterDescriptor(C, 'staticX');
    assertGetterDescriptor(C, 'staticY');
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