try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                67968,
                67999
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Meroitic_Hieroglyphs}+$/u, matchSymbols, '\\p{Script_Extensions=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\p{Script_Extensions=Mero}+$/u, matchSymbols, '\\p{Script_Extensions=Mero}');
    testPropertyEscapes(/^\p{scx=Meroitic_Hieroglyphs}+$/u, matchSymbols, '\\p{scx=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\p{scx=Mero}+$/u, matchSymbols, '\\p{scx=Mero}');
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
    testPropertyEscapes(/^\P{Script_Extensions=Meroitic_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\P{Script_Extensions=Mero}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mero}');
    testPropertyEscapes(/^\P{scx=Meroitic_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{scx=Meroitic_Hieroglyphs}');
    testPropertyEscapes(/^\P{scx=Mero}+$/u, nonMatchSymbols, '\\P{scx=Mero}');
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