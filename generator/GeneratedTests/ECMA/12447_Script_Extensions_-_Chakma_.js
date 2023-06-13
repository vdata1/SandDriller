try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2534,
                2543
            ],
            [
                4160,
                4169
            ],
            [
                69888,
                69940
            ],
            [
                69942,
                69959
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Chakma}+$/u, matchSymbols, '\\p{Script_Extensions=Chakma}');
    testPropertyEscapes(/^\p{Script_Extensions=Cakm}+$/u, matchSymbols, '\\p{Script_Extensions=Cakm}');
    testPropertyEscapes(/^\p{scx=Chakma}+$/u, matchSymbols, '\\p{scx=Chakma}');
    testPropertyEscapes(/^\p{scx=Cakm}+$/u, matchSymbols, '\\p{scx=Cakm}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [69941],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2533
            ],
            [
                2544,
                4159
            ],
            [
                4170,
                56319
            ],
            [
                57344,
                69887
            ],
            [
                69960,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Chakma}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Chakma}');
    testPropertyEscapes(/^\P{Script_Extensions=Cakm}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cakm}');
    testPropertyEscapes(/^\P{scx=Chakma}+$/u, nonMatchSymbols, '\\P{scx=Chakma}');
    testPropertyEscapes(/^\P{scx=Cakm}+$/u, nonMatchSymbols, '\\P{scx=Cakm}');
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