try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2048,
                2093
            ],
            [
                2096,
                2110
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Samaritan}+$/u, matchSymbols, '\\p{Script=Samaritan}');
    testPropertyEscapes(/^\p{Script=Samr}+$/u, matchSymbols, '\\p{Script=Samr}');
    testPropertyEscapes(/^\p{sc=Samaritan}+$/u, matchSymbols, '\\p{sc=Samaritan}');
    testPropertyEscapes(/^\p{sc=Samr}+$/u, matchSymbols, '\\p{sc=Samr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2047
            ],
            [
                2094,
                2095
            ],
            [
                2111,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Samaritan}+$/u, nonMatchSymbols, '\\P{Script=Samaritan}');
    testPropertyEscapes(/^\P{Script=Samr}+$/u, nonMatchSymbols, '\\P{Script=Samr}');
    testPropertyEscapes(/^\P{sc=Samaritan}+$/u, nonMatchSymbols, '\\P{sc=Samaritan}');
    testPropertyEscapes(/^\P{sc=Samr}+$/u, nonMatchSymbols, '\\P{sc=Samr}');
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