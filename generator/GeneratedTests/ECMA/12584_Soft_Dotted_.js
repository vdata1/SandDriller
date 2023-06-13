try {
    const matchSymbols = buildString({
        loneCodePoints: [
            303,
            585,
            616,
            669,
            690,
            1011,
            1110,
            1112,
            7522,
            7574,
            7588,
            7592,
            7725,
            7883,
            8305,
            11388
        ],
        ranges: [
            [
                105,
                106
            ],
            [
                8520,
                8521
            ],
            [
                119842,
                119843
            ],
            [
                119894,
                119895
            ],
            [
                119946,
                119947
            ],
            [
                119998,
                119999
            ],
            [
                120050,
                120051
            ],
            [
                120102,
                120103
            ],
            [
                120154,
                120155
            ],
            [
                120206,
                120207
            ],
            [
                120258,
                120259
            ],
            [
                120310,
                120311
            ],
            [
                120362,
                120363
            ],
            [
                120414,
                120415
            ],
            [
                120466,
                120467
            ]
        ]
    });
    testPropertyEscapes(/^\p{Soft_Dotted}+$/u, matchSymbols, '\\p{Soft_Dotted}');
    testPropertyEscapes(/^\p{SD}+$/u, matchSymbols, '\\p{SD}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [1111],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                104
            ],
            [
                107,
                302
            ],
            [
                304,
                584
            ],
            [
                586,
                615
            ],
            [
                617,
                668
            ],
            [
                670,
                689
            ],
            [
                691,
                1010
            ],
            [
                1012,
                1109
            ],
            [
                1113,
                7521
            ],
            [
                7523,
                7573
            ],
            [
                7575,
                7587
            ],
            [
                7589,
                7591
            ],
            [
                7593,
                7724
            ],
            [
                7726,
                7882
            ],
            [
                7884,
                8304
            ],
            [
                8306,
                8519
            ],
            [
                8522,
                11387
            ],
            [
                11389,
                56319
            ],
            [
                57344,
                119841
            ],
            [
                119844,
                119893
            ],
            [
                119896,
                119945
            ],
            [
                119948,
                119997
            ],
            [
                120000,
                120049
            ],
            [
                120052,
                120101
            ],
            [
                120104,
                120153
            ],
            [
                120156,
                120205
            ],
            [
                120208,
                120257
            ],
            [
                120260,
                120309
            ],
            [
                120312,
                120361
            ],
            [
                120364,
                120413
            ],
            [
                120416,
                120465
            ],
            [
                120468,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Soft_Dotted}+$/u, nonMatchSymbols, '\\P{Soft_Dotted}');
    testPropertyEscapes(/^\P{SD}+$/u, nonMatchSymbols, '\\P{SD}');
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