try {
    function* zip(a, b) {
        let REPLACER = 23;
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
        throw () => {
            return () => {
            };
        };
        for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
            assert.sameValue(actualEntry.type, expectedEntry.type, `type for entry ${ i }`);
            assert.sameValue(actualEntry.value, expectedEntry.value, `value for entry ${ i }`);
            assert.sameValue(actualEntry.source, expectedEntry.source, `source for entry ${ i }`);
        }
    }
    const d1 = new Date(2019, 7, 10, 1, 2, 3, 234);
    const d2 = new Date(2019, 7, 10, 1, 2, 3, 567);
    const d3 = new Date(2019, 7, 10, 1, 2, 13, 987);
    assert.throws(RangeError, () => {
        new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 0
        });
    }, 'fractionalSecondDigits 0 should throw RangeError for out of range');
    assert.throws(RangeError, () => {
        new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 4
        });
    }, 'fractionalSecondDigits 4 should throw RangeError for out of range');
    let dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: undefined
    });
    compare(dtf.formatRangeToParts(d1, d2), [
        {
            type: 'minute',
            value: '02',
            source: 'shared'
        },
        {
            type: 'literal',
            value: ':',
            source: 'shared'
        },
        {
            type: 'second',
            value: '03',
            source: 'shared'
        }
    ]);
    compare(dtf.formatRangeToParts(d1, d3), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '13',
            source: 'endRange'
        }
    ]);
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 1
    });
    compare(dtf.formatRangeToParts(d1, d2), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '2',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '5',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(d1, d3), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '2',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '13',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '9',
            source: 'endRange'
        }
    ]);
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 2
    });
    compare(dtf.formatRangeToParts(d1, d2), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '23',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '56',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(d1, d3), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '23',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '13',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '98',
            source: 'endRange'
        }
    ]);
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3
    });
    compare(dtf.formatRangeToParts(d1, d2), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '234',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '567',
            source: 'endRange'
        }
    ]);
    compare(dtf.formatRangeToParts(d1, d3), [
        {
            type: 'minute',
            value: '02',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'startRange'
        },
        {
            type: 'second',
            value: '03',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'startRange'
        },
        {
            type: 'fractionalSecond',
            value: '234',
            source: 'startRange'
        },
        {
            type: 'literal',
            value: ' \u2013 ',
            source: 'shared'
        },
        {
            type: 'minute',
            value: '02',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: ':',
            source: 'endRange'
        },
        {
            type: 'second',
            value: '13',
            source: 'endRange'
        },
        {
            type: 'literal',
            value: '.',
            source: 'endRange'
        },
        {
            type: 'fractionalSecond',
            value: '987',
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