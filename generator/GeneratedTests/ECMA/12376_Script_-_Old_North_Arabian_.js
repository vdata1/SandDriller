try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                68224,
                68255
            ]]
    });
    testPropertyEscapes(/^\p{Script=Old_North_Arabian}+$/u, matchSymbols, '\\p{Script=Old_North_Arabian}');
    testPropertyEscapes(/^\p{Script=Narb}+$/u, matchSymbols, '\\p{Script=Narb}');
    testPropertyEscapes(/^\p{sc=Old_North_Arabian}+$/u, matchSymbols, '\\p{sc=Old_North_Arabian}');
    testPropertyEscapes(/^\p{sc=Narb}+$/u, matchSymbols, '\\p{sc=Narb}');
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
                57344,
                68223
            ],
            [
                68256,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Old_North_Arabian}+$/u, nonMatchSymbols, '\\P{Script=Old_North_Arabian}');
    testPropertyEscapes(/^\P{Script=Narb}+$/u, nonMatchSymbols, '\\P{Script=Narb}');
    testPropertyEscapes(/^\P{sc=Old_North_Arabian}+$/u, nonMatchSymbols, '\\P{sc=Old_North_Arabian}');
    testPropertyEscapes(/^\P{sc=Narb}+$/u, nonMatchSymbols, '\\P{sc=Narb}');
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