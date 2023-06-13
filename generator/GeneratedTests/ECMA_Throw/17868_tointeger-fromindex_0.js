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
        assert.sameValue(sample.indexOf(42, '1'), -1, 'string [0]');
        assert.sameValue(sample.indexOf(43, '1'), 1, 'string [1]');
        assert.sameValue(sample.indexOf(42, true), -1, 'true [0]');
        assert.sameValue(sample.indexOf(43, true), 1, 'true [1]');
        assert.sameValue(sample.indexOf(42, false), 0, 'false [0]');
        assert.sameValue(sample.indexOf(43, false), 1, 'false [1]');
        assert.sameValue(sample.indexOf(42, NaN), 0, 'NaN [0]');
        assert.sameValue(sample.indexOf(43, NaN), 1, 'NaN [1]');
        assert.sameValue(sample.indexOf(42, null), 0, 'null [0]');
        assert.sameValue(sample.indexOf(43, null), 1, 'null [1]');
        assert.sameValue(sample.indexOf(42, undefined), 0, 'undefined [0]');
        assert.sameValue(sample.indexOf(43, undefined), 1, 'undefined [1]');
        assert.sameValue(sample.indexOf(42, null), 0, 'null [0]');
        assert.sameValue(sample.indexOf(43, null), 1, 'null [1]');
        assert.sameValue(sample.indexOf(42, obj), -1, 'object [0]');
        assert.sameValue(sample.indexOf(43, obj), 1, 'object [1]');
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