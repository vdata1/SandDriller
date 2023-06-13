try {
    const matchSymbols = buildString({
        loneCodePoints: [69759],
        ranges: [
            [
                69632,
                69709
            ],
            [
                69714,
                69743
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Brahmi}+$/u, matchSymbols, '\\p{Script=Brahmi}');
    testPropertyEscapes(/^\p{Script=Brah}+$/u, matchSymbols, '\\p{Script=Brah}');
    testPropertyEscapes(/^\p{sc=Brahmi}+$/u, matchSymbols, '\\p{sc=Brahmi}');
    testPropertyEscapes(/^\p{sc=Brah}+$/u, matchSymbols, '\\p{sc=Brah}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                56319
            ],
            [
                57344,
                69631
            ],
            [
                69710,
                69713
            ],
            [
                69744,
                69758
            ],
            [
                69760,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Brahmi}+$/u, nonMatchSymbols, '\\P{Script=Brahmi}');
    testPropertyEscapes(/^\P{Script=Brah}+$/u, nonMatchSymbols, '\\P{Script=Brah}');
    testPropertyEscapes(/^\P{sc=Brahmi}+$/u, nonMatchSymbols, '\\P{sc=Brahmi}');
    testPropertyEscapes(/^\P{sc=Brah}+$/u, nonMatchSymbols, '\\P{sc=Brah}');
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