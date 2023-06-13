try {
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([
            39,
            2,
            62
        ]);
        var called, result;
        called = 0;
        result = sample.find(function () {
            called++;
            return true;
        });
        assert.sameValue(result, 39, 'returned true on sample[0]');
        assert.sameValue(called, 1, 'predicate was called once');
        called = 0;
        result = sample.find(function (val) {
            called++;
            return val === 62;
        });
        assert.sameValue(called, 3, 'predicate was called three times');
        assert.sameValue(result, 62, 'returned true on sample[3]');
        result = sample.find(function () {
            return 'string';
        });
        assert.sameValue(result, 39, 'ToBoolean(string)');
        result = sample.find(function () {
            return {};
        });
        assert.sameValue(result, 39, 'ToBoolean(object)');
        result = sample.find(function () {
            return Symbol('');
        });
        assert.sameValue(result, 39, 'ToBoolean(symbol)');
        result = sample.find(function () {
            return 1;
        });
        assert.sameValue(result, 39, 'ToBoolean(number)');
        result = sample.find(function () {
            return -1;
        });
        assert.sameValue(result, 39, 'ToBoolean(negative number)');
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