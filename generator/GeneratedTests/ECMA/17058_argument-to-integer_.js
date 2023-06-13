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
    function compare(actual, expected, message) {
        for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
            assert.sameValue(actualEntry.type, expectedEntry.type, `${ message }: type for entry ${ i }`);
            assert.sameValue(actualEntry.value, expectedEntry.value, `${ message }: value for entry ${ i }`);
            assert.sameValue(actualEntry.source, expectedEntry.source, `${ message }: source for entry ${ i }`);
        }
    }
    const dtf = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    const date = Date.now();
    const expected = dtf.formatRangeToParts(0, date);
    compare(dtf.formatRangeToParts(-0.9, date), expected, 'formatRangeToParts(-0.9)');
    compare(dtf.formatRangeToParts(-0.5, date), expected, 'formatRangeToParts(-0.5)');
    compare(dtf.formatRangeToParts(-0.1, date), expected, 'formatRangeToParts(-0.1)');
    compare(dtf.formatRangeToParts(-Number.MIN_VALUE, date), expected, 'formatRangeToParts(-Number.MIN_VALUE)');
    compare(dtf.formatRangeToParts(-0, date), expected, 'formatRangeToParts(-0)');
    compare(dtf.formatRangeToParts(+0, date), expected, 'formatRangeToParts(+0)');
    compare(dtf.formatRangeToParts(Number.MIN_VALUE, date), expected, 'formatRangeToParts(Number.MIN_VALUE)');
    compare(dtf.formatRangeToParts(0.1, date), expected, 'formatRangeToParts(0.1)');
    compare(dtf.formatRangeToParts(0.5, date), expected, 'formatRangeToParts(0.5)');
    compare(dtf.formatRangeToParts(0.9, date), expected, 'formatRangeToParts(0.9)');
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