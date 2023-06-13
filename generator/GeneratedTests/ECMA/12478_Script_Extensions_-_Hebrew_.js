try {
    const matchSymbols = buildString({
        loneCodePoints: [64318],
        ranges: [
            [
                1425,
                1479
            ],
            [
                1488,
                1514
            ],
            [
                1519,
                1524
            ],
            [
                64285,
                64310
            ],
            [
                64312,
                64316
            ],
            [
                64320,
                64321
            ],
            [
                64323,
                64324
            ],
            [
                64326,
                64335
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Hebrew}+$/u, matchSymbols, '\\p{Script_Extensions=Hebrew}');
    testPropertyEscapes(/^\p{Script_Extensions=Hebr}+$/u, matchSymbols, '\\p{Script_Extensions=Hebr}');
    testPropertyEscapes(/^\p{scx=Hebrew}+$/u, matchSymbols, '\\p{scx=Hebrew}');
    testPropertyEscapes(/^\p{scx=Hebr}+$/u, matchSymbols, '\\p{scx=Hebr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            64311,
            64317,
            64319,
            64322,
            64325
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1424
            ],
            [
                1480,
                1487
            ],
            [
                1515,
                1518
            ],
            [
                1525,
                56319
            ],
            [
                57344,
                64284
            ],
            [
                64336,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Hebrew}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hebrew}');
    testPropertyEscapes(/^\P{Script_Extensions=Hebr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hebr}');
    testPropertyEscapes(/^\P{scx=Hebrew}+$/u, nonMatchSymbols, '\\P{scx=Hebrew}');
    testPropertyEscapes(/^\P{scx=Hebr}+$/u, nonMatchSymbols, '\\P{scx=Hebr}');
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