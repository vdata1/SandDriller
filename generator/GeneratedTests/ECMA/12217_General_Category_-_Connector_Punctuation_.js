try {
    const matchSymbols = buildString({
        loneCodePoints: [
            95,
            8276,
            65343
        ],
        ranges: [
            [
                8255,
                8256
            ],
            [
                65075,
                65076
            ],
            [
                65101,
                65103
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Connector_Punctuation}+$/u, matchSymbols, '\\p{General_Category=Connector_Punctuation}');
    testPropertyEscapes(/^\p{General_Category=Pc}+$/u, matchSymbols, '\\p{General_Category=Pc}');
    testPropertyEscapes(/^\p{gc=Connector_Punctuation}+$/u, matchSymbols, '\\p{gc=Connector_Punctuation}');
    testPropertyEscapes(/^\p{gc=Pc}+$/u, matchSymbols, '\\p{gc=Pc}');
    testPropertyEscapes(/^\p{Connector_Punctuation}+$/u, matchSymbols, '\\p{Connector_Punctuation}');
    testPropertyEscapes(/^\p{Pc}+$/u, matchSymbols, '\\p{Pc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                94
            ],
            [
                96,
                8254
            ],
            [
                8257,
                8275
            ],
            [
                8277,
                56319
            ],
            [
                57344,
                65074
            ],
            [
                65077,
                65100
            ],
            [
                65104,
                65342
            ],
            [
                65344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Connector_Punctuation}+$/u, nonMatchSymbols, '\\P{General_Category=Connector_Punctuation}');
    testPropertyEscapes(/^\P{General_Category=Pc}+$/u, nonMatchSymbols, '\\P{General_Category=Pc}');
    testPropertyEscapes(/^\P{gc=Connector_Punctuation}+$/u, nonMatchSymbols, '\\P{gc=Connector_Punctuation}');
    testPropertyEscapes(/^\P{gc=Pc}+$/u, nonMatchSymbols, '\\P{gc=Pc}');
    testPropertyEscapes(/^\P{Connector_Punctuation}+$/u, nonMatchSymbols, '\\P{Connector_Punctuation}');
    testPropertyEscapes(/^\P{Pc}+$/u, nonMatchSymbols, '\\P{Pc}');
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