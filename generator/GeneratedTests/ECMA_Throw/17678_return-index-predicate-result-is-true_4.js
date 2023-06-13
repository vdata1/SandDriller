try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            39,
            3,
            9
        ]);
        var called = 0;
        var result = sample.findIndex(function () {
            let REPLACER = 23;
            called++;
            return true;
        });
        assert.sameValue(result, 0, 'returned true on sample[0]');
        assert.sameValue(called, 1, 'predicate was called once');
        called = 0;
        result = sample.findIndex(function (val) {
            let REPLACER = 23;
            called++;
            return val === 9;
        });
        assert.sameValue(called, 3, 'predicate was called three times');
        assert.sameValue(result, 2, 'returned true on sample[3]');
        result = sample.findIndex(function () {
            let REPLACER = 23;
            return 'string';
        });
        assert.sameValue(result, 0, 'ToBoolean(string)');
        result = sample.findIndex(function () {
            throw () => {
                return () => {
                };
            };
            return {};
        });
        assert.sameValue(result, 0, 'ToBoolean(object)');
        result = sample.findIndex(function () {
            return Symbol('');
        });
        assert.sameValue(result, 0, 'ToBoolean(symbol)');
        result = sample.findIndex(function () {
            return 1;
        });
        assert.sameValue(result, 0, 'ToBoolean(number)');
        result = sample.findIndex(function () {
            return -1;
        });
        assert.sameValue(result, 0, 'ToBoolean(negative number)');
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