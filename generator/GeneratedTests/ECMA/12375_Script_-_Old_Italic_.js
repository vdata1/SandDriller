try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                66304,
                66339
            ],
            [
                66349,
                66351
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Old_Italic}+$/u, matchSymbols, '\\p{Script=Old_Italic}');
    testPropertyEscapes(/^\p{Script=Ital}+$/u, matchSymbols, '\\p{Script=Ital}');
    testPropertyEscapes(/^\p{sc=Old_Italic}+$/u, matchSymbols, '\\p{sc=Old_Italic}');
    testPropertyEscapes(/^\p{sc=Ital}+$/u, matchSymbols, '\\p{sc=Ital}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                66303
            ],
            [
                66340,
                66348
            ],
            [
                66352,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Old_Italic}+$/u, nonMatchSymbols, '\\P{Script=Old_Italic}');
    testPropertyEscapes(/^\P{Script=Ital}+$/u, nonMatchSymbols, '\\P{Script=Ital}');
    testPropertyEscapes(/^\P{sc=Old_Italic}+$/u, nonMatchSymbols, '\\P{sc=Old_Italic}');
    testPropertyEscapes(/^\P{sc=Ital}+$/u, nonMatchSymbols, '\\P{sc=Ital}');
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