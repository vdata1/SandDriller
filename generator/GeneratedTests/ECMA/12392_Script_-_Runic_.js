try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5792,
                5866
            ],
            [
                5870,
                5880
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Runic}+$/u, matchSymbols, '\\p{Script=Runic}');
    testPropertyEscapes(/^\p{Script=Runr}+$/u, matchSymbols, '\\p{Script=Runr}');
    testPropertyEscapes(/^\p{sc=Runic}+$/u, matchSymbols, '\\p{sc=Runic}');
    testPropertyEscapes(/^\p{sc=Runr}+$/u, matchSymbols, '\\p{sc=Runr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5791
            ],
            [
                5867,
                5869
            ],
            [
                5881,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Runic}+$/u, nonMatchSymbols, '\\P{Script=Runic}');
    testPropertyEscapes(/^\P{Script=Runr}+$/u, nonMatchSymbols, '\\P{Script=Runr}');
    testPropertyEscapes(/^\P{sc=Runic}+$/u, nonMatchSymbols, '\\P{sc=Runic}');
    testPropertyEscapes(/^\P{sc=Runr}+$/u, nonMatchSymbols, '\\P{sc=Runr}');
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