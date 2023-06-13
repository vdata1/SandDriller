try {
    const matchSymbols = buildString({
        loneCodePoints: [
            7376,
            8432,
            70480,
            70487,
            73683
        ],
        ranges: [
            [
                2385,
                2386
            ],
            [
                2404,
                2405
            ],
            [
                3046,
                3059
            ],
            [
                7378,
                7379
            ],
            [
                7410,
                7412
            ],
            [
                7416,
                7417
            ],
            [
                70400,
                70403
            ],
            [
                70405,
                70412
            ],
            [
                70415,
                70416
            ],
            [
                70419,
                70440
            ],
            [
                70442,
                70448
            ],
            [
                70450,
                70451
            ],
            [
                70453,
                70457
            ],
            [
                70459,
                70468
            ],
            [
                70471,
                70472
            ],
            [
                70475,
                70477
            ],
            [
                70493,
                70499
            ],
            [
                70502,
                70508
            ],
            [
                70512,
                70516
            ],
            [
                73680,
                73681
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Grantha}+$/u, matchSymbols, '\\p{Script_Extensions=Grantha}');
    testPropertyEscapes(/^\p{Script_Extensions=Gran}+$/u, matchSymbols, '\\p{Script_Extensions=Gran}');
    testPropertyEscapes(/^\p{scx=Grantha}+$/u, matchSymbols, '\\p{scx=Grantha}');
    testPropertyEscapes(/^\p{scx=Gran}+$/u, matchSymbols, '\\p{scx=Gran}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            7377,
            70404,
            70441,
            70449,
            70452,
            70458,
            73682
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2384
            ],
            [
                2387,
                2403
            ],
            [
                2406,
                3045
            ],
            [
                3060,
                7375
            ],
            [
                7380,
                7409
            ],
            [
                7413,
                7415
            ],
            [
                7418,
                8431
            ],
            [
                8433,
                56319
            ],
            [
                57344,
                70399
            ],
            [
                70413,
                70414
            ],
            [
                70417,
                70418
            ],
            [
                70469,
                70470
            ],
            [
                70473,
                70474
            ],
            [
                70478,
                70479
            ],
            [
                70481,
                70486
            ],
            [
                70488,
                70492
            ],
            [
                70500,
                70501
            ],
            [
                70509,
                70511
            ],
            [
                70517,
                73679
            ],
            [
                73684,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Grantha}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Grantha}');
    testPropertyEscapes(/^\P{Script_Extensions=Gran}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Gran}');
    testPropertyEscapes(/^\P{scx=Grantha}+$/u, nonMatchSymbols, '\\P{scx=Grantha}');
    testPropertyEscapes(/^\P{scx=Gran}+$/u, nonMatchSymbols, '\\P{scx=Gran}');
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