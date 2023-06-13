try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                42240,
                42539
            ]]
    });
    testPropertyEscapes(/^\p{Script=Vai}+$/u, matchSymbols, '\\p{Script=Vai}');
    testPropertyEscapes(/^\p{Script=Vaii}+$/u, matchSymbols, '\\p{Script=Vaii}');
    testPropertyEscapes(/^\p{sc=Vai}+$/u, matchSymbols, '\\p{sc=Vai}');
    testPropertyEscapes(/^\p{sc=Vaii}+$/u, matchSymbols, '\\p{sc=Vaii}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                42239
            ],
            [
                42540,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Vai}+$/u, nonMatchSymbols, '\\P{Script=Vai}');
    testPropertyEscapes(/^\P{Script=Vaii}+$/u, nonMatchSymbols, '\\P{Script=Vaii}');
    testPropertyEscapes(/^\P{sc=Vai}+$/u, nonMatchSymbols, '\\P{sc=Vai}');
    testPropertyEscapes(/^\P{sc=Vaii}+$/u, nonMatchSymbols, '\\P{sc=Vaii}');
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