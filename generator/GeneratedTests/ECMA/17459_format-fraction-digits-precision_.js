try {
    var locales = [
        new Intl.NumberFormat().resolvedOptions().locale,
        'ar',
        'de',
        'th',
        'ja'
    ];
    var numberingSystems = [
        'arab',
        'latn',
        'thai',
        'hanidec'
    ];
    var testData = {
        '12344501000000000000000000000000000': '12344501000000000000000000000000000.0',
        '-12344501000000000000000000000000000': '-12344501000000000000000000000000000.0'
    };
    testNumberFormat(locales, numberingSystems, {
        useGrouping: false,
        minimumIntegerDigits: 3,
        minimumFractionDigits: 1,
        maximumFractionDigits: 3
    }, testData);
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