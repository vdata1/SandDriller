try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
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
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Malayalam}+$/u, matchSymbols, '\\p{Script=Malayalam}');
    testPropertyEscapes(/^\p{Script=Mlym}+$/u, matchSymbols, '\\p{Script=Mlym}');
    testPropertyEscapes(/^\p{sc=Malayalam}+$/u, matchSymbols, '\\p{sc=Malayalam}');
    testPropertyEscapes(/^\p{sc=Mlym}+$/u, matchSymbols, '\\p{sc=Mlym}');
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
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Malayalam}+$/u, nonMatchSymbols, '\\P{Script=Malayalam}');
    testPropertyEscapes(/^\P{Script=Mlym}+$/u, nonMatchSymbols, '\\P{Script=Mlym}');
    testPropertyEscapes(/^\P{sc=Malayalam}+$/u, nonMatchSymbols, '\\P{sc=Malayalam}');
    testPropertyEscapes(/^\P{sc=Mlym}+$/u, nonMatchSymbols, '\\P{sc=Mlym}');
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