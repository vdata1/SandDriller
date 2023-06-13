try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                73440,
                73464
            ]]
    });
    testPropertyEscapes(/^\p{Script=Makasar}+$/u, matchSymbols, '\\p{Script=Makasar}');
    testPropertyEscapes(/^\p{Script=Maka}+$/u, matchSymbols, '\\p{Script=Maka}');
    testPropertyEscapes(/^\p{sc=Makasar}+$/u, matchSymbols, '\\p{sc=Makasar}');
    testPropertyEscapes(/^\p{sc=Maka}+$/u, matchSymbols, '\\p{sc=Maka}');
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
                73439
            ],
            [
                73465,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Makasar}+$/u, nonMatchSymbols, '\\P{Script=Makasar}');
    testPropertyEscapes(/^\P{Script=Maka}+$/u, nonMatchSymbols, '\\P{Script=Maka}');
    testPropertyEscapes(/^\P{sc=Makasar}+$/u, nonMatchSymbols, '\\P{sc=Makasar}');
    testPropertyEscapes(/^\P{sc=Maka}+$/u, nonMatchSymbols, '\\P{sc=Maka}');
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