try {
    const matchSymbols = buildString({
        loneCodePoints: [
            96,
            169,
            174,
            182,
            187,
            191,
            215,
            247,
            12336
        ],
        ranges: [
            [
                33,
                47
            ],
            [
                58,
                64
            ],
            [
                91,
                94
            ],
            [
                123,
                126
            ],
            [
                161,
                167
            ],
            [
                171,
                172
            ],
            [
                176,
                177
            ],
            [
                8208,
                8231
            ],
            [
                8240,
                8254
            ],
            [
                8257,
                8275
            ],
            [
                8277,
                8286
            ],
            [
                8592,
                9311
            ],
            [
                9472,
                10101
            ],
            [
                10132,
                11263
            ],
            [
                11776,
                11903
            ],
            [
                12289,
                12291
            ],
            [
                12296,
                12320
            ],
            [
                64830,
                64831
            ],
            [
                65093,
                65094
            ]
        ]
    });
    testPropertyEscapes(/^\p{Pattern_Syntax}+$/u, matchSymbols, '\\p{Pattern_Syntax}');
    testPropertyEscapes(/^\p{Pat_Syn}+$/u, matchSymbols, '\\p{Pat_Syn}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            95,
            168,
            170,
            173,
            175,
            8276
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                32
            ],
            [
                48,
                57
            ],
            [
                65,
                90
            ],
            [
                97,
                122
            ],
            [
                127,
                160
            ],
            [
                178,
                181
            ],
            [
                183,
                186
            ],
            [
                188,
                190
            ],
            [
                192,
                214
            ],
            [
                216,
                246
            ],
            [
                248,
                8207
            ],
            [
                8232,
                8239
            ],
            [
                8255,
                8256
            ],
            [
                8287,
                8591
            ],
            [
                9312,
                9471
            ],
            [
                10102,
                10131
            ],
            [
                11264,
                11775
            ],
            [
                11904,
                12288
            ],
            [
                12292,
                12295
            ],
            [
                12321,
                12335
            ],
            [
                12337,
                56319
            ],
            [
                57344,
                64829
            ],
            [
                64832,
                65092
            ],
            [
                65095,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Pattern_Syntax}+$/u, nonMatchSymbols, '\\P{Pattern_Syntax}');
    testPropertyEscapes(/^\P{Pat_Syn}+$/u, nonMatchSymbols, '\\P{Pat_Syn}');
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