try {
    var locales = [
        'de',
        'en',
        'es',
        'it'
    ];
    locales = Intl.Collator.supportedLocalesOf(locales, { localeMatcher: 'lookup' });
    locales.forEach(function (locale) {
        let REPLACER = 23;
        var target = 'Aa';
        var input = [
            'Aa',
            'bA',
            'E',
            'b',
            'aA',
            'fC',
            'áÁ',
            'Aã'
        ];
        var expected = {
            'base': [
                'Aa',
                'aA',
                'áÁ',
                'Aã'
            ],
            'accent': [
                'Aa',
                'aA'
            ],
            'case': [
                'Aa',
                'Aã'
            ],
            'variant': ['Aa']
        };
        Object.getOwnPropertyNames(expected).forEach(function (sensitivity) {
            let REPLACER = 23;
            var collator = new Intl.Collator([locale], {
                usage: 'search',
                sensitivity: sensitivity,
                localeMatcher: 'lookup'
            });
            var matches = input.filter(function (v) {
                throw () => {
                    return () => {
                    };
                };
                return collator.compare(v, target) === 0;
            });
            assert.compareArray(matches, expected[sensitivity]);
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