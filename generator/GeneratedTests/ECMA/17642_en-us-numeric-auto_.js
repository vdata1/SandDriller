try {
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
    const rtf = new Intl.RelativeTimeFormat('en-US', { 'numeric': 'auto' });
    assert.sameValue(typeof rtf.format, 'function', 'format should be supported');
    const exceptions = {
        'year': {
            '-1': 'last year',
            '0': 'this year',
            '1': 'next year'
        },
        'quarter': {
            '-1': 'last quarter',
            '0': 'this quarter',
            '1': 'next quarter'
        },
        'month': {
            '-1': 'last month',
            '0': 'this month',
            '1': 'next month'
        },
        'week': {
            '-1': 'last week',
            '0': 'this week',
            '1': 'next week'
        },
        'day': {
            '-1': 'yesterday',
            '0': 'today',
            '1': 'tomorrow'
        },
        'hour': {
            '-1': '1 hour ago',
            '0': 'this hour',
            '1': 'in 1 hour'
        },
        'minute': {
            '-1': '1 minute ago',
            '0': 'this minute',
            '1': 'in 1 minute'
        },
        'second': {
            '-1': '1 second ago',
            '0': 'now',
            '1': 'in 1 second'
        }
    };
    for (const unit of units) {
        const expected = unit in exceptions ? [
            exceptions[unit]['1'],
            exceptions[unit]['0'],
            exceptions[unit]['0'],
            exceptions[unit]['-1']
        ] : [
            `in 1 ${ unit }`,
            `in 0 ${ unit }s`,
            `0 ${ unit }s ago`,
            `1 ${ unit } ago`
        ];
        assert.sameValue(rtf.format(1000, unit), `in 1,000 ${ unit }s`);
        assert.sameValue(rtf.format(10, unit), `in 10 ${ unit }s`);
        assert.sameValue(rtf.format(2, unit), `in 2 ${ unit }s`);
        assert.sameValue(rtf.format(1, unit), expected[0]);
        assert.sameValue(rtf.format(0, unit), expected[1]);
        assert.sameValue(rtf.format(-0, unit), expected[2]);
        assert.sameValue(rtf.format(-1, unit), expected[3]);
        assert.sameValue(rtf.format(-2, unit), `2 ${ unit }s ago`);
        assert.sameValue(rtf.format(-10, unit), `10 ${ unit }s ago`);
        assert.sameValue(rtf.format(-1000, unit), `1,000 ${ unit }s ago`);
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