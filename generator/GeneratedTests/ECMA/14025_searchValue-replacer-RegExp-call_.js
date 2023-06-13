try {
    let called = 0;
    class RE extends RegExp {
        [Symbol.replace](...args) {
            const actual = super[Symbol.replace](...args);
            called += 1;
            return actual;
        }
        toString() {
            throw 'Should not call toString on searchValue';
        }
    }
    const samples = [
        [
            [
                'b',
                'g'
            ],
            'abc abc abc',
            'z',
            'azc azc azc'
        ],
        [
            [
                'b',
                'gy'
            ],
            'abc abc abc',
            'z',
            'abc abc abc'
        ],
        [
            [
                'b',
                'giy'
            ],
            'abc abc abc',
            'z',
            'abc abc abc'
        ],
        [
            [
                '[A-Z]',
                'g'
            ],
            'No Uppercase!',
            '',
            'o ppercase!'
        ],
        [
            [
                '[A-Z]',
                'gy'
            ],
            'No Uppercase?',
            '',
            'o Uppercase?'
        ],
        [
            [
                '[A-Z]',
                'gy'
            ],
            'NO UPPERCASE!',
            '',
            ' UPPERCASE!'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '$2-$1',
            'ca-bbcca-bbc'
        ],
        [
            [
                '(a(.))',
                'g'
            ],
            'abcabcabcabc',
            '$1$2$3',
            'abb$3cabb$3cabb$3cabb$3c'
        ],
        [
            [
                '(((((((((((((a(.).).).).).).).).))))))',
                'g'
            ],
            'aabacadaeafagahaiajakalamano a azaya',
            '($10)-($12)-($1)',
            '(aabaca)-(aaba)-(aabacadaea)f(agahai)-(agah)-(agahaiajak)(alaman)-(alam)-(alamano a )azaya'
        ],
        [
            [
                'b',
                'g'
            ],
            'abcba',
            '$\'',
            'acbacaa'
        ],
        [
            [
                'b',
                'g'
            ],
            'abcba',
            '$`',
            'aacabca'
        ],
        [
            [
                '(?<named>b)',
                'g'
            ],
            'abcba',
            '($<named>)',
            'a(b)c(b)a'
        ],
        [
            [
                '(?<named>b)',
                'g'
            ],
            'abcba',
            '($<named)',
            'a($<named)c($<named)a'
        ],
        [
            [
                '(?<named>b)',
                'g'
            ],
            'abcba',
            '($<unnamed>)',
            'a()c()a'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$)',
            '($)bc($)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($)',
            '($)bc($)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$$$)',
            '($$)bc($$)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$$)',
            '($$)bc($$)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$&)',
            '($&)bc($&)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$1)',
            '($1)bc($1)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$`)',
            '($`)bc($`)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$\')',
            '($\')bc($\')bc'
        ],
        [
            [
                'a(?<z>b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($$<z>)',
            '($<z>)bc($<z>)bc'
        ],
        [
            [
                'a(b)(ca)',
                'g'
            ],
            'abcabcabcabc',
            '($&)',
            '(abca)bc(abca)bc'
        ]
    ];
    let count = 0;
    for (const [[reStr, flags], thisValue, replaceValue, expected] of samples) {
        const searchValue = new RE(reStr, flags);
        called = 0;
        const actual = thisValue.replaceAll(searchValue, replaceValue);
        const message = `sample ${ count }: '${ thisValue }'.replaceAll(/${ reStr }/${ flags }, '${ replaceValue }')`;
        assert.sameValue(called, 1, message);
        assert.sameValue(actual, expected, message);
        count += 1;
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