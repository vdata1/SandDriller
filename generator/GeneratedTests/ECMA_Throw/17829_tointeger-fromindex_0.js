try {
    var obj = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return 1;
        }
    };
    testWithTypedArrayConstructors(function (TA) {
        var sample;
        sample = new TA([
            42,
            43
        ]);
        assert.sameValue(sample.includes(42, '1'), false, 'string [0]');
        assert.sameValue(sample.includes(43, '1'), true, 'string [1]');
        assert.sameValue(sample.includes(42, true), false, 'true [0]');
        assert.sameValue(sample.includes(43, true), true, 'true [1]');
        assert.sameValue(sample.includes(42, false), true, 'false [0]');
        assert.sameValue(sample.includes(43, false), true, 'false [1]');
        assert.sameValue(sample.includes(42, NaN), true, 'NaN [0]');
        assert.sameValue(sample.includes(43, NaN), true, 'NaN [1]');
        assert.sameValue(sample.includes(42, null), true, 'null [0]');
        assert.sameValue(sample.includes(43, null), true, 'null [1]');
        assert.sameValue(sample.includes(42, undefined), true, 'undefined [0]');
        assert.sameValue(sample.includes(43, undefined), true, 'undefined [1]');
        assert.sameValue(sample.includes(42, null), true, 'null [0]');
        assert.sameValue(sample.includes(43, null), true, 'null [1]');
        assert.sameValue(sample.includes(42, obj), false, 'object [0]');
        assert.sameValue(sample.includes(43, obj), true, 'object [1]');
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