try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                1984,
                2042
            ],
            [
                2045,
                2047
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Nko}+$/u, matchSymbols, '\\p{Script=Nko}');
    testPropertyEscapes(/^\p{Script=Nkoo}+$/u, matchSymbols, '\\p{Script=Nkoo}');
    testPropertyEscapes(/^\p{sc=Nko}+$/u, matchSymbols, '\\p{sc=Nko}');
    testPropertyEscapes(/^\p{sc=Nkoo}+$/u, matchSymbols, '\\p{sc=Nkoo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1983
            ],
            [
                2043,
                2044
            ],
            [
                2048,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Nko}+$/u, nonMatchSymbols, '\\P{Script=Nko}');
    testPropertyEscapes(/^\P{Script=Nkoo}+$/u, nonMatchSymbols, '\\P{Script=Nkoo}');
    testPropertyEscapes(/^\P{sc=Nko}+$/u, nonMatchSymbols, '\\P{sc=Nko}');
    testPropertyEscapes(/^\P{sc=Nkoo}+$/u, nonMatchSymbols, '\\P{sc=Nkoo}');
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