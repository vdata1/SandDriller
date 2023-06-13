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
            {},
            {}
        ],
        [
            Symbol(),
            Object(Symbol())
        ]
    ];
    toObjectResults.forEach(pair => {
        const [value, result] = pair;
        const actual = new Intl.NumberFormat(value).resolvedOptions();
        const expected = new Intl.NumberFormat(result).resolvedOptions();
        assert.sameValue(actual.locale, expected.locale);
        assert.sameValue(actual.minimumIntegerDigits, expected.minimumIntegerDigits);
        assert.sameValue(actual.minimumFractionDigits, expected.minimumFractionDigits);
        assert.sameValue(actual.maximumFractionDigits, expected.maximumFractionDigits);
        assert.sameValue(actual.numberingSystem, expected.numberingSystem);
        assert.sameValue(actual.style, expected.style);
        assert.sameValue(actual.useGrouping, expected.useGrouping);
    });
    assert.throws(TypeError, () => new Intl.NumberFormat(null));
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