try {
    const matchSymbols = buildString({
        loneCodePoints: [
            3294,
            7376,
            7378,
            7386,
            7410,
            7412
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
                3200,
                3212
            ],
            [
                3214,
                3216
            ],
            [
                3218,
                3240
            ],
            [
                3242,
                3251
            ],
            [
                3253,
                3257
            ],
            [
                3260,
                3268
            ],
            [
                3270,
                3272
            ],
            [
                3274,
                3277
            ],
            [
                3285,
                3286
            ],
            [
                3296,
                3299
            ],
            [
                3302,
                3311
            ],
            [
                3313,
                3314
            ],
            [
                43056,
                43061
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Kannada}+$/u, matchSymbols, '\\p{Script_Extensions=Kannada}');
    testPropertyEscapes(/^\p{Script_Extensions=Knda}+$/u, matchSymbols, '\\p{Script_Extensions=Knda}');
    testPropertyEscapes(/^\p{scx=Kannada}+$/u, matchSymbols, '\\p{scx=Kannada}');
    testPropertyEscapes(/^\p{scx=Knda}+$/u, matchSymbols, '\\p{scx=Knda}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3213,
            3217,
            3241,
            3252,
            3269,
            3273,
            3295,
            3312,
            7377,
            7411
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
                3199
            ],
            [
                3258,
                3259
            ],
            [
                3278,
                3284
            ],
            [
                3287,
                3293
            ],
            [
                3300,
                3301
            ],
            [
                3315,
                7375
            ],
            [
                7379,
                7385
            ],
            [
                7387,
                7409
            ],
            [
                7413,
                43055
            ],
            [
                43062,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Kannada}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kannada}');
    testPropertyEscapes(/^\P{Script_Extensions=Knda}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Knda}');
    testPropertyEscapes(/^\P{scx=Kannada}+$/u, nonMatchSymbols, '\\P{scx=Kannada}');
    testPropertyEscapes(/^\P{scx=Knda}+$/u, nonMatchSymbols, '\\P{scx=Knda}');
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