try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                66736,
                66771
            ],
            [
                66776,
                66811
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Osage}+$/u, matchSymbols, '\\p{Script=Osage}');
    testPropertyEscapes(/^\p{Script=Osge}+$/u, matchSymbols, '\\p{Script=Osge}');
    testPropertyEscapes(/^\p{sc=Osage}+$/u, matchSymbols, '\\p{sc=Osage}');
    testPropertyEscapes(/^\p{sc=Osge}+$/u, matchSymbols, '\\p{sc=Osge}');
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
                66735
            ],
            [
                66772,
                66775
            ],
            [
                66812,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Osage}+$/u, nonMatchSymbols, '\\P{Script=Osage}');
    testPropertyEscapes(/^\P{Script=Osge}+$/u, nonMatchSymbols, '\\P{Script=Osge}');
    testPropertyEscapes(/^\P{sc=Osage}+$/u, nonMatchSymbols, '\\P{sc=Osage}');
    testPropertyEscapes(/^\P{sc=Osge}+$/u, nonMatchSymbols, '\\P{sc=Osge}');
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