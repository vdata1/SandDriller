try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6912,
                6987
            ],
            [
                6992,
                7036
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Balinese}+$/u, matchSymbols, '\\p{Script_Extensions=Balinese}');
    testPropertyEscapes(/^\p{Script_Extensions=Bali}+$/u, matchSymbols, '\\p{Script_Extensions=Bali}');
    testPropertyEscapes(/^\p{scx=Balinese}+$/u, matchSymbols, '\\p{scx=Balinese}');
    testPropertyEscapes(/^\p{scx=Bali}+$/u, matchSymbols, '\\p{scx=Bali}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6911
            ],
            [
                6988,
                6991
            ],
            [
                7037,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Balinese}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Balinese}');
    testPropertyEscapes(/^\P{Script_Extensions=Bali}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bali}');
    testPropertyEscapes(/^\P{scx=Balinese}+$/u, nonMatchSymbols, '\\P{scx=Balinese}');
    testPropertyEscapes(/^\P{scx=Bali}+$/u, nonMatchSymbols, '\\P{scx=Bali}');
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