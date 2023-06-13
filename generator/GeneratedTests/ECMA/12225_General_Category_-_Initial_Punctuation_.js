try {
    const matchSymbols = buildString({
        loneCodePoints: [
            171,
            8216,
            8223,
            8249,
            11778,
            11780,
            11785,
            11788,
            11804,
            11808
        ],
        ranges: [[
                8219,
                8220
            ]]
    });
    testPropertyEscapes(/^\p{General_Category=Initial_Punctuation}+$/u, matchSymbols, '\\p{General_Category=Initial_Punctuation}');
    testPropertyEscapes(/^\p{General_Category=Pi}+$/u, matchSymbols, '\\p{General_Category=Pi}');
    testPropertyEscapes(/^\p{gc=Initial_Punctuation}+$/u, matchSymbols, '\\p{gc=Initial_Punctuation}');
    testPropertyEscapes(/^\p{gc=Pi}+$/u, matchSymbols, '\\p{gc=Pi}');
    testPropertyEscapes(/^\p{Initial_Punctuation}+$/u, matchSymbols, '\\p{Initial_Punctuation}');
    testPropertyEscapes(/^\p{Pi}+$/u, matchSymbols, '\\p{Pi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [11779],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                170
            ],
            [
                172,
                8215
            ],
            [
                8217,
                8218
            ],
            [
                8221,
                8222
            ],
            [
                8224,
                8248
            ],
            [
                8250,
                11777
            ],
            [
                11781,
                11784
            ],
            [
                11786,
                11787
            ],
            [
                11789,
                11803
            ],
            [
                11805,
                11807
            ],
            [
                11809,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Initial_Punctuation}+$/u, nonMatchSymbols, '\\P{General_Category=Initial_Punctuation}');
    testPropertyEscapes(/^\P{General_Category=Pi}+$/u, nonMatchSymbols, '\\P{General_Category=Pi}');
    testPropertyEscapes(/^\P{gc=Initial_Punctuation}+$/u, nonMatchSymbols, '\\P{gc=Initial_Punctuation}');
    testPropertyEscapes(/^\P{gc=Pi}+$/u, nonMatchSymbols, '\\P{gc=Pi}');
    testPropertyEscapes(/^\P{Initial_Punctuation}+$/u, nonMatchSymbols, '\\P{Initial_Punctuation}');
    testPropertyEscapes(/^\P{Pi}+$/u, nonMatchSymbols, '\\P{Pi}');
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