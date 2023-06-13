try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                42240,
                42539
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Vai}+$/u, matchSymbols, '\\p{Script_Extensions=Vai}');
    testPropertyEscapes(/^\p{Script_Extensions=Vaii}+$/u, matchSymbols, '\\p{Script_Extensions=Vaii}');
    testPropertyEscapes(/^\p{scx=Vai}+$/u, matchSymbols, '\\p{scx=Vai}');
    testPropertyEscapes(/^\p{scx=Vaii}+$/u, matchSymbols, '\\p{scx=Vaii}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                42239
            ],
            [
                42540,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Vai}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Vai}');
    testPropertyEscapes(/^\P{Script_Extensions=Vaii}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Vaii}');
    testPropertyEscapes(/^\P{scx=Vai}+$/u, nonMatchSymbols, '\\P{scx=Vai}');
    testPropertyEscapes(/^\P{scx=Vaii}+$/u, nonMatchSymbols, '\\P{scx=Vaii}');
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