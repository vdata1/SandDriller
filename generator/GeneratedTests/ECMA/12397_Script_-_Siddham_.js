try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                71040,
                71093
            ],
            [
                71096,
                71133
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Siddham}+$/u, matchSymbols, '\\p{Script=Siddham}');
    testPropertyEscapes(/^\p{Script=Sidd}+$/u, matchSymbols, '\\p{Script=Sidd}');
    testPropertyEscapes(/^\p{sc=Siddham}+$/u, matchSymbols, '\\p{sc=Siddham}');
    testPropertyEscapes(/^\p{sc=Sidd}+$/u, matchSymbols, '\\p{sc=Sidd}');
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
                71039
            ],
            [
                71094,
                71095
            ],
            [
                71134,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Siddham}+$/u, nonMatchSymbols, '\\P{Script=Siddham}');
    testPropertyEscapes(/^\P{Script=Sidd}+$/u, nonMatchSymbols, '\\P{Script=Sidd}');
    testPropertyEscapes(/^\P{sc=Siddham}+$/u, nonMatchSymbols, '\\P{sc=Siddham}');
    testPropertyEscapes(/^\P{sc=Sidd}+$/u, nonMatchSymbols, '\\P{sc=Sidd}');
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