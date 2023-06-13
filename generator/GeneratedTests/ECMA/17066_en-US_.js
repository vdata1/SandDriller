try {
    function* zip(a, b) {
        assert.sameValue(a.length, b.length);
        for (let i = 0; i < a.length; ++i) {
            yield [
                i,
                a[i],
                b[i]
            ];
        }
    }
    function compare(actual, expected) {
        for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
            assert.sameValue(actualEntry.type, expectedEntry.type, `type for entry ${ i }`);
            assert.sameValue(actualEntry.value, expectedEntry.value, `value for entry ${ i }`);
            assert.sameValue(actualEntry.source, expectedEntry.source, `source for entry ${ i }`);
        }
    }
    const date1 = new Date('2019-01-03T00:00:00');
    const date2 = new Date('2019-01-05T00:00:00');
    const date3 = new Date('2019-03-04T00:00:00');
    const date4 = new Date('2020-03-04T00:00:00');
    let dtf = new Intl.DateTimeFormat('en-US');
    compare(dtf.formatRangeToParts(date1, date1), [
        {
            type: 'month',
            value: '1',
            source: 'shared'
        },
        {
            type: 'literal',
            value: '/',
            source: 'shared'
        },
        {
            type: 'day',
            value: '3',
            source: 'shared'
        },
        {
            type: 'literal',
            value: '/',
            source: 'shared'
        },
        {
            type: 'year',
            value: '2019',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date2), [
        {
            type: 'month',
            value: '1',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '1',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '5',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date3), [
        {
            type: 'month',
            value: '1',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '3',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date4), [
        {
            type: 'month',
            value: '1',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '3',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date2, date3), [
        {
            type: 'month',
            value: '1',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '5',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '3',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date2, date4), [
        {
            type: 'month',
            value: '1',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '5',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '3',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date3, date4), [
        {
            type: 'month',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: '3',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '/',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
    dtf = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    compare(dtf.formatRangeToParts(date1, date1), [
        {
            type: 'month',
            value: 'Jan',
            source: 'shared'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'shared'
        },
        {
            type: 'day',
            value: '3',
            source: 'shared'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'shared'
        },
        {
            type: 'year',
            value: '2019',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date2), [
        {
            type: 'month',
            value: 'Jan',
            source: 'shared'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'shared'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'day',
            value: '5',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'shared'
        },
        {
            type: 'year',
            value: '2019',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date3), [
        {
            type: 'month',
            value: 'Jan',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: 'Mar',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'shared'
        },
        {
            type: 'year',
            value: '2019',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(date1, date4), [
        {
            type: 'month',
            value: 'Jan',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '3',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: 'Mar',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date2, date3), [
        {
            type: 'month',
            value: 'Jan',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '5',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: 'Mar',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'shared'
        },
        {
            type: 'year',
            value: '2019',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(date2, date4), [
        {
            type: 'month',
            value: 'Jan',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '5',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: 'Mar',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(date3, date4), [
        {
            type: 'month',
            value: 'Mar',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'startRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'startRange'
        },
        {
            type: 'year',
            value: '2019',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'month',
            value: 'Mar',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ' ',
            source: 'endRange'
        },
        {
            type: 'day',
            value: '4',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ', ',
            source: 'endRange'
        },
        {
            type: 'year',
            value: '2020',
            source: 'endRange'
        }
    ]);
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