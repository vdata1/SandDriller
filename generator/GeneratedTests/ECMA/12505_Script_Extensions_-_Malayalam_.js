try {
    const matchSymbols = buildString({
        loneCodePoints: [7386],
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
                3328,
                3340
            ],
            [
                3342,
                3344
            ],
            [
                3346,
                3396
            ],
            [
                3398,
                3400
            ],
            [
                3402,
                3407
            ],
            [
                3412,
                3427
            ],
            [
                3430,
                3455
            ],
            [
                43056,
                43058
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Malayalam}+$/u, matchSymbols, '\\p{Script_Extensions=Malayalam}');
    testPropertyEscapes(/^\p{Script_Extensions=Mlym}+$/u, matchSymbols, '\\p{Script_Extensions=Mlym}');
    testPropertyEscapes(/^\p{scx=Malayalam}+$/u, matchSymbols, '\\p{scx=Malayalam}');
    testPropertyEscapes(/^\p{scx=Mlym}+$/u, matchSymbols, '\\p{scx=Mlym}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3341,
            3345,
            3397,
            3401
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
                3327
            ],
            [
                3408,
                3411
            ],
            [
                3428,
                3429
            ],
            [
                3456,
                7385
            ],
            [
                7387,
                43055
            ],
            [
                43059,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Malayalam}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Malayalam}');
    testPropertyEscapes(/^\P{Script_Extensions=Mlym}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mlym}');
    testPropertyEscapes(/^\P{scx=Malayalam}+$/u, nonMatchSymbols, '\\P{scx=Malayalam}');
    testPropertyEscapes(/^\P{scx=Mlym}+$/u, nonMatchSymbols, '\\P{scx=Mlym}');
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