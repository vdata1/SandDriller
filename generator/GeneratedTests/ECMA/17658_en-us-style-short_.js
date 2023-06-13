try {
    function verifyFormatParts(actual, expected, message) {
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
            assert.sameValue(actual[i].unit, expected[i].unit, `${ message }: parts[${ i }].unit`);
        }
    }
    const units = {
        'second': ['sec.'],
        'minute': ['min.'],
        'hour': ['hr.'],
        'day': [
            'day',
            'days'
        ],
        'week': ['wk.'],
        'month': ['mo.'],
        'quarter': [
            'qtr.',
            'qtrs.'
        ],
        'year': ['yr.']
    };
    const rtf = new Intl.RelativeTimeFormat('en-US', { 'style': 'short' });
    assert.sameValue(typeof rtf.formatToParts, 'function', 'formatToParts should be supported');
    for (const [unitArgument, unitStrings] of Object.entries(units)) {
        const [singular, plural = singular] = unitStrings;
        verifyFormatParts(rtf.formatToParts(1000, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '1',
                'unit': unitArgument
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unitArgument
            },
            {
                'type': 'integer',
                'value': '000',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural }`
            }
        ], `formatToParts(1000, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(10, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '10',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural }`
            }
        ], `formatToParts(10, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(2, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '2',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural }`
            }
        ], `formatToParts(2, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(1, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '1',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ singular }`
            }
        ], `formatToParts(1, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(0, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '0',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural }`
            }
        ], `formatToParts(0, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-0, unitArgument), [
            {
                'type': 'integer',
                'value': '0',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural } ago`
            }
        ], `formatToParts(-0, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-1, unitArgument), [
            {
                'type': 'integer',
                'value': '1',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ singular } ago`
            }
        ], `formatToParts(-1, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-2, unitArgument), [
            {
                'type': 'integer',
                'value': '2',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural } ago`
            }
        ], `formatToParts(-2, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-10, unitArgument), [
            {
                'type': 'integer',
                'value': '10',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural } ago`
            }
        ], `formatToParts(-10, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-1000, unitArgument), [
            {
                'type': 'integer',
                'value': '1',
                'unit': unitArgument
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unitArgument
            },
            {
                'type': 'integer',
                'value': '000',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural } ago`
            }
        ], `formatToParts(-1000, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(123456.78, unitArgument), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '123',
                'unit': unitArgument
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unitArgument
            },
            {
                'type': 'integer',
                'value': '456',
                'unit': unitArgument
            },
            {
                'type': 'decimal',
                'value': '.',
                'unit': unitArgument
            },
            {
                'type': 'fraction',
                'value': '78',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ plural }`
            }
        ], `formatToParts(123456.78, ${ unitArgument })`);
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