try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5024,
                5109
            ],
            [
                5112,
                5117
            ],
            [
                43888,
                43967
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Cherokee}+$/u, matchSymbols, '\\p{Script=Cherokee}');
    testPropertyEscapes(/^\p{Script=Cher}+$/u, matchSymbols, '\\p{Script=Cher}');
    testPropertyEscapes(/^\p{sc=Cherokee}+$/u, matchSymbols, '\\p{sc=Cherokee}');
    testPropertyEscapes(/^\p{sc=Cher}+$/u, matchSymbols, '\\p{sc=Cher}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5023
            ],
            [
                5110,
                5111
            ],
            [
                5118,
                43887
            ],
            [
                43968,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Cherokee}+$/u, nonMatchSymbols, '\\P{Script=Cherokee}');
    testPropertyEscapes(/^\P{Script=Cher}+$/u, nonMatchSymbols, '\\P{Script=Cher}');
    testPropertyEscapes(/^\P{sc=Cherokee}+$/u, nonMatchSymbols, '\\P{sc=Cherokee}');
    testPropertyEscapes(/^\P{sc=Cher}+$/u, nonMatchSymbols, '\\P{sc=Cher}');
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