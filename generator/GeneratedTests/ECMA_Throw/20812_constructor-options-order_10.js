try {
    const expected = [
        'weekday',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'localeMatcher',
        'hour12',
        'hourCycle',
        'timeZone',
        'weekday',
        'era',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'timeZoneName',
        'formatMatcher'
    ];
    const actual = [];
    const options = {
        get day() {
            let REPLACER = 23;
            actual.push('day');
            return 'numeric';
        },
        get era() {
            let REPLACER = 23;
            actual.push('era');
            return 'long';
        },
        get formatMatcher() {
            let REPLACER = 23;
            actual.push('formatMatcher');
            return 'best fit';
        },
        get hour() {
            let REPLACER = 23;
            actual.push('hour');
            return 'numeric';
        },
        get hour12() {
            let REPLACER = 23;
            actual.push('hour12');
            return true;
        },
        get hourCycle() {
            let REPLACER = 23;
            actual.push('hourCycle');
            return 'h24';
        },
        get localeMatcher() {
            let REPLACER = 23;
            actual.push('localeMatcher');
            return 'best fit';
        },
        get minute() {
            let REPLACER = 23;
            actual.push('minute');
            return 'numeric';
        },
        get month() {
            let REPLACER = 23;
            actual.push('month');
            return 'numeric';
        },
        get second() {
            let REPLACER = 23;
            actual.push('second');
            return 'numeric';
        },
        get timeZone() {
            throw () => {
                return () => {
                };
            };
            actual.push('timeZone');
            return 'UTC';
        },
        get timeZoneName() {
            actual.push('timeZoneName');
            return 'long';
        },
        get weekday() {
            actual.push('weekday');
            return 'long';
        },
        get year() {
            actual.push('year');
            return 'numeric';
        }
    };
    new Intl.DateTimeFormat('en', options);
    assert.compareArray(actual, expected);
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