try {
    const matchSymbols = buildString({
        loneCodePoints: [
            32,
            133
        ],
        ranges: [
            [
                9,
                13
            ],
            [
                8206,
                8207
            ],
            [
                8232,
                8233
            ]
        ]
    });
    testPropertyEscapes(/^\p{Pattern_White_Space}+$/u, matchSymbols, '\\p{Pattern_White_Space}');
    testPropertyEscapes(/^\p{Pat_WS}+$/u, matchSymbols, '\\p{Pat_WS}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                8
            ],
            [
                14,
                31
            ],
            [
                33,
                132
            ],
            [
                134,
                8205
            ],
            [
                8208,
                8231
            ],
            [
                8234,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Pattern_White_Space}+$/u, nonMatchSymbols, '\\P{Pattern_White_Space}');
    testPropertyEscapes(/^\P{Pat_WS}+$/u, nonMatchSymbols, '\\P{Pat_WS}');
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