try {
    const matchSymbols = buildString({
        loneCodePoints: [6148],
        ranges: [
            [
                6144,
                6145
            ],
            [
                6150,
                6158
            ],
            [
                6160,
                6169
            ],
            [
                6176,
                6264
            ],
            [
                6272,
                6314
            ],
            [
                71264,
                71276
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Mongolian}+$/u, matchSymbols, '\\p{Script=Mongolian}');
    testPropertyEscapes(/^\p{Script=Mong}+$/u, matchSymbols, '\\p{Script=Mong}');
    testPropertyEscapes(/^\p{sc=Mongolian}+$/u, matchSymbols, '\\p{sc=Mongolian}');
    testPropertyEscapes(/^\p{sc=Mong}+$/u, matchSymbols, '\\p{sc=Mong}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            6149,
            6159
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6143
            ],
            [
                6146,
                6147
            ],
            [
                6170,
                6175
            ],
            [
                6265,
                6271
            ],
            [
                6315,
                56319
            ],
            [
                57344,
                71263
            ],
            [
                71277,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Mongolian}+$/u, nonMatchSymbols, '\\P{Script=Mongolian}');
    testPropertyEscapes(/^\P{Script=Mong}+$/u, nonMatchSymbols, '\\P{Script=Mong}');
    testPropertyEscapes(/^\P{sc=Mongolian}+$/u, nonMatchSymbols, '\\P{sc=Mongolian}');
    testPropertyEscapes(/^\P{sc=Mong}+$/u, nonMatchSymbols, '\\P{sc=Mong}');
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