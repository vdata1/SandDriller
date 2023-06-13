try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12343,
            110592
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
                12441,
                12444
            ],
            [
                12448,
                12543
            ],
            [
                12784,
                12799
            ],
            [
                13008,
                13054
            ],
            [
                13056,
                13143
            ],
            [
                65093,
                65094
            ],
            [
                65377,
                65439
            ],
            [
                110948,
                110951
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Katakana}+$/u, matchSymbols, '\\p{Script_Extensions=Katakana}');
    testPropertyEscapes(/^\p{Script_Extensions=Kana}+$/u, matchSymbols, '\\p{Script_Extensions=Kana}');
    testPropertyEscapes(/^\p{scx=Katakana}+$/u, matchSymbols, '\\p{scx=Katakana}');
    testPropertyEscapes(/^\p{scx=Kana}+$/u, matchSymbols, '\\p{scx=Kana}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            12306,
            12342,
            13055
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
                12440
            ],
            [
                12445,
                12447
            ],
            [
                12544,
                12783
            ],
            [
                12800,
                13007
            ],
            [
                13144,
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
                65440,
                110591
            ],
            [
                110593,
                110947
            ],
            [
                110952,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Katakana}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Katakana}');
    testPropertyEscapes(/^\P{Script_Extensions=Kana}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kana}');
    testPropertyEscapes(/^\P{scx=Katakana}+$/u, nonMatchSymbols, '\\P{scx=Katakana}');
    testPropertyEscapes(/^\P{scx=Kana}+$/u, nonMatchSymbols, '\\P{scx=Kana}');
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