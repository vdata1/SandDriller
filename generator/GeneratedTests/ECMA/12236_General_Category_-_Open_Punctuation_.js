try {
    const matchSymbols = buildString({
        loneCodePoints: [
            40,
            91,
            123,
            3898,
            3900,
            5787,
            8218,
            8222,
            8261,
            8317,
            8333,
            8968,
            8970,
            9001,
            10088,
            10090,
            10092,
            10094,
            10096,
            10098,
            10100,
            10181,
            10214,
            10216,
            10218,
            10220,
            10222,
            10627,
            10629,
            10631,
            10633,
            10635,
            10637,
            10639,
            10641,
            10643,
            10645,
            10647,
            10712,
            10714,
            10748,
            11810,
            11812,
            11814,
            11816,
            11842,
            12296,
            12298,
            12300,
            12302,
            12304,
            12308,
            12310,
            12312,
            12314,
            12317,
            64831,
            65047,
            65077,
            65079,
            65081,
            65083,
            65085,
            65087,
            65089,
            65091,
            65095,
            65113,
            65115,
            65117,
            65288,
            65339,
            65371,
            65375,
            65378
        ],
        ranges: []
    });
    testPropertyEscapes(/^\p{General_Category=Open_Punctuation}+$/u, matchSymbols, '\\p{General_Category=Open_Punctuation}');
    testPropertyEscapes(/^\p{General_Category=Ps}+$/u, matchSymbols, '\\p{General_Category=Ps}');
    testPropertyEscapes(/^\p{gc=Open_Punctuation}+$/u, matchSymbols, '\\p{gc=Open_Punctuation}');
    testPropertyEscapes(/^\p{gc=Ps}+$/u, matchSymbols, '\\p{gc=Ps}');
    testPropertyEscapes(/^\p{Open_Punctuation}+$/u, matchSymbols, '\\p{Open_Punctuation}');
    testPropertyEscapes(/^\p{Ps}+$/u, matchSymbols, '\\p{Ps}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3899,
            8969,
            10089,
            10091,
            10093,
            10095,
            10097,
            10099,
            10215,
            10217,
            10219,
            10221,
            10628,
            10630,
            10632,
            10634,
            10636,
            10638,
            10640,
            10642,
            10644,
            10646,
            10713,
            11811,
            11813,
            11815,
            12297,
            12299,
            12301,
            12303,
            12309,
            12311,
            12313,
            65078,
            65080,
            65082,
            65084,
            65086,
            65088,
            65090,
            65114,
            65116
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                39
            ],
            [
                41,
                90
            ],
            [
                92,
                122
            ],
            [
                124,
                3897
            ],
            [
                3901,
                5786
            ],
            [
                5788,
                8217
            ],
            [
                8219,
                8221
            ],
            [
                8223,
                8260
            ],
            [
                8262,
                8316
            ],
            [
                8318,
                8332
            ],
            [
                8334,
                8967
            ],
            [
                8971,
                9000
            ],
            [
                9002,
                10087
            ],
            [
                10101,
                10180
            ],
            [
                10182,
                10213
            ],
            [
                10223,
                10626
            ],
            [
                10648,
                10711
            ],
            [
                10715,
                10747
            ],
            [
                10749,
                11809
            ],
            [
                11817,
                11841
            ],
            [
                11843,
                12295
            ],
            [
                12305,
                12307
            ],
            [
                12315,
                12316
            ],
            [
                12318,
                56319
            ],
            [
                57344,
                64830
            ],
            [
                64832,
                65046
            ],
            [
                65048,
                65076
            ],
            [
                65092,
                65094
            ],
            [
                65096,
                65112
            ],
            [
                65118,
                65287
            ],
            [
                65289,
                65338
            ],
            [
                65340,
                65370
            ],
            [
                65372,
                65374
            ],
            [
                65376,
                65377
            ],
            [
                65379,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Open_Punctuation}+$/u, nonMatchSymbols, '\\P{General_Category=Open_Punctuation}');
    testPropertyEscapes(/^\P{General_Category=Ps}+$/u, nonMatchSymbols, '\\P{General_Category=Ps}');
    testPropertyEscapes(/^\P{gc=Open_Punctuation}+$/u, nonMatchSymbols, '\\P{gc=Open_Punctuation}');
    testPropertyEscapes(/^\P{gc=Ps}+$/u, nonMatchSymbols, '\\P{gc=Ps}');
    testPropertyEscapes(/^\P{Open_Punctuation}+$/u, nonMatchSymbols, '\\P{Open_Punctuation}');
    testPropertyEscapes(/^\P{Ps}+$/u, nonMatchSymbols, '\\P{Ps}');
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