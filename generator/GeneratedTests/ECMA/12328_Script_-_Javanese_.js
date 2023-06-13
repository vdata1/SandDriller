try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43392,
                43469
            ],
            [
                43472,
                43481
            ],
            [
                43486,
                43487
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Javanese}+$/u, matchSymbols, '\\p{Script=Javanese}');
    testPropertyEscapes(/^\p{Script=Java}+$/u, matchSymbols, '\\p{Script=Java}');
    testPropertyEscapes(/^\p{sc=Javanese}+$/u, matchSymbols, '\\p{sc=Javanese}');
    testPropertyEscapes(/^\p{sc=Java}+$/u, matchSymbols, '\\p{sc=Java}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43391
            ],
            [
                43470,
                43471
            ],
            [
                43482,
                43485
            ],
            [
                43488,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Javanese}+$/u, nonMatchSymbols, '\\P{Script=Javanese}');
    testPropertyEscapes(/^\P{Script=Java}+$/u, nonMatchSymbols, '\\P{Script=Java}');
    testPropertyEscapes(/^\P{sc=Javanese}+$/u, nonMatchSymbols, '\\P{sc=Javanese}');
    testPropertyEscapes(/^\P{sc=Java}+$/u, nonMatchSymbols, '\\P{sc=Java}');
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