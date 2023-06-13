try {
    {
        const date = new Date(2019, 7, 10, 1, 2, 3, 234);
        let dtf = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date, date), dtf.format(date), 'same output with date options');
        dtf = new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date, date), dtf.format(date), 'same output with time options');
        dtf = new Intl.DateTimeFormat('en', {
            month: 'short',
            day: 'numeric',
            minute: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date, date), dtf.format(date), 'same output with date-time options');
        dtf = new Intl.DateTimeFormat('en', {
            dateStyle: 'long',
            timeStyle: 'short'
        });
        assert.sameValue(dtf.formatRange(date, date), dtf.format(date), 'same output with dateStyle/timeStyle');
    }
    {
        const date1 = new Date(2019, 7, 10, 1, 2, 3, 234);
        const date2 = new Date(2019, 7, 10, 1, 2, 3, 235);
        let dtf = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date1, date2), dtf.format(date1), 'same output with date options');
        dtf = new Intl.DateTimeFormat('en', {
            minute: 'numeric',
            second: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date1, date2), dtf.format(date1), 'same output with time options');
        dtf = new Intl.DateTimeFormat('en', {
            month: 'short',
            day: 'numeric',
            minute: 'numeric'
        });
        assert.sameValue(dtf.formatRange(date1, date2), dtf.format(date1), 'same output with date-time options');
        dtf = new Intl.DateTimeFormat('en', {
            dateStyle: 'long',
            timeStyle: 'short'
        });
        assert.sameValue(dtf.formatRange(date1, date2), dtf.format(date1), 'same output with dateStyle/timeStyle');
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