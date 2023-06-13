try {
    var obj = {
        valueOf: function () {
            return 2;
        }
    };
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        assert(compareArray(sample.subarray(0, false), []), 'false');
        assert(compareArray(sample.subarray(0, true), [40]), 'true');
        assert(compareArray(sample.subarray(0, NaN), []), 'NaN');
        assert(compareArray(sample.subarray(0, null), []), 'null');
        assert(compareArray(sample.subarray(0, undefined), [
            40,
            41,
            42,
            43
        ]), 'undefined');
        assert(compareArray(sample.subarray(0, 0.6), []), '0.6');
        assert(compareArray(sample.subarray(0, 1.1), [40]), '1.1');
        assert(compareArray(sample.subarray(0, 1.5), [40]), '1.5');
        assert(compareArray(sample.subarray(0, -0.6), []), '-0.6');
        assert(compareArray(sample.subarray(0, -1.1), [
            40,
            41,
            42
        ]), '-1.1');
        assert(compareArray(sample.subarray(0, -1.5), [
            40,
            41,
            42
        ]), '-1.5');
        assert(compareArray(sample.subarray(0, '3'), [
            40,
            41,
            42
        ]), 'string');
        assert(compareArray(sample.subarray(0, obj), [
            40,
            41
        ]), 'object');
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