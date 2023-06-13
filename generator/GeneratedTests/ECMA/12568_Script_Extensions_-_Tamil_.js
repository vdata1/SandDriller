try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2972,
            3024,
            3031,
            7386,
            43251,
            70401,
            70403,
            73727
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
                2946,
                2947
            ],
            [
                2949,
                2954
            ],
            [
                2958,
                2960
            ],
            [
                2962,
                2965
            ],
            [
                2969,
                2970
            ],
            [
                2974,
                2975
            ],
            [
                2979,
                2980
            ],
            [
                2984,
                2986
            ],
            [
                2990,
                3001
            ],
            [
                3006,
                3010
            ],
            [
                3014,
                3016
            ],
            [
                3018,
                3021
            ],
            [
                3046,
                3066
            ],
            [
                70459,
                70460
            ],
            [
                73664,
                73713
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tamil}+$/u, matchSymbols, '\\p{Script_Extensions=Tamil}');
    testPropertyEscapes(/^\p{Script_Extensions=Taml}+$/u, matchSymbols, '\\p{Script_Extensions=Taml}');
    testPropertyEscapes(/^\p{scx=Tamil}+$/u, matchSymbols, '\\p{scx=Tamil}');
    testPropertyEscapes(/^\p{scx=Taml}+$/u, matchSymbols, '\\p{scx=Taml}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2948,
            2961,
            2971,
            2973,
            3017,
            70402
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
                2945
            ],
            [
                2955,
                2957
            ],
            [
                2966,
                2968
            ],
            [
                2976,
                2978
            ],
            [
                2981,
                2983
            ],
            [
                2987,
                2989
            ],
            [
                3002,
                3005
            ],
            [
                3011,
                3013
            ],
            [
                3022,
                3023
            ],
            [
                3025,
                3030
            ],
            [
                3032,
                3045
            ],
            [
                3067,
                7385
            ],
            [
                7387,
                43250
            ],
            [
                43252,
                56319
            ],
            [
                57344,
                70400
            ],
            [
                70404,
                70458
            ],
            [
                70461,
                73663
            ],
            [
                73714,
                73726
            ],
            [
                73728,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tamil}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tamil}');
    testPropertyEscapes(/^\P{Script_Extensions=Taml}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Taml}');
    testPropertyEscapes(/^\P{scx=Tamil}+$/u, nonMatchSymbols, '\\P{scx=Tamil}');
    testPropertyEscapes(/^\P{scx=Taml}+$/u, nonMatchSymbols, '\\P{scx=Taml}');
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