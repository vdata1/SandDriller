try {
    const defaultLocale = new Intl.Segmenter().resolvedOptions().locale;
    const tests = [
        [
            undefined,
            [defaultLocale],
            'undefined'
        ],
        [
            'EN',
            ['en'],
            'Single value'
        ],
        [
            [],
            [defaultLocale],
            'Empty array'
        ],
        [
            ['sr'],
            ['sr'],
            'Single-element array'
        ],
        [
            [
                'fr',
                'ar'
            ],
            [
                'fr',
                'ar'
            ],
            'Two-element array'
        ],
        [
            [
                'xyz',
                'ar'
            ],
            ['ar'],
            'Two-element array with unknown code'
        ],
        [
            [
                'en',
                'EN'
            ],
            ['en'],
            'Duplicate value (canonical first)'
        ],
        [
            [
                'EN',
                'en'
            ],
            ['en'],
            'Duplicate value (canonical last)'
        ],
        [
            {
                0: 'DE',
                length: 0
            },
            [defaultLocale],
            'Object with zero length'
        ],
        [
            {
                0: 'DE',
                length: 1
            },
            ['de'],
            'Object with length'
        ],
        [
            {
                0: 'ja',
                1: 'fr'
            },
            [defaultLocale],
            'Object without length, indexed from 0'
        ],
        [
            {
                1: 'ja',
                2: 'fr'
            },
            [defaultLocale],
            'Object without length, indexed from 1'
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
                    'best fit',
                    'lookup'
                ]] of tests) {
        for (const localeMatcher of matchers) {
            const segmenter = new Intl.Segmenter(locales, { localeMatcher });
            const actual = segmenter.resolvedOptions().locale;
            assert(expected.includes(actual), `${ name }: expected one of ${ expected }, found ${ actual }`);
        }
    }
    for (const [locales, name, matchers = [
                    'best fit',
                    'lookup'
                ]] of errorTests) {
        for (const localeMatcher of matchers) {
            assert.throws(RangeError, function () {
                new Intl.Segmenter(locales, { localeMatcher });
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