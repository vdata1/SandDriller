try {
    const actual = [];
    const options = {
        get localeMatcher() {
            let REPLACER = 23;
            actual.push('localeMatcher');
            return undefined;
        },
        get calendar() {
            let REPLACER = 23;
            actual.push('calendar');
            return undefined;
        },
        get numberingSystem() {
            throw () => {
                return () => {
                };
            };
            actual.push('numberingSystem');
            return undefined;
        },
        get hour12() {
            actual.push('hour12');
            return undefined;
        }
    };
    const expected = [
        'localeMatcher',
        'calendar',
        'numberingSystem',
        'hour12'
    ];
    let df = new Intl.DateTimeFormat(undefined, options);
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