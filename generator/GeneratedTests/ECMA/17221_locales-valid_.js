try {
    const defaultLocale = new Intl.ListFormat().resolvedOptions().locale;
    const tests = [
        [
            undefined,
            defaultLocale,
            'undefined'
        ],
        [
            'EN',
            'en',
            'Single value'
        ],
        [
            [],
            defaultLocale,
            'Empty array'
        ],
        [
            [
                'en',
                'EN'
            ],
            'en',
            'Duplicate value (canonical first)'
        ],
        [
            [
                'EN',
                'en'
            ],
            'en',
            'Duplicate value (canonical last)'
        ],
        [
            {
                0: 'DE',
                length: 0
            },
            defaultLocale,
            'Object with zero length'
        ],
        [
            {
                0: 'DE',
                length: 1
            },
            'de',
            'Object with length'
        ]
    ];
    const errorTests = [
        [
            ['en-GB-oed'],
            'Grandfathered'
        ],
        [
            ['x-private'],
            'Private',
            ['lookup']
        ]
    ];
    for (const [locales, expected, name, matchers = [
                    'lookup',
                    'best fit'
                ]] of tests) {
        for (const matcher of matchers) {
            const rtf = new Intl.ListFormat(locales, { localeMatcher: matcher });
            assert.sameValue(rtf.resolvedOptions().locale, expected, name);
        }
    }
    for (const [locales, name, matchers = [
                    'lookup',
                    'best fit'
                ]] of errorTests) {
        for (const matcher of matchers) {
            assert.throws(RangeError, function () {
                new Intl.ListFormat(locales, { localeMatcher: matcher });
            }, name);
        }
    }
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