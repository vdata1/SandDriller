try {
    const matchSymbols = buildString({
        loneCodePoints: [
            45,
            1418,
            1470,
            5120,
            6150,
            8275,
            8315,
            8331,
            8722,
            11799,
            11802,
            11840,
            12316,
            12336,
            12448,
            65112,
            65123,
            65293,
            69293
        ],
        ranges: [
            [
                8208,
                8213
            ],
            [
                11834,
                11835
            ],
            [
                65073,
                65074
            ]
        ]
    });
    testPropertyEscapes(/^\p{Dash}+$/u, matchSymbols, '\\p{Dash}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                44
            ],
            [
                46,
                1417
            ],
            [
                1419,
                1469
            ],
            [
                1471,
                5119
            ],
            [
                5121,
                6149
            ],
            [
                6151,
                8207
            ],
            [
                8214,
                8274
            ],
            [
                8276,
                8314
            ],
            [
                8316,
                8330
            ],
            [
                8332,
                8721
            ],
            [
                8723,
                11798
            ],
            [
                11800,
                11801
            ],
            [
                11803,
                11833
            ],
            [
                11836,
                11839
            ],
            [
                11841,
                12315
            ],
            [
                12317,
                12335
            ],
            [
                12337,
                12447
            ],
            [
                12449,
                56319
            ],
            [
                57344,
                65072
            ],
            [
                65075,
                65111
            ],
            [
                65113,
                65122
            ],
            [
                65124,
                65292
            ],
            [
                65294,
                69292
            ],
            [
                69294,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Dash}+$/u, nonMatchSymbols, '\\P{Dash}');
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