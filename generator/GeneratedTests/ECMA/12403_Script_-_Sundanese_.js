try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                7040,
                7103
            ],
            [
                7360,
                7367
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Sundanese}+$/u, matchSymbols, '\\p{Script=Sundanese}');
    testPropertyEscapes(/^\p{Script=Sund}+$/u, matchSymbols, '\\p{Script=Sund}');
    testPropertyEscapes(/^\p{sc=Sundanese}+$/u, matchSymbols, '\\p{sc=Sundanese}');
    testPropertyEscapes(/^\p{sc=Sund}+$/u, matchSymbols, '\\p{sc=Sund}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7039
            ],
            [
                7104,
                7359
            ],
            [
                7368,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Sundanese}+$/u, nonMatchSymbols, '\\P{Script=Sundanese}');
    testPropertyEscapes(/^\P{Script=Sund}+$/u, nonMatchSymbols, '\\P{Script=Sund}');
    testPropertyEscapes(/^\P{sc=Sundanese}+$/u, nonMatchSymbols, '\\P{sc=Sundanese}');
    testPropertyEscapes(/^\P{sc=Sund}+$/u, nonMatchSymbols, '\\P{sc=Sund}');
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