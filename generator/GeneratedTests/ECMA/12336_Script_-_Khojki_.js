try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                70144,
                70161
            ],
            [
                70163,
                70206
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Khojki}+$/u, matchSymbols, '\\p{Script=Khojki}');
    testPropertyEscapes(/^\p{Script=Khoj}+$/u, matchSymbols, '\\p{Script=Khoj}');
    testPropertyEscapes(/^\p{sc=Khojki}+$/u, matchSymbols, '\\p{sc=Khojki}');
    testPropertyEscapes(/^\p{sc=Khoj}+$/u, matchSymbols, '\\p{sc=Khoj}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [70162],
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
                70143
            ],
            [
                70207,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Khojki}+$/u, nonMatchSymbols, '\\P{Script=Khojki}');
    testPropertyEscapes(/^\P{Script=Khoj}+$/u, nonMatchSymbols, '\\P{Script=Khoj}');
    testPropertyEscapes(/^\P{sc=Khojki}+$/u, nonMatchSymbols, '\\P{sc=Khojki}');
    testPropertyEscapes(/^\P{sc=Khoj}+$/u, nonMatchSymbols, '\\P{sc=Khoj}');
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