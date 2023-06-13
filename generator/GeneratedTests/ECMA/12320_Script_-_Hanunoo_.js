try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                5920,
                5940
            ]]
    });
    testPropertyEscapes(/^\p{Script=Hanunoo}+$/u, matchSymbols, '\\p{Script=Hanunoo}');
    testPropertyEscapes(/^\p{Script=Hano}+$/u, matchSymbols, '\\p{Script=Hano}');
    testPropertyEscapes(/^\p{sc=Hanunoo}+$/u, matchSymbols, '\\p{sc=Hanunoo}');
    testPropertyEscapes(/^\p{sc=Hano}+$/u, matchSymbols, '\\p{sc=Hano}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5919
            ],
            [
                5941,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Hanunoo}+$/u, nonMatchSymbols, '\\P{Script=Hanunoo}');
    testPropertyEscapes(/^\P{Script=Hano}+$/u, nonMatchSymbols, '\\P{Script=Hano}');
    testPropertyEscapes(/^\P{sc=Hanunoo}+$/u, nonMatchSymbols, '\\P{sc=Hanunoo}');
    testPropertyEscapes(/^\P{sc=Hano}+$/u, nonMatchSymbols, '\\P{sc=Hano}');
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