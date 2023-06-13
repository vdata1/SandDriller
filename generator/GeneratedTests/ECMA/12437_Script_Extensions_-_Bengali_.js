try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2482,
            2519,
            7376,
            7378,
            7384,
            7393,
            7402,
            7405,
            7410,
            43249
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
                2432,
                2435
            ],
            [
                2437,
                2444
            ],
            [
                2447,
                2448
            ],
            [
                2451,
                2472
            ],
            [
                2474,
                2480
            ],
            [
                2486,
                2489
            ],
            [
                2492,
                2500
            ],
            [
                2503,
                2504
            ],
            [
                2507,
                2510
            ],
            [
                2524,
                2525
            ],
            [
                2527,
                2531
            ],
            [
                2534,
                2558
            ],
            [
                7381,
                7382
            ],
            [
                7413,
                7415
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Bengali}+$/u, matchSymbols, '\\p{Script_Extensions=Bengali}');
    testPropertyEscapes(/^\p{Script_Extensions=Beng}+$/u, matchSymbols, '\\p{Script_Extensions=Beng}');
    testPropertyEscapes(/^\p{scx=Bengali}+$/u, matchSymbols, '\\p{scx=Bengali}');
    testPropertyEscapes(/^\p{scx=Beng}+$/u, matchSymbols, '\\p{scx=Beng}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2436,
            2473,
            2481,
            2526,
            7377,
            7383
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
                2431
            ],
            [
                2445,
                2446
            ],
            [
                2449,
                2450
            ],
            [
                2483,
                2485
            ],
            [
                2490,
                2491
            ],
            [
                2501,
                2502
            ],
            [
                2505,
                2506
            ],
            [
                2511,
                2518
            ],
            [
                2520,
                2523
            ],
            [
                2532,
                2533
            ],
            [
                2559,
                7375
            ],
            [
                7379,
                7380
            ],
            [
                7385,
                7392
            ],
            [
                7394,
                7401
            ],
            [
                7403,
                7404
            ],
            [
                7406,
                7409
            ],
            [
                7411,
                7412
            ],
            [
                7416,
                43248
            ],
            [
                43250,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Bengali}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bengali}');
    testPropertyEscapes(/^\P{Script_Extensions=Beng}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Beng}');
    testPropertyEscapes(/^\P{scx=Bengali}+$/u, nonMatchSymbols, '\\P{scx=Bengali}');
    testPropertyEscapes(/^\P{scx=Beng}+$/u, nonMatchSymbols, '\\P{scx=Beng}');
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