try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1548,
            1567,
            65010,
            65021
        ],
        ranges: [
            [
                1563,
                1564
            ],
            [
                1632,
                1641
            ],
            [
                1920,
                1969
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Thaana}+$/u, matchSymbols, '\\p{Script_Extensions=Thaana}');
    testPropertyEscapes(/^\p{Script_Extensions=Thaa}+$/u, matchSymbols, '\\p{Script_Extensions=Thaa}');
    testPropertyEscapes(/^\p{scx=Thaana}+$/u, matchSymbols, '\\p{scx=Thaana}');
    testPropertyEscapes(/^\p{scx=Thaa}+$/u, matchSymbols, '\\p{scx=Thaa}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                1565,
                1566
            ],
            [
                1568,
                1631
            ],
            [
                1642,
                1919
            ],
            [
                1970,
                56319
            ],
            [
                57344,
                65009
            ],
            [
                65011,
                65020
            ],
            [
                65022,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Thaana}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Thaana}');
    testPropertyEscapes(/^\P{Script_Extensions=Thaa}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Thaa}');
    testPropertyEscapes(/^\P{scx=Thaana}+$/u, nonMatchSymbols, '\\P{scx=Thaana}');
    testPropertyEscapes(/^\P{scx=Thaa}+$/u, nonMatchSymbols, '\\P{scx=Thaa}');
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