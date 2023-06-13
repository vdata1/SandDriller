try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                71040,
                71093
            ],
            [
                71096,
                71133
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Siddham}+$/u, matchSymbols, '\\p{Script_Extensions=Siddham}');
    testPropertyEscapes(/^\p{Script_Extensions=Sidd}+$/u, matchSymbols, '\\p{Script_Extensions=Sidd}');
    testPropertyEscapes(/^\p{scx=Siddham}+$/u, matchSymbols, '\\p{scx=Siddham}');
    testPropertyEscapes(/^\p{scx=Sidd}+$/u, matchSymbols, '\\p{scx=Sidd}');
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
                71039
            ],
            [
                71094,
                71095
            ],
            [
                71134,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Siddham}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Siddham}');
    testPropertyEscapes(/^\P{Script_Extensions=Sidd}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sidd}');
    testPropertyEscapes(/^\P{scx=Siddham}+$/u, nonMatchSymbols, '\\P{scx=Siddham}');
    testPropertyEscapes(/^\P{scx=Sidd}+$/u, nonMatchSymbols, '\\P{scx=Sidd}');
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