try {
    const matchSymbols = buildString({
        loneCodePoints: [
            4295,
            4301,
            11559,
            11565
        ],
        ranges: [
            [
                4256,
                4293
            ],
            [
                4304,
                4346
            ],
            [
                4348,
                4351
            ],
            [
                7312,
                7354
            ],
            [
                7357,
                7359
            ],
            [
                11520,
                11557
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Georgian}+$/u, matchSymbols, '\\p{Script=Georgian}');
    testPropertyEscapes(/^\p{Script=Geor}+$/u, matchSymbols, '\\p{Script=Geor}');
    testPropertyEscapes(/^\p{sc=Georgian}+$/u, matchSymbols, '\\p{sc=Georgian}');
    testPropertyEscapes(/^\p{sc=Geor}+$/u, matchSymbols, '\\p{sc=Geor}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            4294,
            4347,
            11558
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4255
            ],
            [
                4296,
                4300
            ],
            [
                4302,
                4303
            ],
            [
                4352,
                7311
            ],
            [
                7355,
                7356
            ],
            [
                7360,
                11519
            ],
            [
                11560,
                11564
            ],
            [
                11566,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Georgian}+$/u, nonMatchSymbols, '\\P{Script=Georgian}');
    testPropertyEscapes(/^\P{Script=Geor}+$/u, nonMatchSymbols, '\\P{Script=Geor}');
    testPropertyEscapes(/^\P{sc=Georgian}+$/u, nonMatchSymbols, '\\P{sc=Georgian}');
    testPropertyEscapes(/^\P{sc=Geor}+$/u, nonMatchSymbols, '\\P{sc=Geor}');
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