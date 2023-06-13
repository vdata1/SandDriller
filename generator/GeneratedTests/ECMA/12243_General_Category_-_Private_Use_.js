try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                57344,
                63743
            ],
            [
                983040,
                1048573
            ],
            [
                1048576,
                1114109
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Private_Use}+$/u, matchSymbols, '\\p{General_Category=Private_Use}');
    testPropertyEscapes(/^\p{General_Category=Co}+$/u, matchSymbols, '\\p{General_Category=Co}');
    testPropertyEscapes(/^\p{gc=Private_Use}+$/u, matchSymbols, '\\p{gc=Private_Use}');
    testPropertyEscapes(/^\p{gc=Co}+$/u, matchSymbols, '\\p{gc=Co}');
    testPropertyEscapes(/^\p{Private_Use}+$/u, matchSymbols, '\\p{Private_Use}');
    testPropertyEscapes(/^\p{Co}+$/u, matchSymbols, '\\p{Co}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                63744,
                983039
            ],
            [
                1048574,
                1048575
            ],
            [
                1114110,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Private_Use}+$/u, nonMatchSymbols, '\\P{General_Category=Private_Use}');
    testPropertyEscapes(/^\P{General_Category=Co}+$/u, nonMatchSymbols, '\\P{General_Category=Co}');
    testPropertyEscapes(/^\P{gc=Private_Use}+$/u, nonMatchSymbols, '\\P{gc=Private_Use}');
    testPropertyEscapes(/^\P{gc=Co}+$/u, nonMatchSymbols, '\\P{gc=Co}');
    testPropertyEscapes(/^\P{Private_Use}+$/u, nonMatchSymbols, '\\P{Private_Use}');
    testPropertyEscapes(/^\P{Co}+$/u, nonMatchSymbols, '\\P{Co}');
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