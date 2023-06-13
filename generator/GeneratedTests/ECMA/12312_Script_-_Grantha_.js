try {
    const matchSymbols = buildString({
        loneCodePoints: [
            70480,
            70487
        ],
        ranges: [
            [
                70400,
                70403
            ],
            [
                70405,
                70412
            ],
            [
                70415,
                70416
            ],
            [
                70419,
                70440
            ],
            [
                70442,
                70448
            ],
            [
                70450,
                70451
            ],
            [
                70453,
                70457
            ],
            [
                70460,
                70468
            ],
            [
                70471,
                70472
            ],
            [
                70475,
                70477
            ],
            [
                70493,
                70499
            ],
            [
                70502,
                70508
            ],
            [
                70512,
                70516
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Grantha}+$/u, matchSymbols, '\\p{Script=Grantha}');
    testPropertyEscapes(/^\p{Script=Gran}+$/u, matchSymbols, '\\p{Script=Gran}');
    testPropertyEscapes(/^\p{sc=Grantha}+$/u, matchSymbols, '\\p{sc=Grantha}');
    testPropertyEscapes(/^\p{sc=Gran}+$/u, matchSymbols, '\\p{sc=Gran}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            70404,
            70441,
            70449,
            70452
        ],
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
                70399
            ],
            [
                70413,
                70414
            ],
            [
                70417,
                70418
            ],
            [
                70458,
                70459
            ],
            [
                70469,
                70470
            ],
            [
                70473,
                70474
            ],
            [
                70478,
                70479
            ],
            [
                70481,
                70486
            ],
            [
                70488,
                70492
            ],
            [
                70500,
                70501
            ],
            [
                70509,
                70511
            ],
            [
                70517,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Grantha}+$/u, nonMatchSymbols, '\\P{Script=Grantha}');
    testPropertyEscapes(/^\P{Script=Gran}+$/u, nonMatchSymbols, '\\P{Script=Gran}');
    testPropertyEscapes(/^\P{sc=Grantha}+$/u, nonMatchSymbols, '\\P{sc=Grantha}');
    testPropertyEscapes(/^\P{sc=Gran}+$/u, nonMatchSymbols, '\\P{sc=Gran}');
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