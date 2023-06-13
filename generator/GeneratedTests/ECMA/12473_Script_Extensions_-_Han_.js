try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12336,
            12539,
            13055
        ],
        ranges: [
            [
                11904,
                11929
            ],
            [
                11931,
                12019
            ],
            [
                12032,
                12245
            ],
            [
                12289,
                12291
            ],
            [
                12293,
                12305
            ],
            [
                12307,
                12319
            ],
            [
                12321,
                12333
            ],
            [
                12343,
                12351
            ],
            [
                12688,
                12703
            ],
            [
                12736,
                12771
            ],
            [
                12832,
                12871
            ],
            [
                12928,
                12976
            ],
            [
                12992,
                13003
            ],
            [
                13144,
                13168
            ],
            [
                13179,
                13183
            ],
            [
                13280,
                13310
            ],
            [
                13312,
                19903
            ],
            [
                19968,
                40956
            ],
            [
                42752,
                42759
            ],
            [
                63744,
                64109
            ],
            [
                64112,
                64217
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
                94192,
                94193
            ],
            [
                119648,
                119665
            ],
            [
                127568,
                127569
            ],
            [
                131072,
                173789
            ],
            [
                173824,
                177972
            ],
            [
                177984,
                178205
            ],
            [
                178208,
                183969
            ],
            [
                183984,
                191456
            ],
            [
                194560,
                195101
            ],
            [
                196608,
                201546
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Han}+$/u, matchSymbols, '\\p{Script_Extensions=Han}');
    testPropertyEscapes(/^\p{Script_Extensions=Hani}+$/u, matchSymbols, '\\p{Script_Extensions=Hani}');
    testPropertyEscapes(/^\p{scx=Han}+$/u, matchSymbols, '\\p{scx=Han}');
    testPropertyEscapes(/^\p{scx=Hani}+$/u, matchSymbols, '\\p{scx=Hani}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            11930,
            12292,
            12306,
            12320,
            13311
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                11903
            ],
            [
                12020,
                12031
            ],
            [
                12246,
                12288
            ],
            [
                12334,
                12335
            ],
            [
                12337,
                12342
            ],
            [
                12352,
                12538
            ],
            [
                12540,
                12687
            ],
            [
                12704,
                12735
            ],
            [
                12772,
                12831
            ],
            [
                12872,
                12927
            ],
            [
                12977,
                12991
            ],
            [
                13004,
                13054
            ],
            [
                13056,
                13143
            ],
            [
                13169,
                13178
            ],
            [
                13184,
                13279
            ],
            [
                19904,
                19967
            ],
            [
                40957,
                42751
            ],
            [
                42760,
                56319
            ],
            [
                57344,
                63743
            ],
            [
                64110,
                64111
            ],
            [
                64218,
                65092
            ],
            [
                65095,
                65376
            ],
            [
                65382,
                94191
            ],
            [
                94194,
                119647
            ],
            [
                119666,
                127567
            ],
            [
                127570,
                131071
            ],
            [
                173790,
                173823
            ],
            [
                177973,
                177983
            ],
            [
                178206,
                178207
            ],
            [
                183970,
                183983
            ],
            [
                191457,
                194559
            ],
            [
                195102,
                196607
            ],
            [
                201547,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Han}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Han}');
    testPropertyEscapes(/^\P{Script_Extensions=Hani}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hani}');
    testPropertyEscapes(/^\P{scx=Han}+$/u, nonMatchSymbols, '\\P{scx=Han}');
    testPropertyEscapes(/^\P{scx=Hani}+$/u, nonMatchSymbols, '\\P{scx=Hani}');
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