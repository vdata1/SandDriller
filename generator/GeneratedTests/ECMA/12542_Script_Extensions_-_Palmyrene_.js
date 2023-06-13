try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                67680,
                67711
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Palmyrene}+$/u, matchSymbols, '\\p{Script_Extensions=Palmyrene}');
    testPropertyEscapes(/^\p{Script_Extensions=Palm}+$/u, matchSymbols, '\\p{Script_Extensions=Palm}');
    testPropertyEscapes(/^\p{scx=Palmyrene}+$/u, matchSymbols, '\\p{scx=Palmyrene}');
    testPropertyEscapes(/^\p{scx=Palm}+$/u, matchSymbols, '\\p{scx=Palm}');
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
                67679
            ],
            [
                67712,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Palmyrene}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Palmyrene}');
    testPropertyEscapes(/^\P{Script_Extensions=Palm}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Palm}');
    testPropertyEscapes(/^\P{scx=Palmyrene}+$/u, nonMatchSymbols, '\\P{scx=Palmyrene}');
    testPropertyEscapes(/^\P{scx=Palm}+$/u, nonMatchSymbols, '\\P{scx=Palm}');
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