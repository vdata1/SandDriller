try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12293,
            12295
        ],
        ranges: [
            [
                11904,
                11929
            ],
            [
                11931,
                12019
            ],
            [
                12032,
                12245
            ],
            [
                12321,
                12329
            ],
            [
                12344,
                12347
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
                94192,
                94193
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
    testPropertyEscapes(/^\p{Script=Han}+$/u, matchSymbols, '\\p{Script=Han}');
    testPropertyEscapes(/^\p{Script=Hani}+$/u, matchSymbols, '\\p{Script=Hani}');
    testPropertyEscapes(/^\p{sc=Han}+$/u, matchSymbols, '\\p{sc=Han}');
    testPropertyEscapes(/^\p{sc=Hani}+$/u, matchSymbols, '\\p{sc=Hani}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            11930,
            12294
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                11903
            ],
            [
                12020,
                12031
            ],
            [
                12246,
                12292
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
                12348,
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
                94191
            ],
            [
                94194,
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
    testPropertyEscapes(/^\P{Script=Han}+$/u, nonMatchSymbols, '\\P{Script=Han}');
    testPropertyEscapes(/^\P{Script=Hani}+$/u, nonMatchSymbols, '\\P{Script=Hani}');
    testPropertyEscapes(/^\P{sc=Han}+$/u, nonMatchSymbols, '\\P{sc=Han}');
    testPropertyEscapes(/^\P{sc=Hani}+$/u, nonMatchSymbols, '\\P{sc=Hani}');
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