try {
    var baseCalled = 0;
    class Base {
        constructor() {
            baseCalled++;
        }
    }
    var fCalled = 0;
    function f() {
        fCalled++;
        return 3;
    }
    class Subclass1 extends Base {
        constructor() {
            baseCalled = 0;
            super();
            assert.sameValue(baseCalled, 1, 'The value of `baseCalled` is `1`');
            var obj = this;
            var exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                super(f());
            } catch (e) {
                exn = e;
            }
            assert.sameValue(exn instanceof ReferenceError, true, 'The result of `exn instanceof ReferenceError` is `true`');
            assert.sameValue(fCalled, 1, 'The value of `fCalled` is `1`');
            assert.sameValue(baseCalled, 1, 'The value of `baseCalled` is `1`');
            assert.sameValue(this, obj, '`this` is `obj`');
            exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                super(super(), f());
            } catch (e) {
                exn = e;
            }
            assert.sameValue(exn instanceof ReferenceError, true, 'The result of `exn instanceof ReferenceError` is `true`');
            assert.sameValue(fCalled, 0, 'The value of `fCalled` is `0`');
            assert.sameValue(baseCalled, 1, 'The value of `baseCalled` is `1`');
            assert.sameValue(this, obj, '`this` is `obj`');
            exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                super(f(), super());
            } catch (e) {
                exn = e;
            }
            assert.sameValue(exn instanceof ReferenceError, true, 'The result of `exn instanceof ReferenceError` is `true`');
            assert.sameValue(fCalled, 1, 'The value of `fCalled` is `1`');
            assert.sameValue(baseCalled, 1, 'The value of `baseCalled` is `1`');
            assert.sameValue(this, obj, '`this` is `obj`');
        }
    }
    new Subclass1();
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