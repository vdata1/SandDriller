try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1548,
            1567,
            1600,
            1648,
            7672
        ],
        ranges: [
            [
                1563,
                1564
            ],
            [
                1611,
                1621
            ],
            [
                1792,
                1805
            ],
            [
                1807,
                1866
            ],
            [
                1869,
                1871
            ],
            [
                2144,
                2154
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Syriac}+$/u, matchSymbols, '\\p{Script_Extensions=Syriac}');
    testPropertyEscapes(/^\p{Script_Extensions=Syrc}+$/u, matchSymbols, '\\p{Script_Extensions=Syrc}');
    testPropertyEscapes(/^\p{scx=Syriac}+$/u, matchSymbols, '\\p{scx=Syriac}');
    testPropertyEscapes(/^\p{scx=Syrc}+$/u, matchSymbols, '\\p{scx=Syrc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [1806],
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
                1599
            ],
            [
                1601,
                1610
            ],
            [
                1622,
                1647
            ],
            [
                1649,
                1791
            ],
            [
                1867,
                1868
            ],
            [
                1872,
                2143
            ],
            [
                2155,
                7671
            ],
            [
                7673,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Syriac}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Syriac}');
    testPropertyEscapes(/^\P{Script_Extensions=Syrc}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Syrc}');
    testPropertyEscapes(/^\P{scx=Syriac}+$/u, nonMatchSymbols, '\\P{scx=Syriac}');
    testPropertyEscapes(/^\P{scx=Syrc}+$/u, nonMatchSymbols, '\\P{scx=Syrc}');
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