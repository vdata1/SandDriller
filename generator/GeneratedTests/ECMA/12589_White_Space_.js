try {
    const matchSymbols = buildString({
        loneCodePoints: [
            32,
            133,
            160,
            5760,
            8239,
            8287,
            12288
        ],
        ranges: [
            [
                9,
                13
            ],
            [
                8192,
                8202
            ],
            [
                8232,
                8233
            ]
        ]
    });
    testPropertyEscapes(/^\p{White_Space}+$/u, matchSymbols, '\\p{White_Space}');
    testPropertyEscapes(/^\p{space}+$/u, matchSymbols, '\\p{space}');
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
                159
            ],
            [
                161,
                5759
            ],
            [
                5761,
                8191
            ],
            [
                8203,
                8231
            ],
            [
                8234,
                8238
            ],
            [
                8240,
                8286
            ],
            [
                8288,
                12287
            ],
            [
                12289,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{White_Space}+$/u, nonMatchSymbols, '\\P{White_Space}');
    testPropertyEscapes(/^\P{space}+$/u, nonMatchSymbols, '\\P{space}');
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