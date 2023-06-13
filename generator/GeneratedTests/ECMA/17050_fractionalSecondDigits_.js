try {
    const d1 = new Date(2019, 7, 10, 1, 2, 3, 234);
    const d2 = new Date(2019, 7, 10, 1, 2, 3, 567);
    const d3 = new Date(2019, 7, 10, 1, 2, 13, 987);
    let dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: undefined
    });
    assert.sameValue(dtf.formatRange(d1, d2), '02:03', 'no fractionalSecondDigits');
    assert.sameValue(dtf.formatRange(d1, d3), '02:03 \u2013 02:13', 'no fractionalSecondDigits');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 1
    });
    assert.sameValue(dtf.formatRange(d1, d2), '02:03.2 \u2013 02:03.5', '1 fractionalSecondDigits round down');
    assert.sameValue(dtf.formatRange(d1, d3), '02:03.2 \u2013 02:13.9', '1 fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 2
    });
    assert.sameValue(dtf.formatRange(d1, d2), '02:03.23 \u2013 02:03.56', '2 fractionalSecondDigits round down');
    assert.sameValue(dtf.formatRange(d1, d3), '02:03.23 \u2013 02:13.98', '2 fractionalSecondDigits round down');
    dtf = new Intl.DateTimeFormat('en', {
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3
    });
    assert.sameValue(dtf.formatRange(d1, d2), '02:03.234 \u2013 02:03.567', '3 fractionalSecondDigits round down');
    assert.sameValue(dtf.formatRange(d1, d3), '02:03.234 \u2013 02:13.987', '3 fractionalSecondDigits round down');
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