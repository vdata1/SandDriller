try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1156,
            1159,
            11843,
            42607
        ],
        ranges: [
            [
                11264,
                11310
            ],
            [
                11312,
                11358
            ],
            [
                122880,
                122886
            ],
            [
                122888,
                122904
            ],
            [
                122907,
                122913
            ],
            [
                122915,
                122916
            ],
            [
                122918,
                122922
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Glagolitic}+$/u, matchSymbols, '\\p{Script_Extensions=Glagolitic}');
    testPropertyEscapes(/^\p{Script_Extensions=Glag}+$/u, matchSymbols, '\\p{Script_Extensions=Glag}');
    testPropertyEscapes(/^\p{scx=Glagolitic}+$/u, matchSymbols, '\\p{scx=Glagolitic}');
    testPropertyEscapes(/^\p{scx=Glag}+$/u, matchSymbols, '\\p{scx=Glag}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            11311,
            122887,
            122914,
            122917
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1155
            ],
            [
                1157,
                1158
            ],
            [
                1160,
                11263
            ],
            [
                11359,
                11842
            ],
            [
                11844,
                42606
            ],
            [
                42608,
                56319
            ],
            [
                57344,
                122879
            ],
            [
                122905,
                122906
            ],
            [
                122923,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Glagolitic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Glagolitic}');
    testPropertyEscapes(/^\P{Script_Extensions=Glag}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Glag}');
    testPropertyEscapes(/^\P{scx=Glagolitic}+$/u, nonMatchSymbols, '\\P{scx=Glagolitic}');
    testPropertyEscapes(/^\P{scx=Glag}+$/u, nonMatchSymbols, '\\P{scx=Glag}');
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