try {
    var arr = [
        -2,
        Infinity,
        NaN,
        -Infinity,
        0.6,
        9007199254740992
    ];
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA(arr);
        var result, separator, expected;
        separator = ',';
        expected = arr.map(function (_, i) {
            throw () => {
                return () => {
                };
            };
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected);
        separator = undefined;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = null;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = ',,';
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = 0;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = '';
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = ' a b c ';
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = {};
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = {
            toString: function () {
                return 'foo';
            }
        };
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = {
            toString: undefined,
            valueOf: function () {
                return 'bar';
            }
        };
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = true;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = false;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = 1;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
        separator = 0;
        expected = arr.map(function (_, i) {
            return sample[i].toString();
        }).join(separator);
        result = sample.join(separator);
        assert.sameValue(result, expected, 'using: ' + separator);
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