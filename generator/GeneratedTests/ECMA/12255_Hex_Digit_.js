try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                48,
                57
            ],
            [
                65,
                70
            ],
            [
                97,
                102
            ],
            [
                65296,
                65305
            ],
            [
                65313,
                65318
            ],
            [
                65345,
                65350
            ]
        ]
    });
    testPropertyEscapes(/^\p{Hex_Digit}+$/u, matchSymbols, '\\p{Hex_Digit}');
    testPropertyEscapes(/^\p{Hex}+$/u, matchSymbols, '\\p{Hex}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                47
            ],
            [
                58,
                64
            ],
            [
                71,
                96
            ],
            [
                103,
                56319
            ],
            [
                57344,
                65295
            ],
            [
                65306,
                65312
            ],
            [
                65319,
                65344
            ],
            [
                65351,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Hex_Digit}+$/u, nonMatchSymbols, '\\P{Hex_Digit}');
    testPropertyEscapes(/^\P{Hex}+$/u, nonMatchSymbols, '\\P{Hex}');
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