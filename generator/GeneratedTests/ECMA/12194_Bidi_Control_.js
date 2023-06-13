try {
    const matchSymbols = buildString({
        loneCodePoints: [1564],
        ranges: [
            [
                8206,
                8207
            ],
            [
                8234,
                8238
            ],
            [
                8294,
                8297
            ]
        ]
    });
    testPropertyEscapes(/^\p{Bidi_Control}+$/u, matchSymbols, '\\p{Bidi_Control}');
    testPropertyEscapes(/^\p{Bidi_C}+$/u, matchSymbols, '\\p{Bidi_C}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1563
            ],
            [
                1565,
                8205
            ],
            [
                8208,
                8233
            ],
            [
                8239,
                8293
            ],
            [
                8298,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Bidi_Control}+$/u, nonMatchSymbols, '\\P{Bidi_Control}');
    testPropertyEscapes(/^\P{Bidi_C}+$/u, nonMatchSymbols, '\\P{Bidi_C}');
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