try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                0,
                31
            ],
            [
                127,
                159
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Control}+$/u, matchSymbols, '\\p{General_Category=Control}');
    testPropertyEscapes(/^\p{General_Category=Cc}+$/u, matchSymbols, '\\p{General_Category=Cc}');
    testPropertyEscapes(/^\p{General_Category=cntrl}+$/u, matchSymbols, '\\p{General_Category=cntrl}');
    testPropertyEscapes(/^\p{gc=Control}+$/u, matchSymbols, '\\p{gc=Control}');
    testPropertyEscapes(/^\p{gc=Cc}+$/u, matchSymbols, '\\p{gc=Cc}');
    testPropertyEscapes(/^\p{gc=cntrl}+$/u, matchSymbols, '\\p{gc=cntrl}');
    testPropertyEscapes(/^\p{Control}+$/u, matchSymbols, '\\p{Control}');
    testPropertyEscapes(/^\p{Cc}+$/u, matchSymbols, '\\p{Cc}');
    testPropertyEscapes(/^\p{cntrl}+$/u, matchSymbols, '\\p{cntrl}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                32,
                126
            ],
            [
                160,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Control}+$/u, nonMatchSymbols, '\\P{General_Category=Control}');
    testPropertyEscapes(/^\P{General_Category=Cc}+$/u, nonMatchSymbols, '\\P{General_Category=Cc}');
    testPropertyEscapes(/^\P{General_Category=cntrl}+$/u, nonMatchSymbols, '\\P{General_Category=cntrl}');
    testPropertyEscapes(/^\P{gc=Control}+$/u, nonMatchSymbols, '\\P{gc=Control}');
    testPropertyEscapes(/^\P{gc=Cc}+$/u, nonMatchSymbols, '\\P{gc=Cc}');
    testPropertyEscapes(/^\P{gc=cntrl}+$/u, nonMatchSymbols, '\\P{gc=cntrl}');
    testPropertyEscapes(/^\P{Control}+$/u, nonMatchSymbols, '\\P{Control}');
    testPropertyEscapes(/^\P{Cc}+$/u, nonMatchSymbols, '\\P{Cc}');
    testPropertyEscapes(/^\P{cntrl}+$/u, nonMatchSymbols, '\\P{cntrl}');
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