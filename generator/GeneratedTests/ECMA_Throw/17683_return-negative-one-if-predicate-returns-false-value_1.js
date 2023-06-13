try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            1,
            2,
            3
        ]);
        var called = 0;
        var result = sample.findIndex(function () {
            throw () => {
                return () => {
                };
            };
            called++;
            return false;
        });
        assert.sameValue(called, 3, 'predicate was called three times');
        assert.sameValue(result, -1, 'result is -1 when predicate returns are false');
        result = sample.findIndex(function () {
            return '';
        });
        assert.sameValue(result, -1, 'ToBoolean(string)');
        result = sample.findIndex(function () {
            return undefined;
        });
        assert.sameValue(result, -1, 'ToBoolean(undefined)');
        result = sample.findIndex(function () {
            return null;
        });
        assert.sameValue(result, -1, 'ToBoolean(null)');
        result = sample.findIndex(function () {
            return 0;
        });
        assert.sameValue(result, -1, 'ToBoolean(0)');
        result = sample.findIndex(function () {
            return -0;
        });
        assert.sameValue(result, -1, 'ToBoolean(-0)');
        result = sample.findIndex(function () {
            return NaN;
        });
        assert.sameValue(result, -1, 'ToBoolean(NaN)');
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