try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                93760,
                93850
            ]]
    });
    testPropertyEscapes(/^\p{Script=Medefaidrin}+$/u, matchSymbols, '\\p{Script=Medefaidrin}');
    testPropertyEscapes(/^\p{Script=Medf}+$/u, matchSymbols, '\\p{Script=Medf}');
    testPropertyEscapes(/^\p{sc=Medefaidrin}+$/u, matchSymbols, '\\p{sc=Medefaidrin}');
    testPropertyEscapes(/^\p{sc=Medf}+$/u, matchSymbols, '\\p{sc=Medf}');
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
                93759
            ],
            [
                93851,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Medefaidrin}+$/u, nonMatchSymbols, '\\P{Script=Medefaidrin}');
    testPropertyEscapes(/^\P{Script=Medf}+$/u, nonMatchSymbols, '\\P{Script=Medf}');
    testPropertyEscapes(/^\P{sc=Medefaidrin}+$/u, nonMatchSymbols, '\\P{sc=Medefaidrin}');
    testPropertyEscapes(/^\P{sc=Medf}+$/u, nonMatchSymbols, '\\P{sc=Medf}');
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