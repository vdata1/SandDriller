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
        function testRes(result, msg) {
            assert.sameValue(result.length, 4, msg);
            assert.sameValue(result[0], 40, msg + ' & result[0] === 40');
            assert.sameValue(result[1], 41, msg + ' & result[1] === 41');
            assert.sameValue(result[2], 42, msg + ' & result[2] === 42');
            assert.sameValue(result[3], 43, msg + ' & result[3] === 43');
        }
        testRes(sample.subarray(0), 'begin == 0');
        testRes(sample.subarray(-4), 'begin == -srcLength');
        testRes(sample.subarray(-5), 'begin < -srcLength');
        testRes(sample.subarray(0, 4), 'begin == 0, end == srcLength');
        testRes(sample.subarray(-4, 4), 'begin == -srcLength, end == srcLength');
        testRes(sample.subarray(-5, 4), 'begin < -srcLength, end == srcLength');
        testRes(sample.subarray(0, 5), 'begin == 0, end > srcLength');
        testRes(sample.subarray(-4, 5), 'begin == -srcLength, end > srcLength');
        testRes(sample.subarray(-5, 5), 'begin < -srcLength, end > srcLength');
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