try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                72384,
                72440
            ]]
    });
    testPropertyEscapes(/^\p{Script=Pau_Cin_Hau}+$/u, matchSymbols, '\\p{Script=Pau_Cin_Hau}');
    testPropertyEscapes(/^\p{Script=Pauc}+$/u, matchSymbols, '\\p{Script=Pauc}');
    testPropertyEscapes(/^\p{sc=Pau_Cin_Hau}+$/u, matchSymbols, '\\p{sc=Pau_Cin_Hau}');
    testPropertyEscapes(/^\p{sc=Pauc}+$/u, matchSymbols, '\\p{sc=Pauc}');
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
                72383
            ],
            [
                72441,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Pau_Cin_Hau}+$/u, nonMatchSymbols, '\\P{Script=Pau_Cin_Hau}');
    testPropertyEscapes(/^\P{Script=Pauc}+$/u, nonMatchSymbols, '\\P{Script=Pauc}');
    testPropertyEscapes(/^\P{sc=Pau_Cin_Hau}+$/u, nonMatchSymbols, '\\P{sc=Pau_Cin_Hau}');
    testPropertyEscapes(/^\P{sc=Pauc}+$/u, nonMatchSymbols, '\\P{sc=Pauc}');
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