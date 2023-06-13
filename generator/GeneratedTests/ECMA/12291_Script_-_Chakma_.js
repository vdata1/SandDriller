try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                69888,
                69940
            ],
            [
                69942,
                69959
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Chakma}+$/u, matchSymbols, '\\p{Script=Chakma}');
    testPropertyEscapes(/^\p{Script=Cakm}+$/u, matchSymbols, '\\p{Script=Cakm}');
    testPropertyEscapes(/^\p{sc=Chakma}+$/u, matchSymbols, '\\p{sc=Chakma}');
    testPropertyEscapes(/^\p{sc=Cakm}+$/u, matchSymbols, '\\p{sc=Cakm}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [69941],
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
                69887
            ],
            [
                69960,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Chakma}+$/u, nonMatchSymbols, '\\P{Script=Chakma}');
    testPropertyEscapes(/^\P{Script=Cakm}+$/u, nonMatchSymbols, '\\P{Script=Cakm}');
    testPropertyEscapes(/^\P{sc=Chakma}+$/u, nonMatchSymbols, '\\P{sc=Chakma}');
    testPropertyEscapes(/^\P{sc=Cakm}+$/u, nonMatchSymbols, '\\P{sc=Cakm}');
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