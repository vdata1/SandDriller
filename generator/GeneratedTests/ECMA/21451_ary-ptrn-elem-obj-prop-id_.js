try {
    var callCount = 0;
    var f;
    f = function* ([{
            u: v,
            w: x,
            y: z
        } = {
            u: 444,
            w: 555,
            y: 666
        }]) {
        assert.sameValue(v, 777);
        assert.sameValue(x, 888);
        assert.sameValue(z, 999);
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
    };
    f([{
            u: 777,
            w: 888,
            y: 999
        }]).next();
    assert.sameValue(callCount, 1, 'generator function invoked exactly once');
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