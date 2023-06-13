try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                69248,
                69289
            ],
            [
                69291,
                69293
            ],
            [
                69296,
                69297
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Yezidi}+$/u, matchSymbols, '\\p{Script=Yezidi}');
    testPropertyEscapes(/^\p{Script=Yezi}+$/u, matchSymbols, '\\p{Script=Yezi}');
    testPropertyEscapes(/^\p{sc=Yezidi}+$/u, matchSymbols, '\\p{sc=Yezidi}');
    testPropertyEscapes(/^\p{sc=Yezi}+$/u, matchSymbols, '\\p{sc=Yezi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [69290],
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
                69247
            ],
            [
                69294,
                69295
            ],
            [
                69298,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Yezidi}+$/u, nonMatchSymbols, '\\P{Script=Yezidi}');
    testPropertyEscapes(/^\P{Script=Yezi}+$/u, nonMatchSymbols, '\\P{Script=Yezi}');
    testPropertyEscapes(/^\P{sc=Yezidi}+$/u, nonMatchSymbols, '\\P{sc=Yezidi}');
    testPropertyEscapes(/^\P{sc=Yezi}+$/u, nonMatchSymbols, '\\P{sc=Yezi}');
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