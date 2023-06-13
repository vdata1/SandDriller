try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                5760,
                5788
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Ogham}+$/u, matchSymbols, '\\p{Script_Extensions=Ogham}');
    testPropertyEscapes(/^\p{Script_Extensions=Ogam}+$/u, matchSymbols, '\\p{Script_Extensions=Ogam}');
    testPropertyEscapes(/^\p{scx=Ogham}+$/u, matchSymbols, '\\p{scx=Ogham}');
    testPropertyEscapes(/^\p{scx=Ogam}+$/u, matchSymbols, '\\p{scx=Ogam}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5759
            ],
            [
                5789,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Ogham}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Ogham}');
    testPropertyEscapes(/^\P{Script_Extensions=Ogam}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Ogam}');
    testPropertyEscapes(/^\P{scx=Ogham}+$/u, nonMatchSymbols, '\\P{scx=Ogham}');
    testPropertyEscapes(/^\P{scx=Ogam}+$/u, nonMatchSymbols, '\\P{scx=Ogam}');
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