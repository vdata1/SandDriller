try {
    const matchSymbols = buildString({
        loneCodePoints: [94176],
        ranges: [
            [
                94208,
                100343
            ],
            [
                100352,
                101119
            ],
            [
                101632,
                101640
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tangut}+$/u, matchSymbols, '\\p{Script=Tangut}');
    testPropertyEscapes(/^\p{Script=Tang}+$/u, matchSymbols, '\\p{Script=Tang}');
    testPropertyEscapes(/^\p{sc=Tangut}+$/u, matchSymbols, '\\p{sc=Tangut}');
    testPropertyEscapes(/^\p{sc=Tang}+$/u, matchSymbols, '\\p{sc=Tang}');
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
                94175
            ],
            [
                94177,
                94207
            ],
            [
                100344,
                100351
            ],
            [
                101120,
                101631
            ],
            [
                101641,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Tangut}+$/u, nonMatchSymbols, '\\P{Script=Tangut}');
    testPropertyEscapes(/^\P{Script=Tang}+$/u, nonMatchSymbols, '\\P{Script=Tang}');
    testPropertyEscapes(/^\P{sc=Tangut}+$/u, nonMatchSymbols, '\\P{sc=Tangut}');
    testPropertyEscapes(/^\P{sc=Tang}+$/u, nonMatchSymbols, '\\P{sc=Tang}');
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