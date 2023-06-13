try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                7248,
                7295
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Ol_Chiki}+$/u, matchSymbols, '\\p{Script_Extensions=Ol_Chiki}');
    testPropertyEscapes(/^\p{Script_Extensions=Olck}+$/u, matchSymbols, '\\p{Script_Extensions=Olck}');
    testPropertyEscapes(/^\p{scx=Ol_Chiki}+$/u, matchSymbols, '\\p{scx=Ol_Chiki}');
    testPropertyEscapes(/^\p{scx=Olck}+$/u, matchSymbols, '\\p{scx=Olck}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7247
            ],
            [
                7296,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Ol_Chiki}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Ol_Chiki}');
    testPropertyEscapes(/^\P{Script_Extensions=Olck}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Olck}');
    testPropertyEscapes(/^\P{scx=Ol_Chiki}+$/u, nonMatchSymbols, '\\P{scx=Ol_Chiki}');
    testPropertyEscapes(/^\P{scx=Olck}+$/u, nonMatchSymbols, '\\P{scx=Olck}');
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