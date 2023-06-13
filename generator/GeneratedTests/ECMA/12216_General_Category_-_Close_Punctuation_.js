try {
    const matchSymbols = buildString({
        loneCodePoints: [
            41,
            93,
            125,
            3899,
            3901,
            5788,
            8262,
            8318,
            8334,
            8969,
            8971,
            9002,
            10089,
            10091,
            10093,
            10095,
            10097,
            10099,
            10101,
            10182,
            10215,
            10217,
            10219,
            10221,
            10223,
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
            10648,
            10713,
            10715,
            10749,
            11811,
            11813,
            11815,
            11817,
            12297,
            12299,
            12301,
            12303,
            12305,
            12309,
            12311,
            12313,
            12315,
            64830,
            65048,
            65078,
            65080,
            65082,
            65084,
            65086,
            65088,
            65090,
            65092,
            65096,
            65114,
            65116,
            65118,
            65289,
            65341,
            65373,
            65376,
            65379
        ],
        ranges: [[
                12318,
                12319
            ]]
    });
    testPropertyEscapes(/^\p{General_Category=Close_Punctuation}+$/u, matchSymbols, '\\p{General_Category=Close_Punctuation}');
    testPropertyEscapes(/^\p{General_Category=Pe}+$/u, matchSymbols, '\\p{General_Category=Pe}');
    testPropertyEscapes(/^\p{gc=Close_Punctuation}+$/u, matchSymbols, '\\p{gc=Close_Punctuation}');
    testPropertyEscapes(/^\p{gc=Pe}+$/u, matchSymbols, '\\p{gc=Pe}');
    testPropertyEscapes(/^\p{Close_Punctuation}+$/u, matchSymbols, '\\p{Close_Punctuation}');
    testPropertyEscapes(/^\p{Pe}+$/u, matchSymbols, '\\p{Pe}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3900,
            8970,
            10090,
            10092,
            10094,
            10096,
            10098,
            10100,
            10216,
            10218,
            10220,
            10222,
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
            10714,
            11812,
            11814,
            11816,
            12298,
            12300,
            12302,
            12304,
            12310,
            12312,
            12314,
            65079,
            65081,
            65083,
            65085,
            65087,
            65089,
            65091,
            65115,
            65117
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                40
            ],
            [
                42,
                92
            ],
            [
                94,
                124
            ],
            [
                126,
                3898
            ],
            [
                3902,
                5787
            ],
            [
                5789,
                8261
            ],
            [
                8263,
                8317
            ],
            [
                8319,
                8333
            ],
            [
                8335,
                8968
            ],
            [
                8972,
                9001
            ],
            [
                9003,
                10088
            ],
            [
                10102,
                10181
            ],
            [
                10183,
                10214
            ],
            [
                10224,
                10627
            ],
            [
                10649,
                10712
            ],
            [
                10716,
                10748
            ],
            [
                10750,
                11810
            ],
            [
                11818,
                12296
            ],
            [
                12306,
                12308
            ],
            [
                12316,
                12317
            ],
            [
                12320,
                56319
            ],
            [
                57344,
                64829
            ],
            [
                64831,
                65047
            ],
            [
                65049,
                65077
            ],
            [
                65093,
                65095
            ],
            [
                65097,
                65113
            ],
            [
                65119,
                65288
            ],
            [
                65290,
                65340
            ],
            [
                65342,
                65372
            ],
            [
                65374,
                65375
            ],
            [
                65377,
                65378
            ],
            [
                65380,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Close_Punctuation}+$/u, nonMatchSymbols, '\\P{General_Category=Close_Punctuation}');
    testPropertyEscapes(/^\P{General_Category=Pe}+$/u, nonMatchSymbols, '\\P{General_Category=Pe}');
    testPropertyEscapes(/^\P{gc=Close_Punctuation}+$/u, nonMatchSymbols, '\\P{gc=Close_Punctuation}');
    testPropertyEscapes(/^\P{gc=Pe}+$/u, nonMatchSymbols, '\\P{gc=Pe}');
    testPropertyEscapes(/^\P{Close_Punctuation}+$/u, nonMatchSymbols, '\\P{Close_Punctuation}');
    testPropertyEscapes(/^\P{Pe}+$/u, nonMatchSymbols, '\\P{Pe}');
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