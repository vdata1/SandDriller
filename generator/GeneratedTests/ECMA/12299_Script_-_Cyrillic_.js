try {
    const matchSymbols = buildString({
        loneCodePoints: [
            7467,
            7544
        ],
        ranges: [
            [
                1024,
                1156
            ],
            [
                1159,
                1327
            ],
            [
                7296,
                7304
            ],
            [
                11744,
                11775
            ],
            [
                42560,
                42655
            ],
            [
                65070,
                65071
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Cyrillic}+$/u, matchSymbols, '\\p{Script=Cyrillic}');
    testPropertyEscapes(/^\p{Script=Cyrl}+$/u, matchSymbols, '\\p{Script=Cyrl}');
    testPropertyEscapes(/^\p{sc=Cyrillic}+$/u, matchSymbols, '\\p{sc=Cyrillic}');
    testPropertyEscapes(/^\p{sc=Cyrl}+$/u, matchSymbols, '\\p{sc=Cyrl}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1023
            ],
            [
                1157,
                1158
            ],
            [
                1328,
                7295
            ],
            [
                7305,
                7466
            ],
            [
                7468,
                7543
            ],
            [
                7545,
                11743
            ],
            [
                11776,
                42559
            ],
            [
                42656,
                56319
            ],
            [
                57344,
                65069
            ],
            [
                65072,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Cyrillic}+$/u, nonMatchSymbols, '\\P{Script=Cyrillic}');
    testPropertyEscapes(/^\P{Script=Cyrl}+$/u, nonMatchSymbols, '\\P{Script=Cyrl}');
    testPropertyEscapes(/^\P{sc=Cyrillic}+$/u, nonMatchSymbols, '\\P{sc=Cyrillic}');
    testPropertyEscapes(/^\P{sc=Cyrl}+$/u, nonMatchSymbols, '\\P{sc=Cyrl}');
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