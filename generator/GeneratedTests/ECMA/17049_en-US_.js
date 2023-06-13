try {
    const date1 = new Date('2019-01-03T00:00:00');
    const date2 = new Date('2019-01-05T00:00:00');
    const date3 = new Date('2019-03-04T00:00:00');
    const date4 = new Date('2020-03-04T00:00:00');
    let dtf = new Intl.DateTimeFormat('en-US');
    assert.sameValue(dtf.formatRange(date1, date1), '1/3/2019');
    assert.sameValue(dtf.formatRange(date1, date2), '1/3/2019 \u2013 1/5/2019');
    assert.sameValue(dtf.formatRange(date1, date3), '1/3/2019 \u2013 3/4/2019');
    assert.sameValue(dtf.formatRange(date1, date4), '1/3/2019 \u2013 3/4/2020');
    assert.sameValue(dtf.formatRange(date2, date3), '1/5/2019 \u2013 3/4/2019');
    assert.sameValue(dtf.formatRange(date2, date4), '1/5/2019 \u2013 3/4/2020');
    assert.sameValue(dtf.formatRange(date3, date4), '3/4/2019 \u2013 3/4/2020');
    dtf = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    assert.sameValue(dtf.formatRange(date1, date1), 'Jan 3, 2019');
    assert.sameValue(dtf.formatRange(date1, date2), 'Jan 3 \u2013 5, 2019');
    assert.sameValue(dtf.formatRange(date1, date3), 'Jan 3 \u2013 Mar 4, 2019');
    assert.sameValue(dtf.formatRange(date1, date4), 'Jan 3, 2019 \u2013 Mar 4, 2020');
    assert.sameValue(dtf.formatRange(date2, date3), 'Jan 5 \u2013 Mar 4, 2019');
    assert.sameValue(dtf.formatRange(date2, date4), 'Jan 5, 2019 \u2013 Mar 4, 2020');
    assert.sameValue(dtf.formatRange(date3, date4), 'Mar 4, 2019 \u2013 Mar 4, 2020');
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