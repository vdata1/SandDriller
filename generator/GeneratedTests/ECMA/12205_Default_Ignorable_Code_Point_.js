try {
    const matchSymbols = buildString({
        loneCodePoints: [
            173,
            847,
            1564,
            12644,
            65279,
            65440
        ],
        ranges: [
            [
                4447,
                4448
            ],
            [
                6068,
                6069
            ],
            [
                6155,
                6158
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
                8303
            ],
            [
                65024,
                65039
            ],
            [
                65520,
                65528
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
                917504,
                921599
            ]
        ]
    });
    testPropertyEscapes(/^\p{Default_Ignorable_Code_Point}+$/u, matchSymbols, '\\p{Default_Ignorable_Code_Point}');
    testPropertyEscapes(/^\p{DI}+$/u, matchSymbols, '\\p{DI}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                846
            ],
            [
                848,
                1563
            ],
            [
                1565,
                4446
            ],
            [
                4449,
                6067
            ],
            [
                6070,
                6154
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
                12643
            ],
            [
                12645,
                56319
            ],
            [
                57344,
                65023
            ],
            [
                65040,
                65278
            ],
            [
                65280,
                65439
            ],
            [
                65441,
                65519
            ],
            [
                65529,
                113823
            ],
            [
                113828,
                119154
            ],
            [
                119163,
                917503
            ],
            [
                921600,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Default_Ignorable_Code_Point}+$/u, nonMatchSymbols, '\\P{Default_Ignorable_Code_Point}');
    testPropertyEscapes(/^\P{DI}+$/u, nonMatchSymbols, '\\P{DI}');
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