try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43136,
                43205
            ],
            [
                43214,
                43225
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Saurashtra}+$/u, matchSymbols, '\\p{Script=Saurashtra}');
    testPropertyEscapes(/^\p{Script=Saur}+$/u, matchSymbols, '\\p{Script=Saur}');
    testPropertyEscapes(/^\p{sc=Saurashtra}+$/u, matchSymbols, '\\p{sc=Saurashtra}');
    testPropertyEscapes(/^\p{sc=Saur}+$/u, matchSymbols, '\\p{sc=Saur}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43135
            ],
            [
                43206,
                43213
            ],
            [
                43226,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Saurashtra}+$/u, nonMatchSymbols, '\\P{Script=Saurashtra}');
    testPropertyEscapes(/^\P{Script=Saur}+$/u, nonMatchSymbols, '\\P{Script=Saur}');
    testPropertyEscapes(/^\P{sc=Saurashtra}+$/u, nonMatchSymbols, '\\P{sc=Saurashtra}');
    testPropertyEscapes(/^\P{sc=Saur}+$/u, nonMatchSymbols, '\\P{sc=Saur}');
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