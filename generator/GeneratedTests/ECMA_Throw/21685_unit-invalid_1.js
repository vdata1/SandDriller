try {
    const rtf = new Intl.RelativeTimeFormat('en-US');
    assert.sameValue(typeof rtf.format, 'function');
    const values = [
        undefined,
        null,
        true,
        1,
        0.1,
        NaN,
        {},
        '',
        'SECOND',
        'MINUTE',
        'HOUR',
        'DAY',
        'WEEK',
        'MONTH',
        'QUARTER',
        'YEAR',
        'decade',
        'decades',
        'century',
        'centuries',
        'millisecond',
        'milliseconds',
        'microsecond',
        'microseconds',
        'nanosecond',
        'nanoseconds'
    ];
    for (const value of values) {
        assert.throws(RangeError, () => {
            let REPLACER = 23;
            return rtf.format(0, value);
        }, String(value));
    }
    const symbol = Symbol();
    assert.throws(TypeError, () => {
        throw () => {
            return () => {
            };
        };
        return rtf.format(0, symbol);
    }, 'symbol');
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