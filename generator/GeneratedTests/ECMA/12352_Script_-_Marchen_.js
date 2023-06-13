try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                72816,
                72847
            ],
            [
                72850,
                72871
            ],
            [
                72873,
                72886
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Marchen}+$/u, matchSymbols, '\\p{Script=Marchen}');
    testPropertyEscapes(/^\p{Script=Marc}+$/u, matchSymbols, '\\p{Script=Marc}');
    testPropertyEscapes(/^\p{sc=Marchen}+$/u, matchSymbols, '\\p{sc=Marchen}');
    testPropertyEscapes(/^\p{sc=Marc}+$/u, matchSymbols, '\\p{sc=Marc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [72872],
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
                72815
            ],
            [
                72848,
                72849
            ],
            [
                72887,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Marchen}+$/u, nonMatchSymbols, '\\P{Script=Marchen}');
    testPropertyEscapes(/^\P{Script=Marc}+$/u, nonMatchSymbols, '\\P{Script=Marc}');
    testPropertyEscapes(/^\P{sc=Marchen}+$/u, nonMatchSymbols, '\\P{sc=Marchen}');
    testPropertyEscapes(/^\P{sc=Marc}+$/u, nonMatchSymbols, '\\P{sc=Marc}');
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