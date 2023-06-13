try {
    var locales = [
        'ja-JP',
        'zh-Hans-CN',
        'zh-Hant-TW'
    ];
    var input = 1234567.89;
    locales.forEach(function (locale) {
        var defaultNumberFormat = new Intl.NumberFormat([locale]);
        var defaultOptions = defaultNumberFormat.resolvedOptions();
        var defaultOptionsJSON = JSON.stringify(defaultOptions);
        var defaultLocale = defaultOptions.locale;
        var defaultFormatted = defaultNumberFormat.format(input);
        var keyValues = {
            'cu': [
                'USD',
                'EUR',
                'JPY',
                'CNY',
                'TWD',
                'invalid'
            ],
            'nu': [
                'native',
                'traditio',
                'finance',
                'invalid'
            ]
        };
        Object.getOwnPropertyNames(keyValues).forEach(function (key) {
            keyValues[key].forEach(function (value) {
                var numberFormat = new Intl.NumberFormat([locale + '-u-' + key + '-' + value]);
                var options = numberFormat.resolvedOptions();
                assert.sameValue(options.locale, defaultLocale, 'Locale ' + options.locale + ' is affected by key ' + key + '; value ' + value + '.');
                assert.sameValue(JSON.stringify(options), defaultOptionsJSON, 'Resolved options ' + JSON.stringify(options) + ' are affected by key ' + key + '; value ' + value + '.');
                assert.sameValue(numberFormat.format(input), defaultFormatted, 'Formatted value ' + numberFormat.format(input) + ' is affected by key ' + key + '; value ' + value + '.');
            });
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