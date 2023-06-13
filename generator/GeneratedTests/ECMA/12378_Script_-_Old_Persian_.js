try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                66464,
                66499
            ],
            [
                66504,
                66517
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Old_Persian}+$/u, matchSymbols, '\\p{Script=Old_Persian}');
    testPropertyEscapes(/^\p{Script=Xpeo}+$/u, matchSymbols, '\\p{Script=Xpeo}');
    testPropertyEscapes(/^\p{sc=Old_Persian}+$/u, matchSymbols, '\\p{sc=Old_Persian}');
    testPropertyEscapes(/^\p{sc=Xpeo}+$/u, matchSymbols, '\\p{sc=Xpeo}');
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
                66463
            ],
            [
                66500,
                66503
            ],
            [
                66518,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Old_Persian}+$/u, nonMatchSymbols, '\\P{Script=Old_Persian}');
    testPropertyEscapes(/^\P{Script=Xpeo}+$/u, nonMatchSymbols, '\\P{Script=Xpeo}');
    testPropertyEscapes(/^\P{sc=Old_Persian}+$/u, nonMatchSymbols, '\\P{sc=Old_Persian}');
    testPropertyEscapes(/^\P{sc=Xpeo}+$/u, nonMatchSymbols, '\\P{sc=Xpeo}');
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