try {
    const matchSymbols = buildString({
        loneCodePoints: [
            187,
            8217,
            8221,
            8250,
            11779,
            11781,
            11786,
            11789,
            11805,
            11809
        ],
        ranges: []
    });
    testPropertyEscapes(/^\p{General_Category=Final_Punctuation}+$/u, matchSymbols, '\\p{General_Category=Final_Punctuation}');
    testPropertyEscapes(/^\p{General_Category=Pf}+$/u, matchSymbols, '\\p{General_Category=Pf}');
    testPropertyEscapes(/^\p{gc=Final_Punctuation}+$/u, matchSymbols, '\\p{gc=Final_Punctuation}');
    testPropertyEscapes(/^\p{gc=Pf}+$/u, matchSymbols, '\\p{gc=Pf}');
    testPropertyEscapes(/^\p{Final_Punctuation}+$/u, matchSymbols, '\\p{Final_Punctuation}');
    testPropertyEscapes(/^\p{Pf}+$/u, matchSymbols, '\\p{Pf}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [11780],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                186
            ],
            [
                188,
                8216
            ],
            [
                8218,
                8220
            ],
            [
                8222,
                8249
            ],
            [
                8251,
                11778
            ],
            [
                11782,
                11785
            ],
            [
                11787,
                11788
            ],
            [
                11790,
                11804
            ],
            [
                11806,
                11808
            ],
            [
                11810,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Final_Punctuation}+$/u, nonMatchSymbols, '\\P{General_Category=Final_Punctuation}');
    testPropertyEscapes(/^\P{General_Category=Pf}+$/u, nonMatchSymbols, '\\P{General_Category=Pf}');
    testPropertyEscapes(/^\P{gc=Final_Punctuation}+$/u, nonMatchSymbols, '\\P{gc=Final_Punctuation}');
    testPropertyEscapes(/^\P{gc=Pf}+$/u, nonMatchSymbols, '\\P{gc=Pf}');
    testPropertyEscapes(/^\P{Final_Punctuation}+$/u, nonMatchSymbols, '\\P{Final_Punctuation}');
    testPropertyEscapes(/^\P{Pf}+$/u, nonMatchSymbols, '\\P{Pf}');
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