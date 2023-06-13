try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                3072,
                3084
            ],
            [
                3086,
                3088
            ],
            [
                3090,
                3112
            ],
            [
                3114,
                3129
            ],
            [
                3133,
                3140
            ],
            [
                3142,
                3144
            ],
            [
                3146,
                3149
            ],
            [
                3157,
                3158
            ],
            [
                3160,
                3162
            ],
            [
                3168,
                3171
            ],
            [
                3174,
                3183
            ],
            [
                3191,
                3199
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Telugu}+$/u, matchSymbols, '\\p{Script=Telugu}');
    testPropertyEscapes(/^\p{Script=Telu}+$/u, matchSymbols, '\\p{Script=Telu}');
    testPropertyEscapes(/^\p{sc=Telugu}+$/u, matchSymbols, '\\p{sc=Telugu}');
    testPropertyEscapes(/^\p{sc=Telu}+$/u, matchSymbols, '\\p{sc=Telu}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3085,
            3089,
            3113,
            3141,
            3145,
            3159
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3071
            ],
            [
                3130,
                3132
            ],
            [
                3150,
                3156
            ],
            [
                3163,
                3167
            ],
            [
                3172,
                3173
            ],
            [
                3184,
                3190
            ],
            [
                3200,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Telugu}+$/u, nonMatchSymbols, '\\P{Script=Telugu}');
    testPropertyEscapes(/^\P{Script=Telu}+$/u, nonMatchSymbols, '\\P{Script=Telu}');
    testPropertyEscapes(/^\P{sc=Telugu}+$/u, nonMatchSymbols, '\\P{sc=Telugu}');
    testPropertyEscapes(/^\P{sc=Telu}+$/u, nonMatchSymbols, '\\P{sc=Telu}');
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