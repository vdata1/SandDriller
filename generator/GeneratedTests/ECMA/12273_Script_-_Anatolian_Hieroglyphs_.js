try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                82944,
                83526
            ]]
    });
    testPropertyEscapes(/^\p{Script=Anatolian_Hieroglyphs}+$/u, matchSymbols, '\\p{Script=Anatolian_Hieroglyphs}');
    testPropertyEscapes(/^\p{Script=Hluw}+$/u, matchSymbols, '\\p{Script=Hluw}');
    testPropertyEscapes(/^\p{sc=Anatolian_Hieroglyphs}+$/u, matchSymbols, '\\p{sc=Anatolian_Hieroglyphs}');
    testPropertyEscapes(/^\p{sc=Hluw}+$/u, matchSymbols, '\\p{sc=Hluw}');
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
                82943
            ],
            [
                83527,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Anatolian_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{Script=Anatolian_Hieroglyphs}');
    testPropertyEscapes(/^\P{Script=Hluw}+$/u, nonMatchSymbols, '\\P{Script=Hluw}');
    testPropertyEscapes(/^\P{sc=Anatolian_Hieroglyphs}+$/u, nonMatchSymbols, '\\P{sc=Anatolian_Hieroglyphs}');
    testPropertyEscapes(/^\P{sc=Hluw}+$/u, nonMatchSymbols, '\\P{sc=Hluw}');
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