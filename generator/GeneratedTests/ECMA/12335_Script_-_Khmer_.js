try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6016,
                6109
            ],
            [
                6112,
                6121
            ],
            [
                6128,
                6137
            ],
            [
                6624,
                6655
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Khmer}+$/u, matchSymbols, '\\p{Script=Khmer}');
    testPropertyEscapes(/^\p{Script=Khmr}+$/u, matchSymbols, '\\p{Script=Khmr}');
    testPropertyEscapes(/^\p{sc=Khmer}+$/u, matchSymbols, '\\p{sc=Khmer}');
    testPropertyEscapes(/^\p{sc=Khmr}+$/u, matchSymbols, '\\p{sc=Khmr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6015
            ],
            [
                6110,
                6111
            ],
            [
                6122,
                6127
            ],
            [
                6138,
                6623
            ],
            [
                6656,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Khmer}+$/u, nonMatchSymbols, '\\P{Script=Khmer}');
    testPropertyEscapes(/^\P{Script=Khmr}+$/u, nonMatchSymbols, '\\P{Script=Khmr}');
    testPropertyEscapes(/^\P{sc=Khmer}+$/u, nonMatchSymbols, '\\P{sc=Khmer}');
    testPropertyEscapes(/^\P{sc=Khmr}+$/u, nonMatchSymbols, '\\P{sc=Khmr}');
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