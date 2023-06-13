try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                67808,
                67826
            ],
            [
                67828,
                67829
            ],
            [
                67835,
                67839
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Hatran}+$/u, matchSymbols, '\\p{Script=Hatran}');
    testPropertyEscapes(/^\p{Script=Hatr}+$/u, matchSymbols, '\\p{Script=Hatr}');
    testPropertyEscapes(/^\p{sc=Hatran}+$/u, matchSymbols, '\\p{sc=Hatran}');
    testPropertyEscapes(/^\p{sc=Hatr}+$/u, matchSymbols, '\\p{sc=Hatr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [67827],
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
                67807
            ],
            [
                67830,
                67834
            ],
            [
                67840,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Hatran}+$/u, nonMatchSymbols, '\\P{Script=Hatran}');
    testPropertyEscapes(/^\P{Script=Hatr}+$/u, nonMatchSymbols, '\\P{Script=Hatr}');
    testPropertyEscapes(/^\P{sc=Hatran}+$/u, nonMatchSymbols, '\\P{sc=Hatran}');
    testPropertyEscapes(/^\P{sc=Hatr}+$/u, nonMatchSymbols, '\\P{sc=Hatr}');
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