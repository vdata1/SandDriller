try {
    var initCount = 0;
    function counter() {
        initCount += 1;
    }
    var callCount = 0;
    var C = class {
        method({
            s: t = counter(),
            u: v = counter(),
            w: x = counter(),
            y: z = counter()
        } = {
            s: null,
            u: 0,
            w: false,
            y: ''
        }) {
            assert.sameValue(t, null);
            assert.sameValue(v, 0);
            assert.sameValue(x, false);
            assert.sameValue(z, '');
            assert.sameValue(initCount, 0);
            assert.throws(ReferenceError, function () {
                s;
            });
            assert.throws(ReferenceError, function () {
                u;
            });
            assert.throws(ReferenceError, function () {
                w;
            });
            assert.throws(ReferenceError, function () {
                y;
            });
            callCount = callCount + 1;
        }
    };
    new C().method();
    assert.sameValue(callCount, 1, 'method invoked exactly once');
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