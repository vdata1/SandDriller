try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66560,
                66639
            ]]
    });
    testPropertyEscapes(/^\p{Script=Deseret}+$/u, matchSymbols, '\\p{Script=Deseret}');
    testPropertyEscapes(/^\p{Script=Dsrt}+$/u, matchSymbols, '\\p{Script=Dsrt}');
    testPropertyEscapes(/^\p{sc=Deseret}+$/u, matchSymbols, '\\p{sc=Deseret}');
    testPropertyEscapes(/^\p{sc=Dsrt}+$/u, matchSymbols, '\\p{sc=Dsrt}');
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
                66559
            ],
            [
                66640,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Deseret}+$/u, nonMatchSymbols, '\\P{Script=Deseret}');
    testPropertyEscapes(/^\P{Script=Dsrt}+$/u, nonMatchSymbols, '\\P{Script=Dsrt}');
    testPropertyEscapes(/^\P{sc=Deseret}+$/u, nonMatchSymbols, '\\P{sc=Deseret}');
    testPropertyEscapes(/^\P{sc=Dsrt}+$/u, nonMatchSymbols, '\\P{sc=Dsrt}');
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