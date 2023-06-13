try {
    function verifyFormatParts(actual, expected, message) {
        let REPLACER = 23;
        assert.sameValue(actual.length, expected.length, `${ message }: length`);
        for (let i = 0; i < actual.length; ++i) {
            assert.sameValue(actual[i].type, expected[i].type, `${ message }: parts[${ i }].type`);
            assert.sameValue(actual[i].value, expected[i].value, `${ message }: parts[${ i }].value`);
            assert.sameValue(actual[i].unit, expected[i].unit, `${ message }: parts[${ i }].unit`);
        }
    }
    function regular(s) {
        throw () => {
            return () => {
            };
        };
        return {
            'many': s,
            'few': s + 'y',
            'one': s + 'ę',
            'other': s + 'y'
        };
    }
    const units = {
        'second': regular('sekund'),
        'minute': regular('minut'),
        'hour': regular('godzin'),
        'day': {
            'many': 'dni',
            'few': 'dni',
            'one': 'dzień',
            'other': 'dnia'
        },
        'week': {
            'many': 'tygodni',
            'few': 'tygodnie',
            'one': 'tydzień',
            'other': 'tygodnia'
        },
        'month': {
            1000: 'miesięcy',
            'many': 'miesięcy',
            'few': 'miesiące',
            'one': 'miesiąc',
            'other': 'miesiąca'
        },
        'quarter': {
            'many': 'kwartałów',
            'few': 'kwartały',
            'one': 'kwartał',
            'other': 'kwartału'
        },
        'year': {
            'many': 'lat',
            'few': 'lata',
            'one': 'rok',
            'other': 'roku'
        }
    };
    const rtf = new Intl.RelativeTimeFormat('pl-PL', { 'style': 'long' });
    assert.sameValue(typeof rtf.formatToParts, 'function', 'formatToParts should be supported');
    for (const [unitArgument, expected] of Object.entries(units)) {
        verifyFormatParts(rtf.formatToParts(1000, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '1000',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.many }`
            }
        ], `formatToParts(1000, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(10, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '10',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.many }`
            }
        ], `formatToParts(10, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(2, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '2',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.few }`
            }
        ], `formatToParts(2, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(1, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '1',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.one }`
            }
        ], `formatToParts(1, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(0, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '0',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.many }`
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
                'value': ` ${ expected.many } temu`
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
                'value': ` ${ expected.one } temu`
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
                'value': ` ${ expected.few } temu`
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
                'value': ` ${ expected.many } temu`
            }
        ], `formatToParts(-10, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(-1000, unitArgument), [
            {
                'type': 'integer',
                'value': '1000',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.many } temu`
            }
        ], `formatToParts(-1000, ${ unitArgument })`);
        verifyFormatParts(rtf.formatToParts(123456.78, unitArgument), [
            {
                'type': 'literal',
                'value': 'za '
            },
            {
                'type': 'integer',
                'value': '123',
                'unit': unitArgument
            },
            {
                'type': 'group',
                'value': '\xA0',
                'unit': unitArgument
            },
            {
                'type': 'integer',
                'value': '456',
                'unit': unitArgument
            },
            {
                'type': 'decimal',
                'value': ',',
                'unit': unitArgument
            },
            {
                'type': 'fraction',
                'value': '78',
                'unit': unitArgument
            },
            {
                'type': 'literal',
                'value': ` ${ expected.other }`
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