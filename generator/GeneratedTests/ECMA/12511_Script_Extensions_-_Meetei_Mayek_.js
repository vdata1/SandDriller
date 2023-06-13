try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43744,
                43766
            ],
            [
                43968,
                44013
            ],
            [
                44016,
                44025
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Meetei_Mayek}+$/u, matchSymbols, '\\p{Script_Extensions=Meetei_Mayek}');
    testPropertyEscapes(/^\p{Script_Extensions=Mtei}+$/u, matchSymbols, '\\p{Script_Extensions=Mtei}');
    testPropertyEscapes(/^\p{scx=Meetei_Mayek}+$/u, matchSymbols, '\\p{scx=Meetei_Mayek}');
    testPropertyEscapes(/^\p{scx=Mtei}+$/u, matchSymbols, '\\p{scx=Mtei}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43743
            ],
            [
                43767,
                43967
            ],
            [
                44014,
                44015
            ],
            [
                44026,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Meetei_Mayek}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Meetei_Mayek}');
    testPropertyEscapes(/^\P{Script_Extensions=Mtei}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mtei}');
    testPropertyEscapes(/^\P{scx=Meetei_Mayek}+$/u, nonMatchSymbols, '\\P{scx=Meetei_Mayek}');
    testPropertyEscapes(/^\P{scx=Mtei}+$/u, nonMatchSymbols, '\\P{scx=Mtei}');
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