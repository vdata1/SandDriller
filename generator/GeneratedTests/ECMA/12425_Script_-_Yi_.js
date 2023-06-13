try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                40960,
                42124
            ],
            [
                42128,
                42182
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Yi}+$/u, matchSymbols, '\\p{Script=Yi}');
    testPropertyEscapes(/^\p{Script=Yiii}+$/u, matchSymbols, '\\p{Script=Yiii}');
    testPropertyEscapes(/^\p{sc=Yi}+$/u, matchSymbols, '\\p{sc=Yi}');
    testPropertyEscapes(/^\p{sc=Yiii}+$/u, matchSymbols, '\\p{sc=Yiii}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                40959
            ],
            [
                42125,
                42127
            ],
            [
                42183,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Yi}+$/u, nonMatchSymbols, '\\P{Script=Yi}');
    testPropertyEscapes(/^\P{Script=Yiii}+$/u, nonMatchSymbols, '\\P{Script=Yiii}');
    testPropertyEscapes(/^\P{sc=Yi}+$/u, nonMatchSymbols, '\\P{sc=Yi}');
    testPropertyEscapes(/^\P{sc=Yiii}+$/u, nonMatchSymbols, '\\P{sc=Yiii}');
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