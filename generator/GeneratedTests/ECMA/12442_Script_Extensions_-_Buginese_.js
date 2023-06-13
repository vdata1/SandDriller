try {
    const matchSymbols = buildString({
        loneCodePoints: [43471],
        ranges: [
            [
                6656,
                6683
            ],
            [
                6686,
                6687
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Buginese}+$/u, matchSymbols, '\\p{Script_Extensions=Buginese}');
    testPropertyEscapes(/^\p{Script_Extensions=Bugi}+$/u, matchSymbols, '\\p{Script_Extensions=Bugi}');
    testPropertyEscapes(/^\p{scx=Buginese}+$/u, matchSymbols, '\\p{scx=Buginese}');
    testPropertyEscapes(/^\p{scx=Bugi}+$/u, matchSymbols, '\\p{scx=Bugi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6655
            ],
            [
                6684,
                6685
            ],
            [
                6688,
                43470
            ],
            [
                43472,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Buginese}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Buginese}');
    testPropertyEscapes(/^\P{Script_Extensions=Bugi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bugi}');
    testPropertyEscapes(/^\P{scx=Buginese}+$/u, nonMatchSymbols, '\\P{scx=Buginese}');
    testPropertyEscapes(/^\P{scx=Bugi}+$/u, nonMatchSymbols, '\\P{scx=Bugi}');
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