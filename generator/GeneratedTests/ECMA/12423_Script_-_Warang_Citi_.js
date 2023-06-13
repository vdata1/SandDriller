try {
    const matchSymbols = buildString({
        loneCodePoints: [71935],
        ranges: [[
                71840,
                71922
            ]]
    });
    testPropertyEscapes(/^\p{Script=Warang_Citi}+$/u, matchSymbols, '\\p{Script=Warang_Citi}');
    testPropertyEscapes(/^\p{Script=Wara}+$/u, matchSymbols, '\\p{Script=Wara}');
    testPropertyEscapes(/^\p{sc=Warang_Citi}+$/u, matchSymbols, '\\p{sc=Warang_Citi}');
    testPropertyEscapes(/^\p{sc=Wara}+$/u, matchSymbols, '\\p{sc=Wara}');
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
                71839
            ],
            [
                71923,
                71934
            ],
            [
                71936,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Warang_Citi}+$/u, nonMatchSymbols, '\\P{Script=Warang_Citi}');
    testPropertyEscapes(/^\P{Script=Wara}+$/u, nonMatchSymbols, '\\P{Script=Wara}');
    testPropertyEscapes(/^\P{sc=Warang_Citi}+$/u, nonMatchSymbols, '\\P{sc=Warang_Citi}');
    testPropertyEscapes(/^\P{sc=Wara}+$/u, nonMatchSymbols, '\\P{sc=Wara}');
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