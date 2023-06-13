try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                67712,
                67742
            ],
            [
                67751,
                67759
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Nabataean}+$/u, matchSymbols, '\\p{Script_Extensions=Nabataean}');
    testPropertyEscapes(/^\p{Script_Extensions=Nbat}+$/u, matchSymbols, '\\p{Script_Extensions=Nbat}');
    testPropertyEscapes(/^\p{scx=Nabataean}+$/u, matchSymbols, '\\p{scx=Nabataean}');
    testPropertyEscapes(/^\p{scx=Nbat}+$/u, matchSymbols, '\\p{scx=Nbat}');
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
                67711
            ],
            [
                67743,
                67750
            ],
            [
                67760,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Nabataean}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nabataean}');
    testPropertyEscapes(/^\P{Script_Extensions=Nbat}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nbat}');
    testPropertyEscapes(/^\P{scx=Nabataean}+$/u, nonMatchSymbols, '\\P{scx=Nabataean}');
    testPropertyEscapes(/^\P{scx=Nbat}+$/u, nonMatchSymbols, '\\P{scx=Nbat}');
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