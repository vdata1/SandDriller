try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6016,
                6109
            ],
            [
                6112,
                6121
            ],
            [
                6128,
                6137
            ],
            [
                6624,
                6655
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Khmer}+$/u, matchSymbols, '\\p{Script_Extensions=Khmer}');
    testPropertyEscapes(/^\p{Script_Extensions=Khmr}+$/u, matchSymbols, '\\p{Script_Extensions=Khmr}');
    testPropertyEscapes(/^\p{scx=Khmer}+$/u, matchSymbols, '\\p{scx=Khmer}');
    testPropertyEscapes(/^\p{scx=Khmr}+$/u, matchSymbols, '\\p{scx=Khmr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6015
            ],
            [
                6110,
                6111
            ],
            [
                6122,
                6127
            ],
            [
                6138,
                6623
            ],
            [
                6656,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Khmer}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Khmer}');
    testPropertyEscapes(/^\P{Script_Extensions=Khmr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Khmr}');
    testPropertyEscapes(/^\P{scx=Khmer}+$/u, nonMatchSymbols, '\\P{scx=Khmer}');
    testPropertyEscapes(/^\P{scx=Khmr}+$/u, nonMatchSymbols, '\\P{scx=Khmr}');
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