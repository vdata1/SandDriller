try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                746,
                747
            ],
            [
                12549,
                12591
            ],
            [
                12704,
                12735
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Bopomofo}+$/u, matchSymbols, '\\p{Script=Bopomofo}');
    testPropertyEscapes(/^\p{Script=Bopo}+$/u, matchSymbols, '\\p{Script=Bopo}');
    testPropertyEscapes(/^\p{sc=Bopomofo}+$/u, matchSymbols, '\\p{sc=Bopomofo}');
    testPropertyEscapes(/^\p{sc=Bopo}+$/u, matchSymbols, '\\p{sc=Bopo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                745
            ],
            [
                748,
                12548
            ],
            [
                12592,
                12703
            ],
            [
                12736,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Bopomofo}+$/u, nonMatchSymbols, '\\P{Script=Bopomofo}');
    testPropertyEscapes(/^\P{Script=Bopo}+$/u, nonMatchSymbols, '\\P{Script=Bopo}');
    testPropertyEscapes(/^\P{sc=Bopomofo}+$/u, nonMatchSymbols, '\\P{sc=Bopomofo}');
    testPropertyEscapes(/^\P{sc=Bopo}+$/u, nonMatchSymbols, '\\P{sc=Bopo}');
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