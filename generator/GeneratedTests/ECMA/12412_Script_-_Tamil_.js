try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2972,
            3024,
            3031,
            73727
        ],
        ranges: [
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
                73664,
                73713
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tamil}+$/u, matchSymbols, '\\p{Script=Tamil}');
    testPropertyEscapes(/^\p{Script=Taml}+$/u, matchSymbols, '\\p{Script=Taml}');
    testPropertyEscapes(/^\p{sc=Tamil}+$/u, matchSymbols, '\\p{sc=Tamil}');
    testPropertyEscapes(/^\p{sc=Taml}+$/u, matchSymbols, '\\p{sc=Taml}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2948,
            2961,
            2971,
            2973,
            3017
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
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
                56319
            ],
            [
                57344,
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
    testPropertyEscapes(/^\P{Script=Tamil}+$/u, nonMatchSymbols, '\\P{Script=Tamil}');
    testPropertyEscapes(/^\P{Script=Taml}+$/u, nonMatchSymbols, '\\P{Script=Taml}');
    testPropertyEscapes(/^\P{sc=Tamil}+$/u, nonMatchSymbols, '\\P{sc=Tamil}');
    testPropertyEscapes(/^\P{sc=Taml}+$/u, nonMatchSymbols, '\\P{sc=Taml}');
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