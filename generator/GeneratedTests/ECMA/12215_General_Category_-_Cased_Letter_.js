try {
    const matchSymbols = buildString({
        loneCodePoints: [
            181,
            895,
            902,
            908,
            4295,
            4301,
            8025,
            8027,
            8029,
            8126,
            8450,
            8455,
            8469,
            8484,
            8486,
            8488,
            8505,
            8526,
            11559,
            11565,
            43002,
            119970,
            119995,
            120134
        ],
        ranges: [
            [
                65,
                90
            ],
            [
                97,
                122
            ],
            [
                192,
                214
            ],
            [
                216,
                246
            ],
            [
                248,
                442
            ],
            [
                444,
                447
            ],
            [
                452,
                659
            ],
            [
                661,
                687
            ],
            [
                880,
                883
            ],
            [
                886,
                887
            ],
            [
                891,
                893
            ],
            [
                904,
                906
            ],
            [
                910,
                929
            ],
            [
                931,
                1013
            ],
            [
                1015,
                1153
            ],
            [
                1162,
                1327
            ],
            [
                1329,
                1366
            ],
            [
                1376,
                1416
            ],
            [
                4256,
                4293
            ],
            [
                4304,
                4346
            ],
            [
                4349,
                4351
            ],
            [
                5024,
                5109
            ],
            [
                5112,
                5117
            ],
            [
                7296,
                7304
            ],
            [
                7312,
                7354
            ],
            [
                7357,
                7359
            ],
            [
                7424,
                7467
            ],
            [
                7531,
                7543
            ],
            [
                7545,
                7578
            ],
            [
                7680,
                7957
            ],
            [
                7960,
                7965
            ],
            [
                7968,
                8005
            ],
            [
                8008,
                8013
            ],
            [
                8016,
                8023
            ],
            [
                8031,
                8061
            ],
            [
                8064,
                8116
            ],
            [
                8118,
                8124
            ],
            [
                8130,
                8132
            ],
            [
                8134,
                8140
            ],
            [
                8144,
                8147
            ],
            [
                8150,
                8155
            ],
            [
                8160,
                8172
            ],
            [
                8178,
                8180
            ],
            [
                8182,
                8188
            ],
            [
                8458,
                8467
            ],
            [
                8473,
                8477
            ],
            [
                8490,
                8493
            ],
            [
                8495,
                8500
            ],
            [
                8508,
                8511
            ],
            [
                8517,
                8521
            ],
            [
                8579,
                8580
            ],
            [
                11264,
                11310
            ],
            [
                11312,
                11358
            ],
            [
                11360,
                11387
            ],
            [
                11390,
                11492
            ],
            [
                11499,
                11502
            ],
            [
                11506,
                11507
            ],
            [
                11520,
                11557
            ],
            [
                42560,
                42605
            ],
            [
                42624,
                42651
            ],
            [
                42786,
                42863
            ],
            [
                42865,
                42887
            ],
            [
                42891,
                42894
            ],
            [
                42896,
                42943
            ],
            [
                42946,
                42954
            ],
            [
                42997,
                42998
            ],
            [
                43824,
                43866
            ],
            [
                43872,
                43880
            ],
            [
                43888,
                43967
            ],
            [
                64256,
                64262
            ],
            [
                64275,
                64279
            ],
            [
                65313,
                65338
            ],
            [
                65345,
                65370
            ],
            [
                66560,
                66639
            ],
            [
                66736,
                66771
            ],
            [
                66776,
                66811
            ],
            [
                68736,
                68786
            ],
            [
                68800,
                68850
            ],
            [
                71840,
                71903
            ],
            [
                93760,
                93823
            ],
            [
                119808,
                119892
            ],
            [
                119894,
                119964
            ],
            [
                119966,
                119967
            ],
            [
                119973,
                119974
            ],
            [
                119977,
                119980
            ],
            [
                119982,
                119993
            ],
            [
                119997,
                120003
            ],
            [
                120005,
                120069
            ],
            [
                120071,
                120074
            ],
            [
                120077,
                120084
            ],
            [
                120086,
                120092
            ],
            [
                120094,
                120121
            ],
            [
                120123,
                120126
            ],
            [
                120128,
                120132
            ],
            [
                120138,
                120144
            ],
            [
                120146,
                120485
            ],
            [
                120488,
                120512
            ],
            [
                120514,
                120538
            ],
            [
                120540,
                120570
            ],
            [
                120572,
                120596
            ],
            [
                120598,
                120628
            ],
            [
                120630,
                120654
            ],
            [
                120656,
                120686
            ],
            [
                120688,
                120712
            ],
            [
                120714,
                120744
            ],
            [
                120746,
                120770
            ],
            [
                120772,
                120779
            ],
            [
                125184,
                125251
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Cased_Letter}+$/u, matchSymbols, '\\p{General_Category=Cased_Letter}');
    testPropertyEscapes(/^\p{General_Category=LC}+$/u, matchSymbols, '\\p{General_Category=LC}');
    testPropertyEscapes(/^\p{gc=Cased_Letter}+$/u, matchSymbols, '\\p{gc=Cased_Letter}');
    testPropertyEscapes(/^\p{gc=LC}+$/u, matchSymbols, '\\p{gc=LC}');
    testPropertyEscapes(/^\p{Cased_Letter}+$/u, matchSymbols, '\\p{Cased_Letter}');
    testPropertyEscapes(/^\p{LC}+$/u, matchSymbols, '\\p{LC}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            215,
            247,
            443,
            660,
            894,
            903,
            907,
            909,
            930,
            1014,
            1328,
            4294,
            7544,
            8024,
            8026,
            8028,
            8030,
            8117,
            8125,
            8133,
            8181,
            8468,
            8485,
            8487,
            8489,
            8494,
            11311,
            11359,
            11558,
            42864,
            42895,
            119893,
            119965,
            119981,
            119994,
            119996,
            120004,
            120070,
            120085,
            120093,
            120122,
            120127,
            120133,
            120145,
            120513,
            120539,
            120571,
            120597,
            120629,
            120655,
            120687,
            120713,
            120745,
            120771
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                64
            ],
            [
                91,
                96
            ],
            [
                123,
                180
            ],
            [
                182,
                191
            ],
            [
                448,
                451
            ],
            [
                688,
                879
            ],
            [
                884,
                885
            ],
            [
                888,
                890
            ],
            [
                896,
                901
            ],
            [
                1154,
                1161
            ],
            [
                1367,
                1375
            ],
            [
                1417,
                4255
            ],
            [
                4296,
                4300
            ],
            [
                4302,
                4303
            ],
            [
                4347,
                4348
            ],
            [
                4352,
                5023
            ],
            [
                5110,
                5111
            ],
            [
                5118,
                7295
            ],
            [
                7305,
                7311
            ],
            [
                7355,
                7356
            ],
            [
                7360,
                7423
            ],
            [
                7468,
                7530
            ],
            [
                7579,
                7679
            ],
            [
                7958,
                7959
            ],
            [
                7966,
                7967
            ],
            [
                8006,
                8007
            ],
            [
                8014,
                8015
            ],
            [
                8062,
                8063
            ],
            [
                8127,
                8129
            ],
            [
                8141,
                8143
            ],
            [
                8148,
                8149
            ],
            [
                8156,
                8159
            ],
            [
                8173,
                8177
            ],
            [
                8189,
                8449
            ],
            [
                8451,
                8454
            ],
            [
                8456,
                8457
            ],
            [
                8470,
                8472
            ],
            [
                8478,
                8483
            ],
            [
                8501,
                8504
            ],
            [
                8506,
                8507
            ],
            [
                8512,
                8516
            ],
            [
                8522,
                8525
            ],
            [
                8527,
                8578
            ],
            [
                8581,
                11263
            ],
            [
                11388,
                11389
            ],
            [
                11493,
                11498
            ],
            [
                11503,
                11505
            ],
            [
                11508,
                11519
            ],
            [
                11560,
                11564
            ],
            [
                11566,
                42559
            ],
            [
                42606,
                42623
            ],
            [
                42652,
                42785
            ],
            [
                42888,
                42890
            ],
            [
                42944,
                42945
            ],
            [
                42955,
                42996
            ],
            [
                42999,
                43001
            ],
            [
                43003,
                43823
            ],
            [
                43867,
                43871
            ],
            [
                43881,
                43887
            ],
            [
                43968,
                56319
            ],
            [
                57344,
                64255
            ],
            [
                64263,
                64274
            ],
            [
                64280,
                65312
            ],
            [
                65339,
                65344
            ],
            [
                65371,
                66559
            ],
            [
                66640,
                66735
            ],
            [
                66772,
                66775
            ],
            [
                66812,
                68735
            ],
            [
                68787,
                68799
            ],
            [
                68851,
                71839
            ],
            [
                71904,
                93759
            ],
            [
                93824,
                119807
            ],
            [
                119968,
                119969
            ],
            [
                119971,
                119972
            ],
            [
                119975,
                119976
            ],
            [
                120075,
                120076
            ],
            [
                120135,
                120137
            ],
            [
                120486,
                120487
            ],
            [
                120780,
                125183
            ],
            [
                125252,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Cased_Letter}+$/u, nonMatchSymbols, '\\P{General_Category=Cased_Letter}');
    testPropertyEscapes(/^\P{General_Category=LC}+$/u, nonMatchSymbols, '\\P{General_Category=LC}');
    testPropertyEscapes(/^\P{gc=Cased_Letter}+$/u, nonMatchSymbols, '\\P{gc=Cased_Letter}');
    testPropertyEscapes(/^\P{gc=LC}+$/u, nonMatchSymbols, '\\P{gc=LC}');
    testPropertyEscapes(/^\P{Cased_Letter}+$/u, nonMatchSymbols, '\\P{Cased_Letter}');
    testPropertyEscapes(/^\P{LC}+$/u, nonMatchSymbols, '\\P{LC}');
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