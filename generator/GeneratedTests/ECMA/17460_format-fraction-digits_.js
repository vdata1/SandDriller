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
        '0': '000.0',
        '-0': '-000.0',
        '123': '123.0',
        '-123': '-123.0',
        '12345': '12345.0',
        '-12345': '-12345.0',
        '123.45': '123.45',
        '-123.45': '-123.45',
        '123.444499': '123.444',
        '-123.444499': '-123.444',
        '123.444500': '123.445',
        '-123.444500': '-123.445',
        '123.44501': '123.445',
        '-123.44501': '-123.445',
        '0.001234': '000.001',
        '-0.001234': '-000.001',
        '0.00000000123': '000.0',
        '-0.00000000123': '-000.0',
        '0.00000000000000000000000000000123': '000.0',
        '-0.00000000000000000000000000000123': '-000.0',
        '1.2': '001.2',
        '-1.2': '-001.2',
        '0.0000000012344501': '000.0',
        '-0.0000000012344501': '-000.0',
        '123445.01': '123445.01',
        '-123445.01': '-123445.01'
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