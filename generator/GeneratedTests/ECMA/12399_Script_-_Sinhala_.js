try {
    const matchSymbols = buildString({
        loneCodePoints: [
            3517,
            3530,
            3542
        ],
        ranges: [
            [
                3457,
                3459
            ],
            [
                3461,
                3478
            ],
            [
                3482,
                3505
            ],
            [
                3507,
                3515
            ],
            [
                3520,
                3526
            ],
            [
                3535,
                3540
            ],
            [
                3544,
                3551
            ],
            [
                3558,
                3567
            ],
            [
                3570,
                3572
            ],
            [
                70113,
                70132
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Sinhala}+$/u, matchSymbols, '\\p{Script=Sinhala}');
    testPropertyEscapes(/^\p{Script=Sinh}+$/u, matchSymbols, '\\p{Script=Sinh}');
    testPropertyEscapes(/^\p{sc=Sinhala}+$/u, matchSymbols, '\\p{sc=Sinhala}');
    testPropertyEscapes(/^\p{sc=Sinh}+$/u, matchSymbols, '\\p{sc=Sinh}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3460,
            3506,
            3516,
            3541,
            3543
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3456
            ],
            [
                3479,
                3481
            ],
            [
                3518,
                3519
            ],
            [
                3527,
                3529
            ],
            [
                3531,
                3534
            ],
            [
                3552,
                3557
            ],
            [
                3568,
                3569
            ],
            [
                3573,
                56319
            ],
            [
                57344,
                70112
            ],
            [
                70133,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Sinhala}+$/u, nonMatchSymbols, '\\P{Script=Sinhala}');
    testPropertyEscapes(/^\P{Script=Sinh}+$/u, nonMatchSymbols, '\\P{Script=Sinh}');
    testPropertyEscapes(/^\P{sc=Sinhala}+$/u, nonMatchSymbols, '\\P{sc=Sinhala}');
    testPropertyEscapes(/^\P{sc=Sinh}+$/u, nonMatchSymbols, '\\P{sc=Sinh}');
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