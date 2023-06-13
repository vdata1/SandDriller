try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                93760,
                93850
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Medefaidrin}+$/u, matchSymbols, '\\p{Script_Extensions=Medefaidrin}');
    testPropertyEscapes(/^\p{Script_Extensions=Medf}+$/u, matchSymbols, '\\p{Script_Extensions=Medf}');
    testPropertyEscapes(/^\p{scx=Medefaidrin}+$/u, matchSymbols, '\\p{scx=Medefaidrin}');
    testPropertyEscapes(/^\p{scx=Medf}+$/u, matchSymbols, '\\p{scx=Medf}');
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
                93759
            ],
            [
                93851,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Medefaidrin}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Medefaidrin}');
    testPropertyEscapes(/^\P{Script_Extensions=Medf}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Medf}');
    testPropertyEscapes(/^\P{scx=Medefaidrin}+$/u, nonMatchSymbols, '\\P{scx=Medefaidrin}');
    testPropertyEscapes(/^\P{scx=Medf}+$/u, nonMatchSymbols, '\\P{scx=Medf}');
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