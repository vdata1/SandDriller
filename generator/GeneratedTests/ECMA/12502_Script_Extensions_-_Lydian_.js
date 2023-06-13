try {
    const matchSymbols = buildString({
        loneCodePoints: [67903],
        ranges: [[
                67872,
                67897
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Lydian}+$/u, matchSymbols, '\\p{Script_Extensions=Lydian}');
    testPropertyEscapes(/^\p{Script_Extensions=Lydi}+$/u, matchSymbols, '\\p{Script_Extensions=Lydi}');
    testPropertyEscapes(/^\p{scx=Lydian}+$/u, matchSymbols, '\\p{scx=Lydian}');
    testPropertyEscapes(/^\p{scx=Lydi}+$/u, matchSymbols, '\\p{scx=Lydi}');
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
                67871
            ],
            [
                67898,
                67902
            ],
            [
                67904,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Lydian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lydian}');
    testPropertyEscapes(/^\P{Script_Extensions=Lydi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lydi}');
    testPropertyEscapes(/^\P{scx=Lydian}+$/u, nonMatchSymbols, '\\P{scx=Lydian}');
    testPropertyEscapes(/^\P{scx=Lydi}+$/u, nonMatchSymbols, '\\P{scx=Lydi}');
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