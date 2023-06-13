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
        ranges: [[
                8192,
                8202
            ]]
    });
    testPropertyEscapes(/^\p{General_Category=Space_Separator}+$/u, matchSymbols, '\\p{General_Category=Space_Separator}');
    testPropertyEscapes(/^\p{General_Category=Zs}+$/u, matchSymbols, '\\p{General_Category=Zs}');
    testPropertyEscapes(/^\p{gc=Space_Separator}+$/u, matchSymbols, '\\p{gc=Space_Separator}');
    testPropertyEscapes(/^\p{gc=Zs}+$/u, matchSymbols, '\\p{gc=Zs}');
    testPropertyEscapes(/^\p{Space_Separator}+$/u, matchSymbols, '\\p{Space_Separator}');
    testPropertyEscapes(/^\p{Zs}+$/u, matchSymbols, '\\p{Zs}');
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
    testPropertyEscapes(/^\P{General_Category=Space_Separator}+$/u, nonMatchSymbols, '\\P{General_Category=Space_Separator}');
    testPropertyEscapes(/^\P{General_Category=Zs}+$/u, nonMatchSymbols, '\\P{General_Category=Zs}');
    testPropertyEscapes(/^\P{gc=Space_Separator}+$/u, nonMatchSymbols, '\\P{gc=Space_Separator}');
    testPropertyEscapes(/^\P{gc=Zs}+$/u, nonMatchSymbols, '\\P{gc=Zs}');
    testPropertyEscapes(/^\P{Space_Separator}+$/u, nonMatchSymbols, '\\P{Space_Separator}');
    testPropertyEscapes(/^\P{Zs}+$/u, nonMatchSymbols, '\\P{Zs}');
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