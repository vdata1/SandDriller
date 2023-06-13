try {
    const matchSymbols = buildString({
        loneCodePoints: [67871],
        ranges: [[
                67840,
                67867
            ]]
    });
    testPropertyEscapes(/^\p{Script=Phoenician}+$/u, matchSymbols, '\\p{Script=Phoenician}');
    testPropertyEscapes(/^\p{Script=Phnx}+$/u, matchSymbols, '\\p{Script=Phnx}');
    testPropertyEscapes(/^\p{sc=Phoenician}+$/u, matchSymbols, '\\p{sc=Phoenician}');
    testPropertyEscapes(/^\p{sc=Phnx}+$/u, matchSymbols, '\\p{sc=Phnx}');
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
                67839
            ],
            [
                67868,
                67870
            ],
            [
                67872,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Phoenician}+$/u, nonMatchSymbols, '\\P{Script=Phoenician}');
    testPropertyEscapes(/^\P{Script=Phnx}+$/u, nonMatchSymbols, '\\P{Script=Phnx}');
    testPropertyEscapes(/^\P{sc=Phoenician}+$/u, nonMatchSymbols, '\\P{sc=Phoenician}');
    testPropertyEscapes(/^\P{sc=Phnx}+$/u, nonMatchSymbols, '\\P{sc=Phnx}');
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