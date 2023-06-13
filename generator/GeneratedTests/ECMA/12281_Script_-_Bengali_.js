try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2482,
            2519
        ],
        ranges: [
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
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Bengali}+$/u, matchSymbols, '\\p{Script=Bengali}');
    testPropertyEscapes(/^\p{Script=Beng}+$/u, matchSymbols, '\\p{Script=Beng}');
    testPropertyEscapes(/^\p{sc=Bengali}+$/u, matchSymbols, '\\p{sc=Bengali}');
    testPropertyEscapes(/^\p{sc=Beng}+$/u, matchSymbols, '\\p{sc=Beng}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2436,
            2473,
            2481,
            2526
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
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
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Bengali}+$/u, nonMatchSymbols, '\\P{Script=Bengali}');
    testPropertyEscapes(/^\P{Script=Beng}+$/u, nonMatchSymbols, '\\P{Script=Beng}');
    testPropertyEscapes(/^\P{sc=Bengali}+$/u, nonMatchSymbols, '\\P{sc=Bengali}');
    testPropertyEscapes(/^\P{sc=Beng}+$/u, nonMatchSymbols, '\\P{sc=Beng}');
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