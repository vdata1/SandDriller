try {
    const matchSymbols = buildString({
        loneCodePoints: [],
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
    testPropertyEscapes(/^\p{Script=Glagolitic}+$/u, matchSymbols, '\\p{Script=Glagolitic}');
    testPropertyEscapes(/^\p{Script=Glag}+$/u, matchSymbols, '\\p{Script=Glag}');
    testPropertyEscapes(/^\p{sc=Glagolitic}+$/u, matchSymbols, '\\p{sc=Glagolitic}');
    testPropertyEscapes(/^\p{sc=Glag}+$/u, matchSymbols, '\\p{sc=Glag}');
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
                11263
            ],
            [
                11359,
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
    testPropertyEscapes(/^\P{Script=Glagolitic}+$/u, nonMatchSymbols, '\\P{Script=Glagolitic}');
    testPropertyEscapes(/^\P{Script=Glag}+$/u, nonMatchSymbols, '\\P{Script=Glag}');
    testPropertyEscapes(/^\P{sc=Glagolitic}+$/u, nonMatchSymbols, '\\P{sc=Glagolitic}');
    testPropertyEscapes(/^\P{sc=Glag}+$/u, nonMatchSymbols, '\\P{sc=Glag}');
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