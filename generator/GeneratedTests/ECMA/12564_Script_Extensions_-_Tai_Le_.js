try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                4160,
                4169
            ],
            [
                6480,
                6509
            ],
            [
                6512,
                6516
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tai_Le}+$/u, matchSymbols, '\\p{Script_Extensions=Tai_Le}');
    testPropertyEscapes(/^\p{Script_Extensions=Tale}+$/u, matchSymbols, '\\p{Script_Extensions=Tale}');
    testPropertyEscapes(/^\p{scx=Tai_Le}+$/u, matchSymbols, '\\p{scx=Tai_Le}');
    testPropertyEscapes(/^\p{scx=Tale}+$/u, matchSymbols, '\\p{scx=Tale}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4159
            ],
            [
                4170,
                6479
            ],
            [
                6510,
                6511
            ],
            [
                6517,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tai_Le}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tai_Le}');
    testPropertyEscapes(/^\P{Script_Extensions=Tale}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tale}');
    testPropertyEscapes(/^\P{scx=Tai_Le}+$/u, nonMatchSymbols, '\\P{scx=Tai_Le}');
    testPropertyEscapes(/^\P{scx=Tale}+$/u, nonMatchSymbols, '\\P{scx=Tale}');
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