try {
    const matchSymbols = buildString({
        loneCodePoints: [1155],
        ranges: [[
                66384,
                66426
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Old_Permic}+$/u, matchSymbols, '\\p{Script_Extensions=Old_Permic}');
    testPropertyEscapes(/^\p{Script_Extensions=Perm}+$/u, matchSymbols, '\\p{Script_Extensions=Perm}');
    testPropertyEscapes(/^\p{scx=Old_Permic}+$/u, matchSymbols, '\\p{scx=Old_Permic}');
    testPropertyEscapes(/^\p{scx=Perm}+$/u, matchSymbols, '\\p{scx=Perm}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1154
            ],
            [
                1156,
                56319
            ],
            [
                57344,
                66383
            ],
            [
                66427,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Old_Permic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Old_Permic}');
    testPropertyEscapes(/^\P{Script_Extensions=Perm}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Perm}');
    testPropertyEscapes(/^\P{scx=Old_Permic}+$/u, nonMatchSymbols, '\\P{scx=Old_Permic}');
    testPropertyEscapes(/^\P{scx=Perm}+$/u, nonMatchSymbols, '\\P{scx=Perm}');
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