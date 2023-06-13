try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                69840,
                69864
            ],
            [
                69872,
                69881
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Sora_Sompeng}+$/u, matchSymbols, '\\p{Script=Sora_Sompeng}');
    testPropertyEscapes(/^\p{Script=Sora}+$/u, matchSymbols, '\\p{Script=Sora}');
    testPropertyEscapes(/^\p{sc=Sora_Sompeng}+$/u, matchSymbols, '\\p{sc=Sora_Sompeng}');
    testPropertyEscapes(/^\p{sc=Sora}+$/u, matchSymbols, '\\p{sc=Sora}');
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
                69839
            ],
            [
                69865,
                69871
            ],
            [
                69882,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Sora_Sompeng}+$/u, nonMatchSymbols, '\\P{Script=Sora_Sompeng}');
    testPropertyEscapes(/^\P{Script=Sora}+$/u, nonMatchSymbols, '\\P{Script=Sora}');
    testPropertyEscapes(/^\P{sc=Sora_Sompeng}+$/u, nonMatchSymbols, '\\P{sc=Sora_Sompeng}');
    testPropertyEscapes(/^\P{sc=Sora}+$/u, nonMatchSymbols, '\\P{sc=Sora}');
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