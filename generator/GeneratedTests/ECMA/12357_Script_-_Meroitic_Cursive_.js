try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68000,
                68023
            ],
            [
                68028,
                68047
            ],
            [
                68050,
                68095
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Meroitic_Cursive}+$/u, matchSymbols, '\\p{Script=Meroitic_Cursive}');
    testPropertyEscapes(/^\p{Script=Merc}+$/u, matchSymbols, '\\p{Script=Merc}');
    testPropertyEscapes(/^\p{sc=Meroitic_Cursive}+$/u, matchSymbols, '\\p{sc=Meroitic_Cursive}');
    testPropertyEscapes(/^\p{sc=Merc}+$/u, matchSymbols, '\\p{sc=Merc}');
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
                67999
            ],
            [
                68024,
                68027
            ],
            [
                68048,
                68049
            ],
            [
                68096,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Meroitic_Cursive}+$/u, nonMatchSymbols, '\\P{Script=Meroitic_Cursive}');
    testPropertyEscapes(/^\P{Script=Merc}+$/u, nonMatchSymbols, '\\P{Script=Merc}');
    testPropertyEscapes(/^\P{sc=Meroitic_Cursive}+$/u, nonMatchSymbols, '\\P{sc=Meroitic_Cursive}');
    testPropertyEscapes(/^\P{sc=Merc}+$/u, nonMatchSymbols, '\\P{sc=Merc}');
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