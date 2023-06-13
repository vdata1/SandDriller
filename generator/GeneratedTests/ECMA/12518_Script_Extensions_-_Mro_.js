try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                92736,
                92766
            ],
            [
                92768,
                92777
            ],
            [
                92782,
                92783
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Mro}+$/u, matchSymbols, '\\p{Script_Extensions=Mro}');
    testPropertyEscapes(/^\p{Script_Extensions=Mroo}+$/u, matchSymbols, '\\p{Script_Extensions=Mroo}');
    testPropertyEscapes(/^\p{scx=Mro}+$/u, matchSymbols, '\\p{scx=Mro}');
    testPropertyEscapes(/^\p{scx=Mroo}+$/u, matchSymbols, '\\p{scx=Mroo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [92767],
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
                92735
            ],
            [
                92778,
                92781
            ],
            [
                92784,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Mro}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mro}');
    testPropertyEscapes(/^\P{Script_Extensions=Mroo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mroo}');
    testPropertyEscapes(/^\P{scx=Mro}+$/u, nonMatchSymbols, '\\P{scx=Mro}');
    testPropertyEscapes(/^\P{scx=Mroo}+$/u, nonMatchSymbols, '\\P{scx=Mroo}');
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