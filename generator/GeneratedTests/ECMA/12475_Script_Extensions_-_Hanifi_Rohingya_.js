try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1548,
            1563,
            1567,
            1600,
            1748
        ],
        ranges: [
            [
                68864,
                68903
            ],
            [
                68912,
                68921
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Hanifi_Rohingya}+$/u, matchSymbols, '\\p{Script_Extensions=Hanifi_Rohingya}');
    testPropertyEscapes(/^\p{Script_Extensions=Rohg}+$/u, matchSymbols, '\\p{Script_Extensions=Rohg}');
    testPropertyEscapes(/^\p{scx=Hanifi_Rohingya}+$/u, matchSymbols, '\\p{scx=Hanifi_Rohingya}');
    testPropertyEscapes(/^\p{scx=Rohg}+$/u, matchSymbols, '\\p{scx=Rohg}');
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
                1564,
                1566
            ],
            [
                1568,
                1599
            ],
            [
                1601,
                1747
            ],
            [
                1749,
                56319
            ],
            [
                57344,
                68863
            ],
            [
                68904,
                68911
            ],
            [
                68922,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Hanifi_Rohingya}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hanifi_Rohingya}');
    testPropertyEscapes(/^\P{Script_Extensions=Rohg}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Rohg}');
    testPropertyEscapes(/^\P{scx=Hanifi_Rohingya}+$/u, nonMatchSymbols, '\\P{scx=Hanifi_Rohingya}');
    testPropertyEscapes(/^\P{scx=Rohg}+$/u, nonMatchSymbols, '\\P{scx=Rohg}');
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