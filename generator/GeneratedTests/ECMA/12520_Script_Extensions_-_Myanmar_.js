try {
    const matchSymbols = buildString({
        loneCodePoints: [43310],
        ranges: [
            [
                4096,
                4255
            ],
            [
                43488,
                43518
            ],
            [
                43616,
                43647
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Myanmar}+$/u, matchSymbols, '\\p{Script_Extensions=Myanmar}');
    testPropertyEscapes(/^\p{Script_Extensions=Mymr}+$/u, matchSymbols, '\\p{Script_Extensions=Mymr}');
    testPropertyEscapes(/^\p{scx=Myanmar}+$/u, matchSymbols, '\\p{scx=Myanmar}');
    testPropertyEscapes(/^\p{scx=Mymr}+$/u, matchSymbols, '\\p{scx=Mymr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4095
            ],
            [
                4256,
                43309
            ],
            [
                43311,
                43487
            ],
            [
                43519,
                43615
            ],
            [
                43648,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Myanmar}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Myanmar}');
    testPropertyEscapes(/^\P{Script_Extensions=Mymr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mymr}');
    testPropertyEscapes(/^\P{scx=Myanmar}+$/u, nonMatchSymbols, '\\P{scx=Myanmar}');
    testPropertyEscapes(/^\P{scx=Mymr}+$/u, nonMatchSymbols, '\\P{scx=Mymr}');
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