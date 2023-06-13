try {
    const matchSymbols = buildString({
        loneCodePoints: [
            170,
            186,
            4347,
            8239,
            8305,
            8319,
            8432,
            8498,
            8526,
            43310
        ],
        ranges: [
            [
                65,
                90
            ],
            [
                97,
                122
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
                696
            ],
            [
                736,
                740
            ],
            [
                867,
                879
            ],
            [
                1157,
                1158
            ],
            [
                2385,
                2386
            ],
            [
                7424,
                7461
            ],
            [
                7468,
                7516
            ],
            [
                7522,
                7525
            ],
            [
                7531,
                7543
            ],
            [
                7545,
                7614
            ],
            [
                7680,
                7935
            ],
            [
                8336,
                8348
            ],
            [
                8490,
                8491
            ],
            [
                8544,
                8584
            ],
            [
                11360,
                11391
            ],
            [
                42752,
                42759
            ],
            [
                42786,
                42887
            ],
            [
                42891,
                42943
            ],
            [
                42946,
                42954
            ],
            [
                42997,
                43007
            ],
            [
                43824,
                43866
            ],
            [
                43868,
                43876
            ],
            [
                43878,
                43881
            ],
            [
                64256,
                64262
            ],
            [
                65313,
                65338
            ],
            [
                65345,
                65370
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Latin}+$/u, matchSymbols, '\\p{Script_Extensions=Latin}');
    testPropertyEscapes(/^\p{Script_Extensions=Latn}+$/u, matchSymbols, '\\p{Script_Extensions=Latn}');
    testPropertyEscapes(/^\p{scx=Latin}+$/u, matchSymbols, '\\p{scx=Latin}');
    testPropertyEscapes(/^\p{scx=Latn}+$/u, matchSymbols, '\\p{scx=Latn}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            215,
            247,
            7544,
            43867,
            43877
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                64
            ],
            [
                91,
                96
            ],
            [
                123,
                169
            ],
            [
                171,
                185
            ],
            [
                187,
                191
            ],
            [
                697,
                735
            ],
            [
                741,
                866
            ],
            [
                880,
                1156
            ],
            [
                1159,
                2384
            ],
            [
                2387,
                4346
            ],
            [
                4348,
                7423
            ],
            [
                7462,
                7467
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
                7615,
                7679
            ],
            [
                7936,
                8238
            ],
            [
                8240,
                8304
            ],
            [
                8306,
                8318
            ],
            [
                8320,
                8335
            ],
            [
                8349,
                8431
            ],
            [
                8433,
                8489
            ],
            [
                8492,
                8497
            ],
            [
                8499,
                8525
            ],
            [
                8527,
                8543
            ],
            [
                8585,
                11359
            ],
            [
                11392,
                42751
            ],
            [
                42760,
                42785
            ],
            [
                42888,
                42890
            ],
            [
                42944,
                42945
            ],
            [
                42955,
                42996
            ],
            [
                43008,
                43309
            ],
            [
                43311,
                43823
            ],
            [
                43882,
                56319
            ],
            [
                57344,
                64255
            ],
            [
                64263,
                65312
            ],
            [
                65339,
                65344
            ],
            [
                65371,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Latin}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Latin}');
    testPropertyEscapes(/^\P{Script_Extensions=Latn}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Latn}');
    testPropertyEscapes(/^\P{scx=Latin}+$/u, nonMatchSymbols, '\\P{scx=Latin}');
    testPropertyEscapes(/^\P{scx=Latn}+$/u, nonMatchSymbols, '\\P{scx=Latn}');
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