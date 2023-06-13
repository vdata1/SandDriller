try {
    const matchSymbols = buildString({
        loneCodePoints: [
            173,
            1564,
            1757,
            1807,
            2274,
            6158,
            65279,
            69821,
            69837,
            917505
        ],
        ranges: [
            [
                1536,
                1541
            ],
            [
                8203,
                8207
            ],
            [
                8234,
                8238
            ],
            [
                8288,
                8292
            ],
            [
                8294,
                8303
            ],
            [
                65529,
                65531
            ],
            [
                78896,
                78904
            ],
            [
                113824,
                113827
            ],
            [
                119155,
                119162
            ],
            [
                917536,
                917631
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Format}+$/u, matchSymbols, '\\p{General_Category=Format}');
    testPropertyEscapes(/^\p{General_Category=Cf}+$/u, matchSymbols, '\\p{General_Category=Cf}');
    testPropertyEscapes(/^\p{gc=Format}+$/u, matchSymbols, '\\p{gc=Format}');
    testPropertyEscapes(/^\p{gc=Cf}+$/u, matchSymbols, '\\p{gc=Cf}');
    testPropertyEscapes(/^\p{Format}+$/u, matchSymbols, '\\p{Format}');
    testPropertyEscapes(/^\p{Cf}+$/u, matchSymbols, '\\p{Cf}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [8293],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                172
            ],
            [
                174,
                1535
            ],
            [
                1542,
                1563
            ],
            [
                1565,
                1756
            ],
            [
                1758,
                1806
            ],
            [
                1808,
                2273
            ],
            [
                2275,
                6157
            ],
            [
                6159,
                8202
            ],
            [
                8208,
                8233
            ],
            [
                8239,
                8287
            ],
            [
                8304,
                56319
            ],
            [
                57344,
                65278
            ],
            [
                65280,
                65528
            ],
            [
                65532,
                69820
            ],
            [
                69822,
                69836
            ],
            [
                69838,
                78895
            ],
            [
                78905,
                113823
            ],
            [
                113828,
                119154
            ],
            [
                119163,
                917504
            ],
            [
                917506,
                917535
            ],
            [
                917632,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Format}+$/u, nonMatchSymbols, '\\P{General_Category=Format}');
    testPropertyEscapes(/^\P{General_Category=Cf}+$/u, nonMatchSymbols, '\\P{General_Category=Cf}');
    testPropertyEscapes(/^\P{gc=Format}+$/u, nonMatchSymbols, '\\P{gc=Format}');
    testPropertyEscapes(/^\P{gc=Cf}+$/u, nonMatchSymbols, '\\P{gc=Cf}');
    testPropertyEscapes(/^\P{Format}+$/u, nonMatchSymbols, '\\P{Format}');
    testPropertyEscapes(/^\P{Cf}+$/u, nonMatchSymbols, '\\P{Cf}');
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