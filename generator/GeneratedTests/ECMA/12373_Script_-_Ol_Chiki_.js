try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                7248,
                7295
            ]]
    });
    testPropertyEscapes(/^\p{Script=Ol_Chiki}+$/u, matchSymbols, '\\p{Script=Ol_Chiki}');
    testPropertyEscapes(/^\p{Script=Olck}+$/u, matchSymbols, '\\p{Script=Olck}');
    testPropertyEscapes(/^\p{sc=Ol_Chiki}+$/u, matchSymbols, '\\p{sc=Ol_Chiki}');
    testPropertyEscapes(/^\p{sc=Olck}+$/u, matchSymbols, '\\p{sc=Olck}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7247
            ],
            [
                7296,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Ol_Chiki}+$/u, nonMatchSymbols, '\\P{Script=Ol_Chiki}');
    testPropertyEscapes(/^\P{Script=Olck}+$/u, nonMatchSymbols, '\\P{Script=Olck}');
    testPropertyEscapes(/^\P{sc=Ol_Chiki}+$/u, nonMatchSymbols, '\\P{sc=Ol_Chiki}');
    testPropertyEscapes(/^\P{sc=Olck}+$/u, nonMatchSymbols, '\\P{sc=Olck}');
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