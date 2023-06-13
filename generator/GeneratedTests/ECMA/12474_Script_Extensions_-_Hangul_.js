try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12343,
            12539
        ],
        ranges: [
            [
                4352,
                4607
            ],
            [
                12289,
                12291
            ],
            [
                12296,
                12305
            ],
            [
                12307,
                12319
            ],
            [
                12334,
                12336
            ],
            [
                12593,
                12686
            ],
            [
                12800,
                12830
            ],
            [
                12896,
                12926
            ],
            [
                43360,
                43388
            ],
            [
                44032,
                55203
            ],
            [
                55216,
                55238
            ],
            [
                55243,
                55291
            ],
            [
                65093,
                65094
            ],
            [
                65377,
                65381
            ],
            [
                65440,
                65470
            ],
            [
                65474,
                65479
            ],
            [
                65482,
                65487
            ],
            [
                65490,
                65495
            ],
            [
                65498,
                65500
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Hangul}+$/u, matchSymbols, '\\p{Script_Extensions=Hangul}');
    testPropertyEscapes(/^\p{Script_Extensions=Hang}+$/u, matchSymbols, '\\p{Script_Extensions=Hang}');
    testPropertyEscapes(/^\p{scx=Hangul}+$/u, matchSymbols, '\\p{scx=Hangul}');
    testPropertyEscapes(/^\p{scx=Hang}+$/u, matchSymbols, '\\p{scx=Hang}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [12306],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4351
            ],
            [
                4608,
                12288
            ],
            [
                12292,
                12295
            ],
            [
                12320,
                12333
            ],
            [
                12337,
                12342
            ],
            [
                12344,
                12538
            ],
            [
                12540,
                12592
            ],
            [
                12687,
                12799
            ],
            [
                12831,
                12895
            ],
            [
                12927,
                43359
            ],
            [
                43389,
                44031
            ],
            [
                55204,
                55215
            ],
            [
                55239,
                55242
            ],
            [
                55292,
                56319
            ],
            [
                57344,
                65092
            ],
            [
                65095,
                65376
            ],
            [
                65382,
                65439
            ],
            [
                65471,
                65473
            ],
            [
                65480,
                65481
            ],
            [
                65488,
                65489
            ],
            [
                65496,
                65497
            ],
            [
                65501,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Hangul}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hangul}');
    testPropertyEscapes(/^\P{Script_Extensions=Hang}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hang}');
    testPropertyEscapes(/^\P{scx=Hangul}+$/u, nonMatchSymbols, '\\P{scx=Hangul}');
    testPropertyEscapes(/^\P{scx=Hang}+$/u, nonMatchSymbols, '\\P{scx=Hang}');
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