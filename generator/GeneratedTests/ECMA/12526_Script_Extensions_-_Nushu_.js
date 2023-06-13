try {
    const matchSymbols = buildString({
        loneCodePoints: [94177],
        ranges: [[
                110960,
                111355
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Nushu}+$/u, matchSymbols, '\\p{Script_Extensions=Nushu}');
    testPropertyEscapes(/^\p{Script_Extensions=Nshu}+$/u, matchSymbols, '\\p{Script_Extensions=Nshu}');
    testPropertyEscapes(/^\p{scx=Nushu}+$/u, matchSymbols, '\\p{scx=Nushu}');
    testPropertyEscapes(/^\p{scx=Nshu}+$/u, matchSymbols, '\\p{scx=Nshu}');
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
                94176
            ],
            [
                94178,
                110959
            ],
            [
                111356,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Nushu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nushu}');
    testPropertyEscapes(/^\P{Script_Extensions=Nshu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nshu}');
    testPropertyEscapes(/^\P{scx=Nushu}+$/u, nonMatchSymbols, '\\P{scx=Nushu}');
    testPropertyEscapes(/^\P{scx=Nshu}+$/u, nonMatchSymbols, '\\P{scx=Nshu}');
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