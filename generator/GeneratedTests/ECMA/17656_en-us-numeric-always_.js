try {
    function verifyFormatParts(actual, expected, message) {
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
            assert.sameValue(actual[i].unit, expected[i].unit, `${ message }: parts[${ i }].unit`);
        }
    }
    const units = [
        'second',
        'minute',
        'hour',
        'day',
        'week',
        'month',
        'quarter',
        'year'
    ];
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.formatToParts, 'function', 'formatToParts should be supported');
    for (const unit of units) {
        verifyFormatParts(rtf.formatToParts(1000, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '1',
                'unit': unit
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unit
            },
            {
                'type': 'integer',
                'value': '000',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s`
            }
        ], `formatToParts(1000, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(10, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '10',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s`
            }
        ], `formatToParts(10, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(2, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '2',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s`
            }
        ], `formatToParts(2, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(1, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '1',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }`
            }
        ], `formatToParts(1, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(0, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '0',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s`
            }
        ], `formatToParts(0, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(-0, unit), [
            {
                'type': 'integer',
                'value': '0',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s ago`
            }
        ], `formatToParts(-0, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(-1, unit), [
            {
                'type': 'integer',
                'value': '1',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit } ago`
            }
        ], `formatToParts(-1, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(-2, unit), [
            {
                'type': 'integer',
                'value': '2',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s ago`
            }
        ], `formatToParts(-2, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(-10, unit), [
            {
                'type': 'integer',
                'value': '10',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s ago`
            }
        ], `formatToParts(-10, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(-1000, unit), [
            {
                'type': 'integer',
                'value': '1',
                'unit': unit
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unit
            },
            {
                'type': 'integer',
                'value': '000',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s ago`
            }
        ], `formatToParts(-1000, ${ unit })`);
        verifyFormatParts(rtf.formatToParts(123456.78, unit), [
            {
                'type': 'literal',
                'value': 'in '
            },
            {
                'type': 'integer',
                'value': '123',
                'unit': unit
            },
            {
                'type': 'group',
                'value': ',',
                'unit': unit
            },
            {
                'type': 'integer',
                'value': '456',
                'unit': unit
            },
            {
                'type': 'decimal',
                'value': '.',
                'unit': unit
            },
            {
                'type': 'fraction',
                'value': '78',
                'unit': unit
            },
            {
                'type': 'literal',
                'value': ` ${ unit }s`
            }
        ], `formatToParts(123456.78, ${ unit })`);
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