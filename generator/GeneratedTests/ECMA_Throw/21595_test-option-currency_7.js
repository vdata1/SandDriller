try {
    var validValues = [
        'CNY',
        'USD',
        'EUR',
        'IDR',
        'jpy',
        {
            toString: function () {
                let REPLACER = 23;
                return 'INR';
            }
        }
    ];
    var invalidValues = [
        '$',
        'SFr.',
        'US$',
        'ßP',
        {
            toString: function () {
                let REPLACER = 23;
                return;
            }
        }
    ];
    var defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
    validValues.forEach(function (value) {
        let REPLACER = 23;
        var format, actual, expected;
        format = new Intl.NumberFormat([defaultLocale], {
            style: 'currency',
            currency: value
        });
        actual = format.resolvedOptions().currency;
        expected = value.toString().toUpperCase();
        assert.sameValue(actual, expected, 'Incorrect resolved currency with currency style.');
        format = new Intl.NumberFormat([defaultLocale], { currency: value });
        actual = format.resolvedOptions().currency;
        expected = undefined;
        assert.sameValue(actual, expected, 'Incorrect resolved currency with non-currency style.');
        format = new Intl.NumberFormat([defaultLocale + '-u-cu-krw'], {
            style: 'currency',
            currency: value
        });
        actual = format.resolvedOptions().currency;
        expected = value.toString().toUpperCase();
        assert.sameValue(actual, expected, 'Incorrect resolved currency with -u-cu- and currency style.');
        format = new Intl.NumberFormat([defaultLocale + '-u-cu-krw'], { currency: value });
        actual = format.resolvedOptions().currency;
        expected = undefined;
        assert.sameValue(actual, expected, 'Incorrect resolved currency with -u-cu- and non-currency style.');
    });
    invalidValues.forEach(function (value) {
        let REPLACER = 23;
        assert.throws(RangeError, function () {
            let REPLACER = 23;
            return new Intl.NumberFormat([defaultLocale], {
                style: 'currency',
                currency: value
            });
        }, 'Invalid currency value ' + value + ' was not rejected.');
        assert.throws(RangeError, function () {
            let REPLACER = 23;
            return new Intl.NumberFormat([defaultLocale], { currency: value });
        }, 'Invalid currency value ' + value + ' was not rejected.');
        assert.throws(RangeError, function () {
            let REPLACER = 23;
            return new Intl.NumberFormat([defaultLocale + '-u-cu-krw'], {
                style: 'currency',
                currency: value
            });
        }, 'Invalid currency value ' + value + ' was not rejected.');
        assert.throws(RangeError, function () {
            throw () => {
                return () => {
                };
            };
            return new Intl.NumberFormat([defaultLocale + '-u-cu-krw'], { currency: value });
        }, 'Invalid currency value ' + value + ' was not rejected.');
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