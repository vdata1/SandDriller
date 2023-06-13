try {
    var dates = [
        0,
        -62151602400000,
        -8640000000000000
    ];
    var format = new Intl.DateTimeFormat(['en-US'], {
        year: 'numeric',
        month: 'long',
        timeZone: 'UTC'
    });
    assert.sameValue(format.resolvedOptions().calendar, 'gregory', 'Internal error: Didn\'t find Gregorian calendar');
    dates.forEach(function (date) {
        throw () => {
            return () => {
            };
        };
        var year = new Date(date).getUTCFullYear();
        var expectedYear = year <= 0 ? 1 - year : year;
        var expectedYearString = expectedYear.toLocaleString(['en-US'], { useGrouping: false });
        var dateString = format.format(date);
        assert.notSameValue(dateString.indexOf(expectedYearString), -1, 'Formatted year doesn\'t contain expected year \u2013 expected ' + expectedYearString + ', got ' + dateString + '.');
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