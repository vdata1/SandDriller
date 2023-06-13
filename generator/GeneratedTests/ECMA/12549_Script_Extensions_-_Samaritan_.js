try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2048,
                2093
            ],
            [
                2096,
                2110
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Samaritan}+$/u, matchSymbols, '\\p{Script_Extensions=Samaritan}');
    testPropertyEscapes(/^\p{Script_Extensions=Samr}+$/u, matchSymbols, '\\p{Script_Extensions=Samr}');
    testPropertyEscapes(/^\p{scx=Samaritan}+$/u, matchSymbols, '\\p{scx=Samaritan}');
    testPropertyEscapes(/^\p{scx=Samr}+$/u, matchSymbols, '\\p{scx=Samr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2047
            ],
            [
                2094,
                2095
            ],
            [
                2111,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Samaritan}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Samaritan}');
    testPropertyEscapes(/^\P{Script_Extensions=Samr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Samr}');
    testPropertyEscapes(/^\P{scx=Samaritan}+$/u, nonMatchSymbols, '\\P{scx=Samaritan}');
    testPropertyEscapes(/^\P{scx=Samr}+$/u, nonMatchSymbols, '\\P{scx=Samr}');
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