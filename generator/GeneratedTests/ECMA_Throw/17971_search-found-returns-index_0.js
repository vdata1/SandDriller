try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([
            42,
            43,
            42,
            41
        ]);
        assert.sameValue(sample.lastIndexOf(42), 2, 'lastIndexOf(42)');
        assert.sameValue(sample.lastIndexOf(43), 1, 'lastIndexOf(43)');
        assert.sameValue(sample.lastIndexOf(41), 3, 'lastIndexOf(41)');
        assert.sameValue(sample.lastIndexOf(41, 3), 3, 'lastIndexOf(41, 3)');
        assert.sameValue(sample.lastIndexOf(41, 4), 3, 'lastIndexOf(41, 4)');
        assert.sameValue(sample.lastIndexOf(43, 1), 1, 'lastIndexOf(43, 1)');
        assert.sameValue(sample.lastIndexOf(43, 2), 1, 'lastIndexOf(43, 2)');
        assert.sameValue(sample.lastIndexOf(43, 3), 1, 'lastIndexOf(43, 3)');
        assert.sameValue(sample.lastIndexOf(43, 4), 1, 'lastIndexOf(43, 4)');
        assert.sameValue(sample.lastIndexOf(42, 0), 0, 'lastIndexOf(42, 0)');
        assert.sameValue(sample.lastIndexOf(42, 1), 0, 'lastIndexOf(42, 1)');
        assert.sameValue(sample.lastIndexOf(42, 2), 2, 'lastIndexOf(42, 2)');
        assert.sameValue(sample.lastIndexOf(42, 3), 2, 'lastIndexOf(42, 3)');
        assert.sameValue(sample.lastIndexOf(42, 4), 2, 'lastIndexOf(42, 4)');
        assert.sameValue(sample.lastIndexOf(42, -4), 0, 'lastIndexOf(42, -4)');
        assert.sameValue(sample.lastIndexOf(42, -3), 0, 'lastIndexOf(42, -3)');
        assert.sameValue(sample.lastIndexOf(42, -2), 2, 'lastIndexOf(42, -2)');
        assert.sameValue(sample.lastIndexOf(42, -1), 2, 'lastIndexOf(42, -1)');
        assert.sameValue(sample.lastIndexOf(43, -3), 1, 'lastIndexOf(43, -3)');
        assert.sameValue(sample.lastIndexOf(43, -2), 1, 'lastIndexOf(43, -2)');
        assert.sameValue(sample.lastIndexOf(43, -1), 1, 'lastIndexOf(43, -1)');
        assert.sameValue(sample.lastIndexOf(41, -1), 3, 'lastIndexOf(41, -1)');
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