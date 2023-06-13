try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                1792,
                1805
            ],
            [
                1807,
                1866
            ],
            [
                1869,
                1871
            ],
            [
                2144,
                2154
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Syriac}+$/u, matchSymbols, '\\p{Script=Syriac}');
    testPropertyEscapes(/^\p{Script=Syrc}+$/u, matchSymbols, '\\p{Script=Syrc}');
    testPropertyEscapes(/^\p{sc=Syriac}+$/u, matchSymbols, '\\p{sc=Syriac}');
    testPropertyEscapes(/^\p{sc=Syrc}+$/u, matchSymbols, '\\p{sc=Syrc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [1806],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1791
            ],
            [
                1867,
                1868
            ],
            [
                1872,
                2143
            ],
            [
                2155,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Syriac}+$/u, nonMatchSymbols, '\\P{Script=Syriac}');
    testPropertyEscapes(/^\P{Script=Syrc}+$/u, nonMatchSymbols, '\\P{Script=Syrc}');
    testPropertyEscapes(/^\P{sc=Syriac}+$/u, nonMatchSymbols, '\\P{sc=Syriac}');
    testPropertyEscapes(/^\P{sc=Syrc}+$/u, nonMatchSymbols, '\\P{sc=Syrc}');
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