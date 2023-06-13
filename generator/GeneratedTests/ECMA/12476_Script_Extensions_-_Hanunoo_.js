try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                5920,
                5942
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Hanunoo}+$/u, matchSymbols, '\\p{Script_Extensions=Hanunoo}');
    testPropertyEscapes(/^\p{Script_Extensions=Hano}+$/u, matchSymbols, '\\p{Script_Extensions=Hano}');
    testPropertyEscapes(/^\p{scx=Hanunoo}+$/u, matchSymbols, '\\p{scx=Hanunoo}');
    testPropertyEscapes(/^\p{scx=Hano}+$/u, matchSymbols, '\\p{scx=Hano}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5919
            ],
            [
                5943,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Hanunoo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hanunoo}');
    testPropertyEscapes(/^\P{Script_Extensions=Hano}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hano}');
    testPropertyEscapes(/^\P{scx=Hanunoo}+$/u, nonMatchSymbols, '\\P{scx=Hanunoo}');
    testPropertyEscapes(/^\P{scx=Hano}+$/u, nonMatchSymbols, '\\P{scx=Hano}');
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