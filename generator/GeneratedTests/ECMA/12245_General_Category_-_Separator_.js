try {
    const matchSymbols = buildString({
        loneCodePoints: [
            32,
            160,
            5760,
            8239,
            8287,
            12288
        ],
        ranges: [
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
    testPropertyEscapes(/^\p{General_Category=Separator}+$/u, matchSymbols, '\\p{General_Category=Separator}');
    testPropertyEscapes(/^\p{General_Category=Z}+$/u, matchSymbols, '\\p{General_Category=Z}');
    testPropertyEscapes(/^\p{gc=Separator}+$/u, matchSymbols, '\\p{gc=Separator}');
    testPropertyEscapes(/^\p{gc=Z}+$/u, matchSymbols, '\\p{gc=Z}');
    testPropertyEscapes(/^\p{Separator}+$/u, matchSymbols, '\\p{Separator}');
    testPropertyEscapes(/^\p{Z}+$/u, matchSymbols, '\\p{Z}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                31
            ],
            [
                33,
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
    testPropertyEscapes(/^\P{General_Category=Separator}+$/u, nonMatchSymbols, '\\P{General_Category=Separator}');
    testPropertyEscapes(/^\P{General_Category=Z}+$/u, nonMatchSymbols, '\\P{General_Category=Z}');
    testPropertyEscapes(/^\P{gc=Separator}+$/u, nonMatchSymbols, '\\P{gc=Separator}');
    testPropertyEscapes(/^\P{gc=Z}+$/u, nonMatchSymbols, '\\P{gc=Z}');
    testPropertyEscapes(/^\P{Separator}+$/u, nonMatchSymbols, '\\P{Separator}');
    testPropertyEscapes(/^\P{Z}+$/u, nonMatchSymbols, '\\P{Z}');
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