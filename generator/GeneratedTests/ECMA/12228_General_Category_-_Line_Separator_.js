try {
    const matchSymbols = buildString({
        loneCodePoints: [8232],
        ranges: []
    });
    testPropertyEscapes(/^\p{General_Category=Line_Separator}+$/u, matchSymbols, '\\p{General_Category=Line_Separator}');
    testPropertyEscapes(/^\p{General_Category=Zl}+$/u, matchSymbols, '\\p{General_Category=Zl}');
    testPropertyEscapes(/^\p{gc=Line_Separator}+$/u, matchSymbols, '\\p{gc=Line_Separator}');
    testPropertyEscapes(/^\p{gc=Zl}+$/u, matchSymbols, '\\p{gc=Zl}');
    testPropertyEscapes(/^\p{Line_Separator}+$/u, matchSymbols, '\\p{Line_Separator}');
    testPropertyEscapes(/^\p{Zl}+$/u, matchSymbols, '\\p{Zl}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                8231
            ],
            [
                8233,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Line_Separator}+$/u, nonMatchSymbols, '\\P{General_Category=Line_Separator}');
    testPropertyEscapes(/^\P{General_Category=Zl}+$/u, nonMatchSymbols, '\\P{General_Category=Zl}');
    testPropertyEscapes(/^\P{gc=Line_Separator}+$/u, nonMatchSymbols, '\\P{gc=Line_Separator}');
    testPropertyEscapes(/^\P{gc=Zl}+$/u, nonMatchSymbols, '\\P{gc=Zl}');
    testPropertyEscapes(/^\P{Line_Separator}+$/u, nonMatchSymbols, '\\P{Line_Separator}');
    testPropertyEscapes(/^\P{Zl}+$/u, nonMatchSymbols, '\\P{Zl}');
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