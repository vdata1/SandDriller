try {
    function assertAccessorDescriptor(object, name) {
        var desc = Object.getOwnPropertyDescriptor(object, name);
        assert.sameValue(desc.configurable, true, 'The value of `desc.configurable` is `true`');
        assert.sameValue(desc.enumerable, false, 'The value of `desc.enumerable` is `false`');
        assert.sameValue(typeof desc.get, 'function', '`typeof desc.get` is `\'function\'`');
        assert.sameValue(typeof desc.set, 'function', '`typeof desc.set` is `\'function\'`');
        assert.sameValue('prototype' in desc.get, false, 'The result of `\'prototype\' in desc.get` is `false`');
        assert.sameValue('prototype' in desc.set, false, 'The result of `\'prototype\' in desc.set` is `false`');
    }
    class C {
        constructor(x) {
            this._x = x;
        }
        get x() {
            return this._x;
        }
        set x(v) {
            this._x = v;
        }
        static get staticX() {
            return this._x;
        }
        static set staticX(v) {
            this._x = v;
        }
    }
    assertAccessorDescriptor(C.prototype, 'x');
    assertAccessorDescriptor(C, 'staticX');
    var c = new C(1);
    c._x = 1;
    assert.sameValue(c.x, 1, 'The value of `c.x` is `1`, after executing `c._x = 1;`');
    c.x = 2;
    assert.sameValue(c._x, 2, 'The value of `c._x` is `2`, after executing `c.x = 2;`');
    C._x = 3;
    assert.sameValue(C.staticX, 3, 'The value of `C.staticX` is `3`, after executing `C._x = 3;`');
    C._x = 4;
    assert.sameValue(C.staticX, 4, 'The value of `C.staticX` is `4`, after executing `C._x = 4;`');
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