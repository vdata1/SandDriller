try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample;
        sample = new TA([
            2,
            NaN,
            NaN,
            0,
            1
        ]).sort();
        assert.sameValue(sample[0], 0, '#1 [0]');
        assert.sameValue(sample[1], 1, '#1 [1]');
        assert.sameValue(sample[2], 2, '#1 [2]');
        assert.sameValue(sample[3], NaN, '#1 [3]');
        assert.sameValue(sample[4], NaN, '#1 [4]');
        sample = new TA([
            3,
            NaN,
            NaN,
            Infinity,
            0,
            -Infinity,
            2
        ]).sort();
        assert.sameValue(sample[0], -Infinity, '#2 [0]');
        assert.sameValue(sample[1], 0, '#2 [1]');
        assert.sameValue(sample[2], 2, '#2 [2]');
        assert.sameValue(sample[3], 3, '#2 [3]');
        assert.sameValue(sample[4], Infinity, '#2 [4]');
        assert.sameValue(sample[5], NaN, '#2 [5]');
        assert.sameValue(sample[6], NaN, '#2 [6]');
    }, [
        Float64Array,
        Float32Array
    ]);
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