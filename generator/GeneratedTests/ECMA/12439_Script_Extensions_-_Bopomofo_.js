try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12336,
            12343,
            12539
        ],
        ranges: [
            [
                746,
                747
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
                12330,
                12333
            ],
            [
                12549,
                12591
            ],
            [
                12704,
                12735
            ],
            [
                65093,
                65094
            ],
            [
                65377,
                65381
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Bopomofo}+$/u, matchSymbols, '\\p{Script_Extensions=Bopomofo}');
    testPropertyEscapes(/^\p{Script_Extensions=Bopo}+$/u, matchSymbols, '\\p{Script_Extensions=Bopo}');
    testPropertyEscapes(/^\p{scx=Bopomofo}+$/u, matchSymbols, '\\p{scx=Bopomofo}');
    testPropertyEscapes(/^\p{scx=Bopo}+$/u, matchSymbols, '\\p{scx=Bopo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [12306],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                745
            ],
            [
                748,
                12288
            ],
            [
                12292,
                12295
            ],
            [
                12320,
                12329
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
                12344,
                12538
            ],
            [
                12540,
                12548
            ],
            [
                12592,
                12703
            ],
            [
                12736,
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
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Bopomofo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bopomofo}');
    testPropertyEscapes(/^\P{Script_Extensions=Bopo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bopo}');
    testPropertyEscapes(/^\P{scx=Bopomofo}+$/u, nonMatchSymbols, '\\P{scx=Bopomofo}');
    testPropertyEscapes(/^\P{scx=Bopo}+$/u, nonMatchSymbols, '\\P{scx=Bopo}');
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