try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                7104,
                7155
            ],
            [
                7164,
                7167
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Batak}+$/u, matchSymbols, '\\p{Script_Extensions=Batak}');
    testPropertyEscapes(/^\p{Script_Extensions=Batk}+$/u, matchSymbols, '\\p{Script_Extensions=Batk}');
    testPropertyEscapes(/^\p{scx=Batak}+$/u, matchSymbols, '\\p{scx=Batak}');
    testPropertyEscapes(/^\p{scx=Batk}+$/u, matchSymbols, '\\p{scx=Batk}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7103
            ],
            [
                7156,
                7163
            ],
            [
                7168,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Batak}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Batak}');
    testPropertyEscapes(/^\P{Script_Extensions=Batk}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Batk}');
    testPropertyEscapes(/^\P{scx=Batak}+$/u, nonMatchSymbols, '\\P{scx=Batak}');
    testPropertyEscapes(/^\P{scx=Batk}+$/u, nonMatchSymbols, '\\P{scx=Batk}');
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