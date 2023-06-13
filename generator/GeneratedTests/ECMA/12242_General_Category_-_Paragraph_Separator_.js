try {
    const matchSymbols = buildString({
        loneCodePoints: [8233],
        ranges: []
    });
    testPropertyEscapes(/^\p{General_Category=Paragraph_Separator}+$/u, matchSymbols, '\\p{General_Category=Paragraph_Separator}');
    testPropertyEscapes(/^\p{General_Category=Zp}+$/u, matchSymbols, '\\p{General_Category=Zp}');
    testPropertyEscapes(/^\p{gc=Paragraph_Separator}+$/u, matchSymbols, '\\p{gc=Paragraph_Separator}');
    testPropertyEscapes(/^\p{gc=Zp}+$/u, matchSymbols, '\\p{gc=Zp}');
    testPropertyEscapes(/^\p{Paragraph_Separator}+$/u, matchSymbols, '\\p{Paragraph_Separator}');
    testPropertyEscapes(/^\p{Zp}+$/u, matchSymbols, '\\p{Zp}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                8232
            ],
            [
                8234,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Paragraph_Separator}+$/u, nonMatchSymbols, '\\P{General_Category=Paragraph_Separator}');
    testPropertyEscapes(/^\P{General_Category=Zp}+$/u, nonMatchSymbols, '\\P{General_Category=Zp}');
    testPropertyEscapes(/^\P{gc=Paragraph_Separator}+$/u, nonMatchSymbols, '\\P{gc=Paragraph_Separator}');
    testPropertyEscapes(/^\P{gc=Zp}+$/u, nonMatchSymbols, '\\P{gc=Zp}');
    testPropertyEscapes(/^\P{Paragraph_Separator}+$/u, nonMatchSymbols, '\\P{Paragraph_Separator}');
    testPropertyEscapes(/^\P{Zp}+$/u, nonMatchSymbols, '\\P{Zp}');
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