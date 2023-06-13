try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43056,
                43065
            ],
            [
                71168,
                71236
            ],
            [
                71248,
                71257
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Modi}+$/u, matchSymbols, '\\p{Script_Extensions=Modi}');
    testPropertyEscapes(/^\p{Script_Extensions=Modi}+$/u, matchSymbols, '\\p{Script_Extensions=Modi}');
    testPropertyEscapes(/^\p{scx=Modi}+$/u, matchSymbols, '\\p{scx=Modi}');
    testPropertyEscapes(/^\p{scx=Modi}+$/u, matchSymbols, '\\p{scx=Modi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                71167
            ],
            [
                71237,
                71247
            ],
            [
                71258,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Modi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Modi}');
    testPropertyEscapes(/^\P{Script_Extensions=Modi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Modi}');
    testPropertyEscapes(/^\P{scx=Modi}+$/u, nonMatchSymbols, '\\P{scx=Modi}');
    testPropertyEscapes(/^\P{scx=Modi}+$/u, nonMatchSymbols, '\\P{scx=Modi}');
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