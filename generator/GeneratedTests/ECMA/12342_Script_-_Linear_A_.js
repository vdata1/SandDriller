try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                67072,
                67382
            ],
            [
                67392,
                67413
            ],
            [
                67424,
                67431
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Linear_A}+$/u, matchSymbols, '\\p{Script=Linear_A}');
    testPropertyEscapes(/^\p{Script=Lina}+$/u, matchSymbols, '\\p{Script=Lina}');
    testPropertyEscapes(/^\p{sc=Linear_A}+$/u, matchSymbols, '\\p{sc=Linear_A}');
    testPropertyEscapes(/^\p{sc=Lina}+$/u, matchSymbols, '\\p{sc=Lina}');
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
                67071
            ],
            [
                67383,
                67391
            ],
            [
                67414,
                67423
            ],
            [
                67432,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Linear_A}+$/u, nonMatchSymbols, '\\P{Script=Linear_A}');
    testPropertyEscapes(/^\P{Script=Lina}+$/u, nonMatchSymbols, '\\P{Script=Lina}');
    testPropertyEscapes(/^\P{sc=Linear_A}+$/u, nonMatchSymbols, '\\P{sc=Linear_A}');
    testPropertyEscapes(/^\P{sc=Lina}+$/u, nonMatchSymbols, '\\P{sc=Lina}');
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