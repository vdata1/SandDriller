try {
    const matchSymbols = buildString({
        loneCodePoints: [94180],
        ranges: [
            [
                12294,
                12295
            ],
            [
                12321,
                12329
            ],
            [
                12344,
                12346
            ],
            [
                13312,
                19903
            ],
            [
                19968,
                40956
            ],
            [
                63744,
                64109
            ],
            [
                64112,
                64217
            ],
            [
                94208,
                100343
            ],
            [
                100352,
                101589
            ],
            [
                101632,
                101640
            ],
            [
                110960,
                111355
            ],
            [
                131072,
                173789
            ],
            [
                173824,
                177972
            ],
            [
                177984,
                178205
            ],
            [
                178208,
                183969
            ],
            [
                183984,
                191456
            ],
            [
                194560,
                195101
            ],
            [
                196608,
                201546
            ]
        ]
    });
    testPropertyEscapes(/^\p{Ideographic}+$/u, matchSymbols, '\\p{Ideographic}');
    testPropertyEscapes(/^\p{Ideo}+$/u, matchSymbols, '\\p{Ideo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12293
            ],
            [
                12296,
                12320
            ],
            [
                12330,
                12343
            ],
            [
                12347,
                13311
            ],
            [
                19904,
                19967
            ],
            [
                40957,
                56319
            ],
            [
                57344,
                63743
            ],
            [
                64110,
                64111
            ],
            [
                64218,
                94179
            ],
            [
                94181,
                94207
            ],
            [
                100344,
                100351
            ],
            [
                101590,
                101631
            ],
            [
                101641,
                110959
            ],
            [
                111356,
                131071
            ],
            [
                173790,
                173823
            ],
            [
                177973,
                177983
            ],
            [
                178206,
                178207
            ],
            [
                183970,
                183983
            ],
            [
                191457,
                194559
            ],
            [
                195102,
                196607
            ],
            [
                201547,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Ideographic}+$/u, nonMatchSymbols, '\\P{Ideographic}');
    testPropertyEscapes(/^\P{Ideo}+$/u, nonMatchSymbols, '\\P{Ideo}');
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