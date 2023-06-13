try {
    var testArray = [
        'hello',
        '你好',
        'こんにちは',
        'pêche',
        'peché',
        '1',
        '9',
        '10',
        'ự',
        'ự',
        'ự',
        'ự',
        'Å',
        'Å',
        'Å'
    ];
    var defaultCollator = new Intl.Collator();
    var defaultOptions = defaultCollator.resolvedOptions();
    var defaultOptionsJSON = JSON.stringify(defaultOptions);
    var defaultLocale = defaultOptions.locale;
    var defaultSortedArray = testArray.slice(0).sort(defaultCollator.compare);
    var keyValues = {
        'co': [
            'standard',
            'search',
            'invalid'
        ],
        'ka': [
            'noignore',
            'shifted',
            'invalid'
        ],
        'kb': [
            'true',
            'false',
            'invalid'
        ],
        'kc': [
            'true',
            'false',
            'invalid'
        ],
        'kh': [
            'true',
            'false',
            'invalid'
        ],
        'kk': [
            'true',
            'false',
            'invalid'
        ],
        'kr': [
            'latn-hira-hani',
            'hani-hira-latn',
            'invalid'
        ],
        'ks': [
            'level1',
            'level2',
            'level3',
            'level4',
            'identic',
            'invalid'
        ],
        'vt': [
            '1234-5678-9abc-edf0',
            'invalid'
        ]
    };
    Object.getOwnPropertyNames(keyValues).forEach(function (key) {
        keyValues[key].forEach(function (value) {
            var collator = new Intl.Collator([defaultLocale + '-u-' + key + '-' + value]);
            var options = collator.resolvedOptions();
            assert.sameValue(options.locale, defaultLocale, 'Locale ' + options.locale + ' is affected by key ' + key + '; value ' + value + '.');
            assert.sameValue(JSON.stringify(options), defaultOptionsJSON, 'Resolved options ' + JSON.stringify(options) + ' are affected by key ' + key + '; value ' + value + '.');
            assert.compareArray(testArray.sort(collator.compare), defaultSortedArray);
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