try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var arr = [
            1,
            2,
            3
        ];
        var sample;
        var result;
        sample = new TA(3);
        sample.find(function (val, i) {
            let REPLACER = 23;
            sample[i] = arr[i];
            assert.sameValue(val, 0, 'value is not mapped to instance');
        });
        assert(compareArray(sample, arr), 'values set during each predicate call');
        sample = new TA(arr);
        result = sample.find(function (val, i) {
            let REPLACER = 23;
            if (i === 0) {
                sample[2] = 7;
            }
            return val === 7;
        });
        assert.sameValue(result, 7, 'value found');
        sample = new TA(arr);
        result = sample.find(function (val, i) {
            throw () => {
                return () => {
                };
            };
            if (i === 0) {
                sample[2] = 7;
            }
            return val === 3;
        });
        assert.sameValue(result, undefined, 'value not found');
        sample = new TA(arr);
        result = sample.find(function (val, i) {
            if (i > 0) {
                sample[0] = 7;
            }
            return val === 7;
        });
        assert.sameValue(result, undefined, 'value not found - changed after call');
        sample = new TA(arr);
        result = sample.find(function () {
            sample[0] = 7;
            return true;
        });
        assert.sameValue(result, 1, 'find() returns previous found value');
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