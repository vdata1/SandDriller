try {
    const matchSymbols = buildString({
        loneCodePoints: [6846],
        ranges: [
            [
                1160,
                1161
            ],
            [
                8413,
                8416
            ],
            [
                8418,
                8420
            ],
            [
                42608,
                42610
            ]
        ]
    });
    testPropertyEscapes(/^\p{General_Category=Enclosing_Mark}+$/u, matchSymbols, '\\p{General_Category=Enclosing_Mark}');
    testPropertyEscapes(/^\p{General_Category=Me}+$/u, matchSymbols, '\\p{General_Category=Me}');
    testPropertyEscapes(/^\p{gc=Enclosing_Mark}+$/u, matchSymbols, '\\p{gc=Enclosing_Mark}');
    testPropertyEscapes(/^\p{gc=Me}+$/u, matchSymbols, '\\p{gc=Me}');
    testPropertyEscapes(/^\p{Enclosing_Mark}+$/u, matchSymbols, '\\p{Enclosing_Mark}');
    testPropertyEscapes(/^\p{Me}+$/u, matchSymbols, '\\p{Me}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [8417],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1159
            ],
            [
                1162,
                6845
            ],
            [
                6847,
                8412
            ],
            [
                8421,
                42607
            ],
            [
                42611,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{General_Category=Enclosing_Mark}+$/u, nonMatchSymbols, '\\P{General_Category=Enclosing_Mark}');
    testPropertyEscapes(/^\P{General_Category=Me}+$/u, nonMatchSymbols, '\\P{General_Category=Me}');
    testPropertyEscapes(/^\P{gc=Enclosing_Mark}+$/u, nonMatchSymbols, '\\P{gc=Enclosing_Mark}');
    testPropertyEscapes(/^\P{gc=Me}+$/u, nonMatchSymbols, '\\P{gc=Me}');
    testPropertyEscapes(/^\P{Enclosing_Mark}+$/u, nonMatchSymbols, '\\P{Enclosing_Mark}');
    testPropertyEscapes(/^\P{Me}+$/u, nonMatchSymbols, '\\P{Me}');
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