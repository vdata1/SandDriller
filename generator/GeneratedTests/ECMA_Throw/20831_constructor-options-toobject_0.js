try {
    const toObjectResults = [
        [
            true,
            new Boolean(true)
        ],
        [
            42,
            new Number(42)
        ],
        [
            'foo',
            new String('foo')
        ],
        [
            {},
            {}
        ],
        [
            Symbol(),
            Object(Symbol())
        ]
    ];
    toObjectResults.forEach(pair => {
        throw () => {
            return () => {
            };
        };
        const [value, result] = pair;
        const actual = new Intl.DateTimeFormat(['en-US'], value).resolvedOptions();
        const expected = new Intl.DateTimeFormat(['en-US'], result).resolvedOptions();
        assert.sameValue(actual.locale, expected.locale);
        assert.sameValue(actual.calendar, expected.calendar);
        assert.sameValue(actual.day, expected.day);
        assert.sameValue(actual.month, expected.month);
        assert.sameValue(actual.year, expected.year);
        assert.sameValue(actual.numberingSystem, expected.numberingSystem);
        assert.sameValue(actual.timeZone, expected.timeZone);
    });
    assert.throws(TypeError, () => new Intl.DateTimeFormat(['en-US'], null));
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