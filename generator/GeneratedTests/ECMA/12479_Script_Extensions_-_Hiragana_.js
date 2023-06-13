try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12343,
            65392,
            127488
        ],
        ranges: [
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
                12336,
                12341
            ],
            [
                12348,
                12349
            ],
            [
                12353,
                12438
            ],
            [
                12441,
                12448
            ],
            [
                12539,
                12540
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
                65438,
                65439
            ],
            [
                110593,
                110878
            ],
            [
                110928,
                110930
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Hiragana}+$/u, matchSymbols, '\\p{Script_Extensions=Hiragana}');
    testPropertyEscapes(/^\p{Script_Extensions=Hira}+$/u, matchSymbols, '\\p{Script_Extensions=Hira}');
    testPropertyEscapes(/^\p{scx=Hiragana}+$/u, matchSymbols, '\\p{scx=Hiragana}');
    testPropertyEscapes(/^\p{scx=Hira}+$/u, matchSymbols, '\\p{scx=Hira}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            12306,
            12342
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12288
            ],
            [
                12292,
                12295
            ],
            [
                12320,
                12335
            ],
            [
                12344,
                12347
            ],
            [
                12350,
                12352
            ],
            [
                12439,
                12440
            ],
            [
                12449,
                12538
            ],
            [
                12541,
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
                65391
            ],
            [
                65393,
                65437
            ],
            [
                65440,
                110592
            ],
            [
                110879,
                110927
            ],
            [
                110931,
                127487
            ],
            [
                127489,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Hiragana}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hiragana}');
    testPropertyEscapes(/^\P{Script_Extensions=Hira}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hira}');
    testPropertyEscapes(/^\P{scx=Hiragana}+$/u, nonMatchSymbols, '\\P{scx=Hiragana}');
    testPropertyEscapes(/^\P{scx=Hira}+$/u, nonMatchSymbols, '\\P{scx=Hira}');
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