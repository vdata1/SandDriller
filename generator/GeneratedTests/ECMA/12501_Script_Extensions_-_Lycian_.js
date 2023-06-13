try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66176,
                66204
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Lycian}+$/u, matchSymbols, '\\p{Script_Extensions=Lycian}');
    testPropertyEscapes(/^\p{Script_Extensions=Lyci}+$/u, matchSymbols, '\\p{Script_Extensions=Lyci}');
    testPropertyEscapes(/^\p{scx=Lycian}+$/u, matchSymbols, '\\p{scx=Lycian}');
    testPropertyEscapes(/^\p{scx=Lyci}+$/u, matchSymbols, '\\p{scx=Lyci}');
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
                66175
            ],
            [
                66205,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Lycian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lycian}');
    testPropertyEscapes(/^\P{Script_Extensions=Lyci}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lyci}');
    testPropertyEscapes(/^\P{scx=Lycian}+$/u, nonMatchSymbols, '\\P{scx=Lycian}');
    testPropertyEscapes(/^\P{scx=Lyci}+$/u, nonMatchSymbols, '\\P{scx=Lyci}');
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