try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                994,
                1007
            ],
            [
                11392,
                11507
            ],
            [
                11513,
                11519
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Coptic}+$/u, matchSymbols, '\\p{Script=Coptic}');
    testPropertyEscapes(/^\p{Script=Copt}+$/u, matchSymbols, '\\p{Script=Copt}');
    testPropertyEscapes(/^\p{Script=Qaac}+$/u, matchSymbols, '\\p{Script=Qaac}');
    testPropertyEscapes(/^\p{sc=Coptic}+$/u, matchSymbols, '\\p{sc=Coptic}');
    testPropertyEscapes(/^\p{sc=Copt}+$/u, matchSymbols, '\\p{sc=Copt}');
    testPropertyEscapes(/^\p{sc=Qaac}+$/u, matchSymbols, '\\p{sc=Qaac}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                993
            ],
            [
                1008,
                11391
            ],
            [
                11508,
                11512
            ],
            [
                11520,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Coptic}+$/u, nonMatchSymbols, '\\P{Script=Coptic}');
    testPropertyEscapes(/^\P{Script=Copt}+$/u, nonMatchSymbols, '\\P{Script=Copt}');
    testPropertyEscapes(/^\P{Script=Qaac}+$/u, nonMatchSymbols, '\\P{Script=Qaac}');
    testPropertyEscapes(/^\P{sc=Coptic}+$/u, nonMatchSymbols, '\\P{sc=Coptic}');
    testPropertyEscapes(/^\P{sc=Copt}+$/u, nonMatchSymbols, '\\P{sc=Copt}');
    testPropertyEscapes(/^\P{sc=Qaac}+$/u, nonMatchSymbols, '\\P{sc=Qaac}');
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