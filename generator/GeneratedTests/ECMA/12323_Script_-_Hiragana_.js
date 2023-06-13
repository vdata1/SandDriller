try {
    const matchSymbols = buildString({
        loneCodePoints: [127488],
        ranges: [
            [
                12353,
                12438
            ],
            [
                12445,
                12447
            ],
            [
                110593,
                110878
            ],
            [
                110928,
                110930
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Hiragana}+$/u, matchSymbols, '\\p{Script=Hiragana}');
    testPropertyEscapes(/^\p{Script=Hira}+$/u, matchSymbols, '\\p{Script=Hira}');
    testPropertyEscapes(/^\p{sc=Hiragana}+$/u, matchSymbols, '\\p{sc=Hiragana}');
    testPropertyEscapes(/^\p{sc=Hira}+$/u, matchSymbols, '\\p{sc=Hira}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12352
            ],
            [
                12439,
                12444
            ],
            [
                12448,
                56319
            ],
            [
                57344,
                110592
            ],
            [
                110879,
                110927
            ],
            [
                110931,
                127487
            ],
            [
                127489,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Hiragana}+$/u, nonMatchSymbols, '\\P{Script=Hiragana}');
    testPropertyEscapes(/^\P{Script=Hira}+$/u, nonMatchSymbols, '\\P{Script=Hira}');
    testPropertyEscapes(/^\P{sc=Hiragana}+$/u, nonMatchSymbols, '\\P{sc=Hiragana}');
    testPropertyEscapes(/^\P{sc=Hira}+$/u, nonMatchSymbols, '\\P{sc=Hira}');
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