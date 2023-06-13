try {
    const matchSymbols = buildString({
        loneCodePoints: [123647],
        ranges: [[
                123584,
                123641
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Wancho}+$/u, matchSymbols, '\\p{Script_Extensions=Wancho}');
    testPropertyEscapes(/^\p{Script_Extensions=Wcho}+$/u, matchSymbols, '\\p{Script_Extensions=Wcho}');
    testPropertyEscapes(/^\p{scx=Wancho}+$/u, matchSymbols, '\\p{scx=Wancho}');
    testPropertyEscapes(/^\p{scx=Wcho}+$/u, matchSymbols, '\\p{scx=Wcho}');
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
                123583
            ],
            [
                123642,
                123646
            ],
            [
                123648,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Wancho}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Wancho}');
    testPropertyEscapes(/^\P{Script_Extensions=Wcho}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Wcho}');
    testPropertyEscapes(/^\P{scx=Wancho}+$/u, nonMatchSymbols, '\\P{scx=Wancho}');
    testPropertyEscapes(/^\P{scx=Wcho}+$/u, nonMatchSymbols, '\\P{scx=Wcho}');
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