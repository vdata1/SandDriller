try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                7168,
                7223
            ],
            [
                7227,
                7241
            ],
            [
                7245,
                7247
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Lepcha}+$/u, matchSymbols, '\\p{Script=Lepcha}');
    testPropertyEscapes(/^\p{Script=Lepc}+$/u, matchSymbols, '\\p{Script=Lepc}');
    testPropertyEscapes(/^\p{sc=Lepcha}+$/u, matchSymbols, '\\p{sc=Lepcha}');
    testPropertyEscapes(/^\p{sc=Lepc}+$/u, matchSymbols, '\\p{sc=Lepc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7167
            ],
            [
                7224,
                7226
            ],
            [
                7242,
                7244
            ],
            [
                7248,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Lepcha}+$/u, nonMatchSymbols, '\\P{Script=Lepcha}');
    testPropertyEscapes(/^\P{Script=Lepc}+$/u, nonMatchSymbols, '\\P{Script=Lepc}');
    testPropertyEscapes(/^\P{sc=Lepcha}+$/u, nonMatchSymbols, '\\P{sc=Lepcha}');
    testPropertyEscapes(/^\P{sc=Lepc}+$/u, nonMatchSymbols, '\\P{sc=Lepc}');
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