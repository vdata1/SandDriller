try {
    const matchSymbols = buildString({
        loneCodePoints: [
            67592,
            67644,
            67647
        ],
        ranges: [
            [
                67584,
                67589
            ],
            [
                67594,
                67637
            ],
            [
                67639,
                67640
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Cypriot}+$/u, matchSymbols, '\\p{Script=Cypriot}');
    testPropertyEscapes(/^\p{Script=Cprt}+$/u, matchSymbols, '\\p{Script=Cprt}');
    testPropertyEscapes(/^\p{sc=Cypriot}+$/u, matchSymbols, '\\p{sc=Cypriot}');
    testPropertyEscapes(/^\p{sc=Cprt}+$/u, matchSymbols, '\\p{sc=Cprt}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            67593,
            67638
        ],
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
                67583
            ],
            [
                67590,
                67591
            ],
            [
                67641,
                67643
            ],
            [
                67645,
                67646
            ],
            [
                67648,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Cypriot}+$/u, nonMatchSymbols, '\\P{Script=Cypriot}');
    testPropertyEscapes(/^\P{Script=Cprt}+$/u, nonMatchSymbols, '\\P{Script=Cprt}');
    testPropertyEscapes(/^\P{sc=Cypriot}+$/u, nonMatchSymbols, '\\P{sc=Cypriot}');
    testPropertyEscapes(/^\P{sc=Cprt}+$/u, nonMatchSymbols, '\\P{sc=Cprt}');
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