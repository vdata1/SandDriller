try {
    const matchSymbols = buildString({
        loneCodePoints: [],
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
    testPropertyEscapes(/^\p{Script=Manichaean}+$/u, matchSymbols, '\\p{Script=Manichaean}');
    testPropertyEscapes(/^\p{Script=Mani}+$/u, matchSymbols, '\\p{Script=Mani}');
    testPropertyEscapes(/^\p{sc=Manichaean}+$/u, matchSymbols, '\\p{sc=Manichaean}');
    testPropertyEscapes(/^\p{sc=Mani}+$/u, matchSymbols, '\\p{sc=Mani}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
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
    testPropertyEscapes(/^\P{Script=Manichaean}+$/u, nonMatchSymbols, '\\P{Script=Manichaean}');
    testPropertyEscapes(/^\P{Script=Mani}+$/u, nonMatchSymbols, '\\P{Script=Mani}');
    testPropertyEscapes(/^\P{sc=Manichaean}+$/u, nonMatchSymbols, '\\P{sc=Manichaean}');
    testPropertyEscapes(/^\P{sc=Mani}+$/u, nonMatchSymbols, '\\P{sc=Mani}');
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