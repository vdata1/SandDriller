try {
    const matchSymbols = buildString({
        loneCodePoints: [
            183,
            1600,
            2042,
            2901,
            3654,
            3782,
            6154,
            6211,
            6823,
            7222,
            7291,
            12293,
            40981,
            42508,
            43471,
            43494,
            43632,
            43741,
            65392,
            70493,
            72344,
            94179
        ],
        ranges: [
            [
                720,
                721
            ],
            [
                12337,
                12341
            ],
            [
                12445,
                12446
            ],
            [
                12540,
                12542
            ],
            [
                43763,
                43764
            ],
            [
                71110,
                71112
            ],
            [
                92994,
                92995
            ],
            [
                94176,
                94177
            ],
            [
                123196,
                123197
            ],
            [
                125252,
                125254
            ]
        ]
    });
    testPropertyEscapes(/^\p{Extender}+$/u, matchSymbols, '\\p{Extender}');
    testPropertyEscapes(/^\p{Ext}+$/u, matchSymbols, '\\p{Ext}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [94178],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                182
            ],
            [
                184,
                719
            ],
            [
                722,
                1599
            ],
            [
                1601,
                2041
            ],
            [
                2043,
                2900
            ],
            [
                2902,
                3653
            ],
            [
                3655,
                3781
            ],
            [
                3783,
                6153
            ],
            [
                6155,
                6210
            ],
            [
                6212,
                6822
            ],
            [
                6824,
                7221
            ],
            [
                7223,
                7290
            ],
            [
                7292,
                12292
            ],
            [
                12294,
                12336
            ],
            [
                12342,
                12444
            ],
            [
                12447,
                12539
            ],
            [
                12543,
                40980
            ],
            [
                40982,
                42507
            ],
            [
                42509,
                43470
            ],
            [
                43472,
                43493
            ],
            [
                43495,
                43631
            ],
            [
                43633,
                43740
            ],
            [
                43742,
                43762
            ],
            [
                43765,
                56319
            ],
            [
                57344,
                65391
            ],
            [
                65393,
                70492
            ],
            [
                70494,
                71109
            ],
            [
                71113,
                72343
            ],
            [
                72345,
                92993
            ],
            [
                92996,
                94175
            ],
            [
                94180,
                123195
            ],
            [
                123198,
                125251
            ],
            [
                125255,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Extender}+$/u, nonMatchSymbols, '\\P{Extender}');
    testPropertyEscapes(/^\P{Ext}+$/u, nonMatchSymbols, '\\P{Ext}');
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