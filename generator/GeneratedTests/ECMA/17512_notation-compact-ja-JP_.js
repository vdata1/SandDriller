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
            987654321,
            [
                {
                    'type': 'integer',
                    'value': '9'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '9'
                },
                {
                    'type': 'compact',
                    'value': '億'
                }
            ]
        ],
        [
            98765432,
            [
                {
                    'type': 'integer',
                    'value': '9877'
                },
                {
                    'type': 'compact',
                    'value': '万'
                }
            ]
        ],
        [
            98765,
            [
                {
                    'type': 'integer',
                    'value': '9'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '9'
                },
                {
                    'type': 'compact',
                    'value': '万'
                }
            ]
        ],
        [
            9876,
            [{
                    'type': 'integer',
                    'value': '9876'
                }]
        ],
        [
            159,
            [{
                    'type': 'integer',
                    'value': '159'
                }]
        ],
        [
            15.9,
            [{
                    'type': 'integer',
                    'value': '16'
                }]
        ],
        [
            1.59,
            [
                {
                    'type': 'integer',
                    'value': '1'
                },
                {
                    'type': 'decimal',
                    'value': '.'
                },
                {
                    'type': 'fraction',
                    'value': '6'
                }
            ]
        ],
        [
            0.159,
            [
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
                    'value': '16'
                }
            ]
        ],
        [
            0.0159,
            [
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
                    'value': '016'
                }
            ]
        ],
        [
            0.00159,
            [
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
                    'value': '0016'
                }
            ]
        ],
        [
            -Infinity,
            [
                {
                    'type': 'minusSign',
                    'value': '-'
                },
                {
                    'type': 'infinity',
                    'value': '\u221E'
                }
            ]
        ],
        [
            Infinity,
            [{
                    'type': 'infinity',
                    'value': '\u221E'
                }]
        ],
        [
            NaN,
            [{
                    'type': 'nan',
                    'value': 'NaN'
                }]
        ]
    ];
    for (const [number, short, long = short] of tests) {
        const nfShort = new Intl.NumberFormat('ja-JP', {
            notation: 'compact',
            compactDisplay: 'short'
        });
        verifyFormatParts(nfShort.formatToParts(number), short, `Compact short: ${ number }`);
        const nfLong = new Intl.NumberFormat('ja-JP', {
            notation: 'compact',
            compactDisplay: 'long'
        });
        verifyFormatParts(nfLong.formatToParts(number), long, `Compact long: ${ number }`);
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