try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                1984,
                2042
            ],
            [
                2045,
                2047
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Nko}+$/u, matchSymbols, '\\p{Script_Extensions=Nko}');
    testPropertyEscapes(/^\p{Script_Extensions=Nkoo}+$/u, matchSymbols, '\\p{Script_Extensions=Nkoo}');
    testPropertyEscapes(/^\p{scx=Nko}+$/u, matchSymbols, '\\p{scx=Nko}');
    testPropertyEscapes(/^\p{scx=Nkoo}+$/u, matchSymbols, '\\p{scx=Nkoo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1983
            ],
            [
                2043,
                2044
            ],
            [
                2048,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Nko}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nko}');
    testPropertyEscapes(/^\P{Script_Extensions=Nkoo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nkoo}');
    testPropertyEscapes(/^\P{scx=Nko}+$/u, nonMatchSymbols, '\\P{scx=Nko}');
    testPropertyEscapes(/^\P{scx=Nkoo}+$/u, nonMatchSymbols, '\\P{scx=Nkoo}');
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