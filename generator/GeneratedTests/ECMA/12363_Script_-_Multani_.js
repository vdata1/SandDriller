try {
    const matchSymbols = buildString({
        loneCodePoints: [70280],
        ranges: [
            [
                70272,
                70278
            ],
            [
                70282,
                70285
            ],
            [
                70287,
                70301
            ],
            [
                70303,
                70313
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Multani}+$/u, matchSymbols, '\\p{Script=Multani}');
    testPropertyEscapes(/^\p{Script=Mult}+$/u, matchSymbols, '\\p{Script=Mult}');
    testPropertyEscapes(/^\p{sc=Multani}+$/u, matchSymbols, '\\p{sc=Multani}');
    testPropertyEscapes(/^\p{sc=Mult}+$/u, matchSymbols, '\\p{sc=Mult}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            70279,
            70281,
            70286,
            70302
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
                70271
            ],
            [
                70314,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Multani}+$/u, nonMatchSymbols, '\\P{Script=Multani}');
    testPropertyEscapes(/^\P{Script=Mult}+$/u, nonMatchSymbols, '\\P{Script=Mult}');
    testPropertyEscapes(/^\P{sc=Multani}+$/u, nonMatchSymbols, '\\P{sc=Multani}');
    testPropertyEscapes(/^\P{sc=Mult}+$/u, nonMatchSymbols, '\\P{sc=Mult}');
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