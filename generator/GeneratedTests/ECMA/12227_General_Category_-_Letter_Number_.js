try {
    const matchSymbols = buildString({
        loneCodePoints: [
            12295,
            66369,
            66378
        ],
        ranges: [
            [
                5870,
                5872
            ],
            [
                8544,
                8578
            ],
            [
                8581,
                8584
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
                42726,
                42735
            ],
            [
                65856,
                65908
            ],
            [
                66513,
                66517
            ],
            [
                74752,
                74862
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Letter_Number}+$/u, matchSymbols, '\\p{General_Category=Letter_Number}');
    testPropertyEscapes(/^\p{General_Category=Nl}+$/u, matchSymbols, '\\p{General_Category=Nl}');
    testPropertyEscapes(/^\p{gc=Letter_Number}+$/u, matchSymbols, '\\p{gc=Letter_Number}');
    testPropertyEscapes(/^\p{gc=Nl}+$/u, matchSymbols, '\\p{gc=Nl}');
    testPropertyEscapes(/^\p{Letter_Number}+$/u, matchSymbols, '\\p{Letter_Number}');
    testPropertyEscapes(/^\p{Nl}+$/u, matchSymbols, '\\p{Nl}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5869
            ],
            [
                5873,
                8543
            ],
            [
                8579,
                8580
            ],
            [
                8585,
                12294
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
                42725
            ],
            [
                42736,
                56319
            ],
            [
                57344,
                65855
            ],
            [
                65909,
                66368
            ],
            [
                66370,
                66377
            ],
            [
                66379,
                66512
            ],
            [
                66518,
                74751
            ],
            [
                74863,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Letter_Number}+$/u, nonMatchSymbols, '\\P{General_Category=Letter_Number}');
    testPropertyEscapes(/^\P{General_Category=Nl}+$/u, nonMatchSymbols, '\\P{General_Category=Nl}');
    testPropertyEscapes(/^\P{gc=Letter_Number}+$/u, nonMatchSymbols, '\\P{gc=Letter_Number}');
    testPropertyEscapes(/^\P{gc=Nl}+$/u, nonMatchSymbols, '\\P{gc=Nl}');
    testPropertyEscapes(/^\P{Letter_Number}+$/u, nonMatchSymbols, '\\P{Letter_Number}');
    testPropertyEscapes(/^\P{Nl}+$/u, nonMatchSymbols, '\\P{Nl}');
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