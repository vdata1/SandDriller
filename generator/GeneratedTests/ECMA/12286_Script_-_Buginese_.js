try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6656,
                6683
            ],
            [
                6686,
                6687
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Buginese}+$/u, matchSymbols, '\\p{Script=Buginese}');
    testPropertyEscapes(/^\p{Script=Bugi}+$/u, matchSymbols, '\\p{Script=Bugi}');
    testPropertyEscapes(/^\p{sc=Buginese}+$/u, matchSymbols, '\\p{sc=Buginese}');
    testPropertyEscapes(/^\p{sc=Bugi}+$/u, matchSymbols, '\\p{sc=Bugi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6655
            ],
            [
                6684,
                6685
            ],
            [
                6688,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Buginese}+$/u, nonMatchSymbols, '\\P{Script=Buginese}');
    testPropertyEscapes(/^\P{Script=Bugi}+$/u, nonMatchSymbols, '\\P{Script=Bugi}');
    testPropertyEscapes(/^\P{sc=Buginese}+$/u, nonMatchSymbols, '\\P{sc=Buginese}');
    testPropertyEscapes(/^\P{sc=Bugi}+$/u, nonMatchSymbols, '\\P{sc=Bugi}');
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