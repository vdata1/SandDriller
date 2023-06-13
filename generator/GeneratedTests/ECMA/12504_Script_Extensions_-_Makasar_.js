try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                73440,
                73464
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Makasar}+$/u, matchSymbols, '\\p{Script_Extensions=Makasar}');
    testPropertyEscapes(/^\p{Script_Extensions=Maka}+$/u, matchSymbols, '\\p{Script_Extensions=Maka}');
    testPropertyEscapes(/^\p{scx=Makasar}+$/u, matchSymbols, '\\p{scx=Makasar}');
    testPropertyEscapes(/^\p{scx=Maka}+$/u, matchSymbols, '\\p{scx=Maka}');
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
                73439
            ],
            [
                73465,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Makasar}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Makasar}');
    testPropertyEscapes(/^\P{Script_Extensions=Maka}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Maka}');
    testPropertyEscapes(/^\P{scx=Makasar}+$/u, nonMatchSymbols, '\\P{scx=Makasar}');
    testPropertyEscapes(/^\P{scx=Maka}+$/u, nonMatchSymbols, '\\P{scx=Maka}');
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