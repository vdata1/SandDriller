try {
    const matchSymbols = buildString({
        loneCodePoints: [1600],
        ranges: [
            [
                68288,
                68326
            ],
            [
                68331,
                68342
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Manichaean}+$/u, matchSymbols, '\\p{Script_Extensions=Manichaean}');
    testPropertyEscapes(/^\p{Script_Extensions=Mani}+$/u, matchSymbols, '\\p{Script_Extensions=Mani}');
    testPropertyEscapes(/^\p{scx=Manichaean}+$/u, matchSymbols, '\\p{scx=Manichaean}');
    testPropertyEscapes(/^\p{scx=Mani}+$/u, matchSymbols, '\\p{scx=Mani}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1599
            ],
            [
                1601,
                56319
            ],
            [
                57344,
                68287
            ],
            [
                68327,
                68330
            ],
            [
                68343,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Manichaean}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Manichaean}');
    testPropertyEscapes(/^\P{Script_Extensions=Mani}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mani}');
    testPropertyEscapes(/^\P{scx=Manichaean}+$/u, nonMatchSymbols, '\\P{scx=Manichaean}');
    testPropertyEscapes(/^\P{scx=Mani}+$/u, nonMatchSymbols, '\\P{scx=Mani}');
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