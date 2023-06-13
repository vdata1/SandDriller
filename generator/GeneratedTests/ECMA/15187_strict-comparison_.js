try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            42,
            undefined,
            NaN,
            0,
            1
        ]);
        assert.sameValue(sample.lastIndexOf('42'), -1, '\'42\'');
        assert.sameValue(sample.lastIndexOf([42]), -1, '[42]');
        assert.sameValue(sample.lastIndexOf(42), 0, '42.0');
        assert.sameValue(sample.lastIndexOf(-0), 3, '-0');
        assert.sameValue(sample.lastIndexOf(true), -1, 'true');
        assert.sameValue(sample.lastIndexOf(false), -1, 'false');
        assert.sameValue(sample.lastIndexOf(NaN), -1, 'NaN === NaN is false');
        assert.sameValue(sample.lastIndexOf(null), -1, 'null');
        assert.sameValue(sample.lastIndexOf(undefined), -1, 'undefined');
        assert.sameValue(sample.lastIndexOf(''), -1, 'empty string');
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