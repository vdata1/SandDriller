try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                120832,
                121483
            ],
            [
                121499,
                121503
            ],
            [
                121505,
                121519
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=SignWriting}+$/u, matchSymbols, '\\p{Script=SignWriting}');
    testPropertyEscapes(/^\p{Script=Sgnw}+$/u, matchSymbols, '\\p{Script=Sgnw}');
    testPropertyEscapes(/^\p{sc=SignWriting}+$/u, matchSymbols, '\\p{sc=SignWriting}');
    testPropertyEscapes(/^\p{sc=Sgnw}+$/u, matchSymbols, '\\p{sc=Sgnw}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [121504],
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
                120831
            ],
            [
                121484,
                121498
            ],
            [
                121520,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=SignWriting}+$/u, nonMatchSymbols, '\\P{Script=SignWriting}');
    testPropertyEscapes(/^\P{Script=Sgnw}+$/u, nonMatchSymbols, '\\P{Script=Sgnw}');
    testPropertyEscapes(/^\P{sc=SignWriting}+$/u, nonMatchSymbols, '\\P{sc=SignWriting}');
    testPropertyEscapes(/^\P{sc=Sgnw}+$/u, nonMatchSymbols, '\\P{sc=Sgnw}');
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