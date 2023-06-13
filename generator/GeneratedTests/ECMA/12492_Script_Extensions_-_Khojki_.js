try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2790,
                2799
            ],
            [
                43056,
                43065
            ],
            [
                70144,
                70161
            ],
            [
                70163,
                70206
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Khojki}+$/u, matchSymbols, '\\p{Script_Extensions=Khojki}');
    testPropertyEscapes(/^\p{Script_Extensions=Khoj}+$/u, matchSymbols, '\\p{Script_Extensions=Khoj}');
    testPropertyEscapes(/^\p{scx=Khojki}+$/u, matchSymbols, '\\p{scx=Khojki}');
    testPropertyEscapes(/^\p{scx=Khoj}+$/u, matchSymbols, '\\p{scx=Khoj}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [70162],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2789
            ],
            [
                2800,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                70143
            ],
            [
                70207,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Khojki}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Khojki}');
    testPropertyEscapes(/^\P{Script_Extensions=Khoj}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Khoj}');
    testPropertyEscapes(/^\P{scx=Khojki}+$/u, nonMatchSymbols, '\\P{scx=Khojki}');
    testPropertyEscapes(/^\P{scx=Khoj}+$/u, nonMatchSymbols, '\\P{scx=Khoj}');
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