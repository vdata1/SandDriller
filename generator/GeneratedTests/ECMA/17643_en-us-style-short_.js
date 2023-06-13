try {
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
    assert.sameValue(typeof rtf.format, 'function', 'format should be supported');
    for (const [unitArgument, unitStrings] of Object.entries(units)) {
        const [singular, plural = singular] = unitStrings;
        assert.sameValue(rtf.format(1000, unitArgument), `in 1,000 ${ plural }`);
        assert.sameValue(rtf.format(10, unitArgument), `in 10 ${ plural }`);
        assert.sameValue(rtf.format(2, unitArgument), `in 2 ${ plural }`);
        assert.sameValue(rtf.format(1, unitArgument), `in 1 ${ singular }`);
        assert.sameValue(rtf.format(0, unitArgument), `in 0 ${ plural }`);
        assert.sameValue(rtf.format(-0, unitArgument), `0 ${ plural } ago`);
        assert.sameValue(rtf.format(-1, unitArgument), `1 ${ singular } ago`);
        assert.sameValue(rtf.format(-2, unitArgument), `2 ${ plural } ago`);
        assert.sameValue(rtf.format(-10, unitArgument), `10 ${ plural } ago`);
        assert.sameValue(rtf.format(-1000, unitArgument), `1,000 ${ plural } ago`);
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