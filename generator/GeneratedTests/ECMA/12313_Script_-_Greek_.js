try {
    const matchSymbols = buildString({
        loneCodePoints: [
            895,
            900,
            902,
            908,
            7615,
            8025,
            8027,
            8029,
            8486,
            43877,
            65952
        ],
        ranges: [
            [
                880,
                883
            ],
            [
                885,
                887
            ],
            [
                890,
                893
            ],
            [
                904,
                906
            ],
            [
                910,
                929
            ],
            [
                931,
                993
            ],
            [
                1008,
                1023
            ],
            [
                7462,
                7466
            ],
            [
                7517,
                7521
            ],
            [
                7526,
                7530
            ],
            [
                7936,
                7957
            ],
            [
                7960,
                7965
            ],
            [
                7968,
                8005
            ],
            [
                8008,
                8013
            ],
            [
                8016,
                8023
            ],
            [
                8031,
                8061
            ],
            [
                8064,
                8116
            ],
            [
                8118,
                8132
            ],
            [
                8134,
                8147
            ],
            [
                8150,
                8155
            ],
            [
                8157,
                8175
            ],
            [
                8178,
                8180
            ],
            [
                8182,
                8190
            ],
            [
                65856,
                65934
            ],
            [
                119296,
                119365
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Greek}+$/u, matchSymbols, '\\p{Script=Greek}');
    testPropertyEscapes(/^\p{Script=Grek}+$/u, matchSymbols, '\\p{Script=Grek}');
    testPropertyEscapes(/^\p{sc=Greek}+$/u, matchSymbols, '\\p{sc=Greek}');
    testPropertyEscapes(/^\p{sc=Grek}+$/u, matchSymbols, '\\p{sc=Grek}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            884,
            894,
            901,
            903,
            907,
            909,
            930,
            8024,
            8026,
            8028,
            8030,
            8117,
            8133,
            8156,
            8181
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                879
            ],
            [
                888,
                889
            ],
            [
                896,
                899
            ],
            [
                994,
                1007
            ],
            [
                1024,
                7461
            ],
            [
                7467,
                7516
            ],
            [
                7522,
                7525
            ],
            [
                7531,
                7614
            ],
            [
                7616,
                7935
            ],
            [
                7958,
                7959
            ],
            [
                7966,
                7967
            ],
            [
                8006,
                8007
            ],
            [
                8014,
                8015
            ],
            [
                8062,
                8063
            ],
            [
                8148,
                8149
            ],
            [
                8176,
                8177
            ],
            [
                8191,
                8485
            ],
            [
                8487,
                43876
            ],
            [
                43878,
                56319
            ],
            [
                57344,
                65855
            ],
            [
                65935,
                65951
            ],
            [
                65953,
                119295
            ],
            [
                119366,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Greek}+$/u, nonMatchSymbols, '\\P{Script=Greek}');
    testPropertyEscapes(/^\P{Script=Grek}+$/u, nonMatchSymbols, '\\P{Script=Grek}');
    testPropertyEscapes(/^\P{sc=Greek}+$/u, nonMatchSymbols, '\\P{sc=Greek}');
    testPropertyEscapes(/^\P{sc=Grek}+$/u, nonMatchSymbols, '\\P{sc=Grek}');
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