try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5888,
                5900
            ],
            [
                5902,
                5908
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tagalog}+$/u, matchSymbols, '\\p{Script=Tagalog}');
    testPropertyEscapes(/^\p{Script=Tglg}+$/u, matchSymbols, '\\p{Script=Tglg}');
    testPropertyEscapes(/^\p{sc=Tagalog}+$/u, matchSymbols, '\\p{sc=Tagalog}');
    testPropertyEscapes(/^\p{sc=Tglg}+$/u, matchSymbols, '\\p{sc=Tglg}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [5901],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5887
            ],
            [
                5909,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Tagalog}+$/u, nonMatchSymbols, '\\P{Script=Tagalog}');
    testPropertyEscapes(/^\P{Script=Tglg}+$/u, nonMatchSymbols, '\\P{Script=Tglg}');
    testPropertyEscapes(/^\P{sc=Tagalog}+$/u, nonMatchSymbols, '\\P{sc=Tagalog}');
    testPropertyEscapes(/^\P{sc=Tglg}+$/u, nonMatchSymbols, '\\P{sc=Tglg}');
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