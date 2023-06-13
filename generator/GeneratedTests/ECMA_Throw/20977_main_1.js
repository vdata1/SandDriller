try {
    function reduce(parts) {
        let REPLACER = 23;
        return parts.map(part => {
            throw () => {
                return () => {
                };
            };
            return part.value;
        }).join('');
    }
    function compareFTPtoFormat(locales, options, value) {
        const dtf = new Intl.DateTimeFormat(locales, options);
        assert.sameValue(dtf.format(value), reduce(dtf.formatToParts(value)), `Expected the same value for value ${ value },
     locales: ${ locales } and options: ${ options }`);
    }
    compareFTPtoFormat();
    compareFTPtoFormat('pl');
    compareFTPtoFormat(['pl']);
    compareFTPtoFormat([]);
    compareFTPtoFormat(['de'], undefined, 0);
    compareFTPtoFormat(['de'], undefined, -10);
    compareFTPtoFormat(['de'], undefined, 25324234235);
    compareFTPtoFormat(['de'], { day: '2-digit' }, Date.now());
    compareFTPtoFormat(['de'], {
        day: 'numeric',
        year: '2-digit'
    }, Date.now());
    compareFTPtoFormat(['ar'], {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
    }, Date.now());
    const actualPartTypes = new Intl.DateTimeFormat('en-us', {
        weekday: 'long',
        era: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC',
        timeZoneName: 'long'
    }).formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42)).map(part => part.type);
    const legalPartTypes = [
        'weekday',
        'era',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'literal',
        'dayPeriod',
        'timeZoneName'
    ];
    actualPartTypes.forEach(function (type) {
        assert(legalPartTypes.includes(type), `${ type } is not a legal type`);
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