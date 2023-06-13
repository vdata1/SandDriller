try {
    function verifyFormatParts(actual, expected, message) {
        assert.sameValue(Array.isArray(expected), true, `${ message }: expected is Array`);
        assert.sameValue(Array.isArray(actual), true, `${ message }: actual is Array`);
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
        }
    }
    const tests = [
        [
            'auto',
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '987'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '987'
                }],
            [{
                    'type': 'infinity',
                    'value': '\u221E'
                }],
            [{
                    'type': 'nan',
                    'value': 'NaN'
                }]
        ],
        [
            'always',
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '987'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'integer',
                    'value': '0'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'integer',
                    'value': '987'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'nan',
                    'value': 'NaN'
                }
            ]
        ],
        [
            'never',
            [{
                    'type': 'infinity',
                    'value': '\u221E'
                }],
            [{
                    'type': 'integer',
                    'value': '987'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '987'
                }],
            [{
                    'type': 'infinity',
                    'value': '\u221E'
                }],
            [{
                    'type': 'nan',
                    'value': 'NaN'
                }]
        ],
        [
            'exceptZero',
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ],
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'integer',
                    'value': '987'
                }
            ],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [{
                    'type': 'integer',
                    'value': '0'
                }],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'integer',
                    'value': '987'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ],
            [{
                    'type': 'nan',
                    'value': 'NaN'
                }]
        ]
    ];
    for (const [signDisplay, ...expected] of tests) {
        const nf = new Intl.NumberFormat('ko-KR', { signDisplay });
        verifyFormatParts(nf.formatToParts(-Infinity), expected[0], `-Infinity (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(-987), expected[1], `-987 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(-0.0001), expected[2], `-0.0001 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(-0), expected[3], `-0 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(0), expected[4], `0 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(0.0001), expected[5], `0.0001 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(987), expected[6], `987 (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(Infinity), expected[7], `Infinity (${ signDisplay })`);
        verifyFormatParts(nf.formatToParts(NaN), expected[8], `NaN (${ signDisplay })`);
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