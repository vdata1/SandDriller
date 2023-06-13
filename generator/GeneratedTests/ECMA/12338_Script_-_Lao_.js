try {
    const matchSymbols = buildString({
        loneCodePoints: [
            3716,
            3749,
            3782
        ],
        ranges: [
            [
                3713,
                3714
            ],
            [
                3718,
                3722
            ],
            [
                3724,
                3747
            ],
            [
                3751,
                3773
            ],
            [
                3776,
                3780
            ],
            [
                3784,
                3789
            ],
            [
                3792,
                3801
            ],
            [
                3804,
                3807
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Lao}+$/u, matchSymbols, '\\p{Script=Lao}');
    testPropertyEscapes(/^\p{Script=Laoo}+$/u, matchSymbols, '\\p{Script=Laoo}');
    testPropertyEscapes(/^\p{sc=Lao}+$/u, matchSymbols, '\\p{sc=Lao}');
    testPropertyEscapes(/^\p{sc=Laoo}+$/u, matchSymbols, '\\p{sc=Laoo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3715,
            3717,
            3723,
            3748,
            3750,
            3781,
            3783
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3712
            ],
            [
                3774,
                3775
            ],
            [
                3790,
                3791
            ],
            [
                3802,
                3803
            ],
            [
                3808,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Lao}+$/u, nonMatchSymbols, '\\P{Script=Lao}');
    testPropertyEscapes(/^\P{Script=Laoo}+$/u, nonMatchSymbols, '\\P{Script=Laoo}');
    testPropertyEscapes(/^\P{sc=Lao}+$/u, nonMatchSymbols, '\\P{sc=Lao}');
    testPropertyEscapes(/^\P{sc=Laoo}+$/u, nonMatchSymbols, '\\P{sc=Laoo}');
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