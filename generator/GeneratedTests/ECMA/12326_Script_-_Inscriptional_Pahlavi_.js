try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68448,
                68466
            ],
            [
                68472,
                68479
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Inscriptional_Pahlavi}+$/u, matchSymbols, '\\p{Script=Inscriptional_Pahlavi}');
    testPropertyEscapes(/^\p{Script=Phli}+$/u, matchSymbols, '\\p{Script=Phli}');
    testPropertyEscapes(/^\p{sc=Inscriptional_Pahlavi}+$/u, matchSymbols, '\\p{sc=Inscriptional_Pahlavi}');
    testPropertyEscapes(/^\p{sc=Phli}+$/u, matchSymbols, '\\p{sc=Phli}');
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
                68447
            ],
            [
                68467,
                68471
            ],
            [
                68480,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Inscriptional_Pahlavi}+$/u, nonMatchSymbols, '\\P{Script=Inscriptional_Pahlavi}');
    testPropertyEscapes(/^\P{Script=Phli}+$/u, nonMatchSymbols, '\\P{Script=Phli}');
    testPropertyEscapes(/^\P{sc=Inscriptional_Pahlavi}+$/u, nonMatchSymbols, '\\P{sc=Inscriptional_Pahlavi}');
    testPropertyEscapes(/^\P{sc=Phli}+$/u, nonMatchSymbols, '\\P{sc=Phli}');
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