try {
    var actual = new Intl.DateTimeFormat().resolvedOptions();
    var actual2 = new Intl.DateTimeFormat().resolvedOptions();
    assert.notSameValue(actual2, actual, 'resolvedOptions returned the same object twice.');
    var calendars = [
        'buddhist',
        'chinese',
        'coptic',
        'dangi',
        'ethioaa',
        'ethiopic-amete-alem',
        'ethiopic',
        'gregory',
        'hebrew',
        'indian',
        'islamic',
        'islamic-umalqura',
        'islamic-tbla',
        'islamic-civil',
        'islamic-rgsa',
        'iso8601',
        'japanese',
        'persian',
        'roc',
        'islamicc'
    ];
    assert(isCanonicalizedStructurallyValidLanguageTag(actual.locale), 'Invalid locale: ' + actual.locale);
    assert.notSameValue(calendars.indexOf(actual.calendar), -1, 'Invalid calendar: ' + actual.calendar);
    assert(isValidNumberingSystem(actual.numberingSystem), 'Invalid numbering system: ' + actual.numberingSystem);
    assert(isCanonicalizedStructurallyValidTimeZoneName(actual.timeZone), 'Invalid time zone: ' + actual.timeZone);
    assert.notSameValue([
        '2-digit',
        'numeric'
    ].indexOf(actual.year), -1, 'Invalid year: ' + actual.year);
    assert.notSameValue([
        '2-digit',
        'numeric',
        'narrow',
        'short',
        'long'
    ].indexOf(actual.month), -1, 'Invalid month: ' + actual.month);
    assert.notSameValue([
        '2-digit',
        'numeric'
    ].indexOf(actual.day), -1, 'Invalid day: ' + actual.day);
    var dataPropertyDesc = {
        writable: true,
        enumerable: true,
        configurable: true
    };
    verifyProperty(actual, 'locale', dataPropertyDesc);
    verifyProperty(actual, 'calendar', dataPropertyDesc);
    verifyProperty(actual, 'numberingSystem', dataPropertyDesc);
    verifyProperty(actual, 'timeZone', dataPropertyDesc);
    verifyProperty(actual, 'weekday', undefined);
    verifyProperty(actual, 'era', undefined);
    verifyProperty(actual, 'year', dataPropertyDesc);
    verifyProperty(actual, 'month', dataPropertyDesc);
    verifyProperty(actual, 'day', dataPropertyDesc);
    verifyProperty(actual, 'hour', undefined);
    verifyProperty(actual, 'minute', undefined);
    verifyProperty(actual, 'second', undefined);
    verifyProperty(actual, 'timeZoneName', undefined);
    verifyProperty(actual, 'hour12', undefined);
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