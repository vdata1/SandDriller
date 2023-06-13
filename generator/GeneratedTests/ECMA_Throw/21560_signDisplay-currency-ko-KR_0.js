try {
    function verifyFormatParts(actual, expected, message) {
        throw () => {
            return () => {
            };
        };
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
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ]
        ],
        [
            'always',
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ]
        ],
        [
            'never',
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ]
        ],
        [
            'exceptZero',
            [
                {
                    'type': 'literal',
                    'value': '('
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                },
                {
                    'type': 'literal',
                    'value': ')'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '0'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ],
            [
                {
                    'type': 'plusSign',
                    'value': '+'
                },
                {
                    'type': 'currency',
                    'value': 'US$'
                },
                {
                    'type': 'integer',
                    'value': '987'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '00'
                }
            ]
        ]
    ];
    for (const [signDisplay, negative, negativeNearZero, negativeZero, zero, positiveNearZero, positive] of tests) {
        const nf = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'USD',
            currencySign: 'accounting',
            signDisplay
        });
        verifyFormatParts(nf.formatToParts(-987), negative);
        verifyFormatParts(nf.formatToParts(-0.0001), negativeNearZero);
        verifyFormatParts(nf.formatToParts(-0), negativeZero);
        verifyFormatParts(nf.formatToParts(0), zero);
        verifyFormatParts(nf.formatToParts(0.0001), positiveNearZero);
        verifyFormatParts(nf.formatToParts(987), positive);
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