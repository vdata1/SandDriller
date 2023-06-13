try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                124928,
                125124
            ],
            [
                125127,
                125142
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Mende_Kikakui}+$/u, matchSymbols, '\\p{Script_Extensions=Mende_Kikakui}');
    testPropertyEscapes(/^\p{Script_Extensions=Mend}+$/u, matchSymbols, '\\p{Script_Extensions=Mend}');
    testPropertyEscapes(/^\p{scx=Mende_Kikakui}+$/u, matchSymbols, '\\p{scx=Mende_Kikakui}');
    testPropertyEscapes(/^\p{scx=Mend}+$/u, matchSymbols, '\\p{scx=Mend}');
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
                124927
            ],
            [
                125125,
                125126
            ],
            [
                125143,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Mende_Kikakui}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mende_Kikakui}');
    testPropertyEscapes(/^\P{Script_Extensions=Mend}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mend}');
    testPropertyEscapes(/^\P{scx=Mende_Kikakui}+$/u, nonMatchSymbols, '\\P{scx=Mende_Kikakui}');
    testPropertyEscapes(/^\P{scx=Mend}+$/u, nonMatchSymbols, '\\P{scx=Mend}');
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