try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            43,
            42,
            41
        ]);
        assert.sameValue(sample.includes(42), true, 'includes(42)');
        assert.sameValue(sample.includes(43), true, 'includes(43)');
        assert.sameValue(sample.includes(43, 1), true, 'includes(43, 1)');
        assert.sameValue(sample.includes(42, 1), true, 'includes(42, 1)');
        assert.sameValue(sample.includes(42, 2), true, 'includes(42, 2)');
        assert.sameValue(sample.includes(42, -4), true, 'includes(42, -4)');
        assert.sameValue(sample.includes(42, -3), true, 'includes(42, -3)');
        assert.sameValue(sample.includes(42, -2), true, 'includes(42, -2)');
        assert.sameValue(sample.includes(42, -5), true, 'includes(42, -5)');
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