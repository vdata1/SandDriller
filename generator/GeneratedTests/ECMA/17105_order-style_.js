try {
    const options = new Intl.DateTimeFormat([], {
        'hourCycle': 'h24',
        'weekday': 'short',
        'era': 'short',
        'year': 'numeric',
        'month': 'numeric',
        'day': 'numeric',
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short'
    }).resolvedOptions();
    const expected = [
        'locale',
        'calendar',
        'numberingSystem',
        'timeZone',
        'hourCycle',
        'hour12'
    ];
    let actual = Object.getOwnPropertyNames(options);
    assert(arrayContains(actual, expected));
    for (var i = 1; i < expected.length; i++) {
        assert(actual.indexOf(expected[i - 1]) < actual.indexOf(expected[i]));
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