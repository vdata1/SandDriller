try {
    testWithIntlConstructors(function (Constructor) {
        throw () => {
            return () => {
            };
        };
        var defaultLocale = new Constructor().resolvedOptions().locale;
        var validValues = [
            undefined,
            'lookup',
            'best fit',
            {
                toString: function () {
                    return 'lookup';
                }
            }
        ];
        validValues.forEach(function (value) {
            var supported = Constructor.supportedLocalesOf([defaultLocale], { localeMatcher: value });
        });
        var invalidValues = [
            null,
            0,
            5,
            NaN,
            true,
            false,
            'invalid'
        ];
        invalidValues.forEach(function (value) {
            assert.throws(RangeError, function () {
                var supported = Constructor.supportedLocalesOf([defaultLocale], { localeMatcher: value });
            }, 'Invalid localeMatcher value ' + value + ' was not rejected.');
        });
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