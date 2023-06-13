try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                3585,
                3642
            ],
            [
                3648,
                3675
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Thai}+$/u, matchSymbols, '\\p{Script=Thai}');
    testPropertyEscapes(/^\p{Script=Thai}+$/u, matchSymbols, '\\p{Script=Thai}');
    testPropertyEscapes(/^\p{sc=Thai}+$/u, matchSymbols, '\\p{sc=Thai}');
    testPropertyEscapes(/^\p{sc=Thai}+$/u, matchSymbols, '\\p{sc=Thai}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3584
            ],
            [
                3643,
                3647
            ],
            [
                3676,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Thai}+$/u, nonMatchSymbols, '\\P{Script=Thai}');
    testPropertyEscapes(/^\P{Script=Thai}+$/u, nonMatchSymbols, '\\P{Script=Thai}');
    testPropertyEscapes(/^\P{sc=Thai}+$/u, nonMatchSymbols, '\\P{sc=Thai}');
    testPropertyEscapes(/^\P{sc=Thai}+$/u, nonMatchSymbols, '\\P{sc=Thai}');
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