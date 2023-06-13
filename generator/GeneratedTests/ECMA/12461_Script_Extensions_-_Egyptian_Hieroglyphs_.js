try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                77824,
                78894
            ],
            [
                78896,
                78904
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Egyptian_Hieroglyphs}+$/u, matchSymbols, '\\p{Script_Extensions=Egyptian_Hieroglyphs}');
    testPropertyEscapes(/^\p{Script_Extensions=Egyp}+$/u, matchSymbols, '\\p{Script_Extensions=Egyp}');
    testPropertyEscapes(/^\p{scx=Egyptian_Hieroglyphs}+$/u, matchSymbols, '\\p{scx=Egyptian_Hieroglyphs}');
    testPropertyEscapes(/^\p{scx=Egyp}+$/u, matchSymbols, '\\p{scx=Egyp}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [78895],
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
                77823
            ],
            [
                78905,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Egyptian_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Egyptian_Hieroglyphs}');
    testPropertyEscapes(/^\P{Script_Extensions=Egyp}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Egyp}');
    testPropertyEscapes(/^\P{scx=Egyptian_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{scx=Egyptian_Hieroglyphs}');
    testPropertyEscapes(/^\P{scx=Egyp}+$/u, nonMatchSymbols, '\\P{scx=Egyp}');
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