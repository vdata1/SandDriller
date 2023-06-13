try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                10240,
                10495
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Braille}+$/u, matchSymbols, '\\p{Script_Extensions=Braille}');
    testPropertyEscapes(/^\p{Script_Extensions=Brai}+$/u, matchSymbols, '\\p{Script_Extensions=Brai}');
    testPropertyEscapes(/^\p{scx=Braille}+$/u, matchSymbols, '\\p{scx=Braille}');
    testPropertyEscapes(/^\p{scx=Brai}+$/u, matchSymbols, '\\p{scx=Brai}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                10239
            ],
            [
                10496,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Braille}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Braille}');
    testPropertyEscapes(/^\P{Script_Extensions=Brai}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Brai}');
    testPropertyEscapes(/^\P{scx=Braille}+$/u, nonMatchSymbols, '\\P{scx=Braille}');
    testPropertyEscapes(/^\P{scx=Brai}+$/u, nonMatchSymbols, '\\P{scx=Brai}');
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