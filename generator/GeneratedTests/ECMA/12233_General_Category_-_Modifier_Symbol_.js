try {
    const matchSymbols = buildString({
        loneCodePoints: [
            94,
            96,
            168,
            175,
            180,
            184,
            749,
            885,
            8125,
            43867,
            65342,
            65344,
            65507
        ],
        ranges: [
            [
                706,
                709
            ],
            [
                722,
                735
            ],
            [
                741,
                747
            ],
            [
                751,
                767
            ],
            [
                900,
                901
            ],
            [
                8127,
                8129
            ],
            [
                8141,
                8143
            ],
            [
                8157,
                8159
            ],
            [
                8173,
                8175
            ],
            [
                8189,
                8190
            ],
            [
                12443,
                12444
            ],
            [
                42752,
                42774
            ],
            [
                42784,
                42785
            ],
            [
                42889,
                42890
            ],
            [
                43882,
                43883
            ],
            [
                64434,
                64449
            ],
            [
                127995,
                127999
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Modifier_Symbol}+$/u, matchSymbols, '\\p{General_Category=Modifier_Symbol}');
    testPropertyEscapes(/^\p{General_Category=Sk}+$/u, matchSymbols, '\\p{General_Category=Sk}');
    testPropertyEscapes(/^\p{gc=Modifier_Symbol}+$/u, matchSymbols, '\\p{gc=Modifier_Symbol}');
    testPropertyEscapes(/^\p{gc=Sk}+$/u, matchSymbols, '\\p{gc=Sk}');
    testPropertyEscapes(/^\p{Modifier_Symbol}+$/u, matchSymbols, '\\p{Modifier_Symbol}');
    testPropertyEscapes(/^\p{Sk}+$/u, matchSymbols, '\\p{Sk}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            95,
            748,
            750,
            8126,
            65343
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                93
            ],
            [
                97,
                167
            ],
            [
                169,
                174
            ],
            [
                176,
                179
            ],
            [
                181,
                183
            ],
            [
                185,
                705
            ],
            [
                710,
                721
            ],
            [
                736,
                740
            ],
            [
                768,
                884
            ],
            [
                886,
                899
            ],
            [
                902,
                8124
            ],
            [
                8130,
                8140
            ],
            [
                8144,
                8156
            ],
            [
                8160,
                8172
            ],
            [
                8176,
                8188
            ],
            [
                8191,
                12442
            ],
            [
                12445,
                42751
            ],
            [
                42775,
                42783
            ],
            [
                42786,
                42888
            ],
            [
                42891,
                43866
            ],
            [
                43868,
                43881
            ],
            [
                43884,
                56319
            ],
            [
                57344,
                64433
            ],
            [
                64450,
                65341
            ],
            [
                65345,
                65506
            ],
            [
                65508,
                127994
            ],
            [
                128000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Modifier_Symbol}+$/u, nonMatchSymbols, '\\P{General_Category=Modifier_Symbol}');
    testPropertyEscapes(/^\P{General_Category=Sk}+$/u, nonMatchSymbols, '\\P{General_Category=Sk}');
    testPropertyEscapes(/^\P{gc=Modifier_Symbol}+$/u, nonMatchSymbols, '\\P{gc=Modifier_Symbol}');
    testPropertyEscapes(/^\P{gc=Sk}+$/u, nonMatchSymbols, '\\P{gc=Sk}');
    testPropertyEscapes(/^\P{Modifier_Symbol}+$/u, nonMatchSymbols, '\\P{Modifier_Symbol}');
    testPropertyEscapes(/^\P{Sk}+$/u, nonMatchSymbols, '\\P{Sk}');
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