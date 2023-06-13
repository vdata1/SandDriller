try {
    const matchSymbols = buildString({
        loneCodePoints: [110592],
        ranges: [
            [
                12449,
                12538
            ],
            [
                12541,
                12543
            ],
            [
                12784,
                12799
            ],
            [
                13008,
                13054
            ],
            [
                13056,
                13143
            ],
            [
                65382,
                65391
            ],
            [
                65393,
                65437
            ],
            [
                110948,
                110951
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Katakana}+$/u, matchSymbols, '\\p{Script=Katakana}');
    testPropertyEscapes(/^\p{Script=Kana}+$/u, matchSymbols, '\\p{Script=Kana}');
    testPropertyEscapes(/^\p{sc=Katakana}+$/u, matchSymbols, '\\p{sc=Katakana}');
    testPropertyEscapes(/^\p{sc=Kana}+$/u, matchSymbols, '\\p{sc=Kana}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            13055,
            65392
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12448
            ],
            [
                12539,
                12540
            ],
            [
                12544,
                12783
            ],
            [
                12800,
                13007
            ],
            [
                13144,
                56319
            ],
            [
                57344,
                65381
            ],
            [
                65438,
                110591
            ],
            [
                110593,
                110947
            ],
            [
                110952,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Katakana}+$/u, nonMatchSymbols, '\\P{Script=Katakana}');
    testPropertyEscapes(/^\P{Script=Kana}+$/u, nonMatchSymbols, '\\P{Script=Kana}');
    testPropertyEscapes(/^\P{sc=Katakana}+$/u, nonMatchSymbols, '\\P{sc=Katakana}');
    testPropertyEscapes(/^\P{sc=Kana}+$/u, nonMatchSymbols, '\\P{sc=Kana}');
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