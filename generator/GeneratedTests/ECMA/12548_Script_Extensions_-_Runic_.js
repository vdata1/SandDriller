try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5792,
                5866
            ],
            [
                5870,
                5880
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Runic}+$/u, matchSymbols, '\\p{Script_Extensions=Runic}');
    testPropertyEscapes(/^\p{Script_Extensions=Runr}+$/u, matchSymbols, '\\p{Script_Extensions=Runr}');
    testPropertyEscapes(/^\p{scx=Runic}+$/u, matchSymbols, '\\p{scx=Runic}');
    testPropertyEscapes(/^\p{scx=Runr}+$/u, matchSymbols, '\\p{scx=Runr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5791
            ],
            [
                5867,
                5869
            ],
            [
                5881,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Runic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Runic}');
    testPropertyEscapes(/^\P{Script_Extensions=Runr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Runr}');
    testPropertyEscapes(/^\P{scx=Runic}+$/u, nonMatchSymbols, '\\P{scx=Runic}');
    testPropertyEscapes(/^\P{scx=Runr}+$/u, nonMatchSymbols, '\\P{scx=Runr}');
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