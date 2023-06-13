try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                1329,
                1366
            ],
            [
                1369,
                1418
            ],
            [
                1421,
                1423
            ],
            [
                64275,
                64279
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Armenian}+$/u, matchSymbols, '\\p{Script_Extensions=Armenian}');
    testPropertyEscapes(/^\p{Script_Extensions=Armn}+$/u, matchSymbols, '\\p{Script_Extensions=Armn}');
    testPropertyEscapes(/^\p{scx=Armenian}+$/u, matchSymbols, '\\p{scx=Armenian}');
    testPropertyEscapes(/^\p{scx=Armn}+$/u, matchSymbols, '\\p{scx=Armn}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1328
            ],
            [
                1367,
                1368
            ],
            [
                1419,
                1420
            ],
            [
                1424,
                56319
            ],
            [
                57344,
                64274
            ],
            [
                64280,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Armenian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Armenian}');
    testPropertyEscapes(/^\P{Script_Extensions=Armn}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Armn}');
    testPropertyEscapes(/^\P{scx=Armenian}+$/u, nonMatchSymbols, '\\P{scx=Armenian}');
    testPropertyEscapes(/^\P{scx=Armn}+$/u, nonMatchSymbols, '\\P{scx=Armn}');
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