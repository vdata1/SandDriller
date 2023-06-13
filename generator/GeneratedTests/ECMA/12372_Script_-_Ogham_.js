try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                5760,
                5788
            ]]
    });
    testPropertyEscapes(/^\p{Script=Ogham}+$/u, matchSymbols, '\\p{Script=Ogham}');
    testPropertyEscapes(/^\p{Script=Ogam}+$/u, matchSymbols, '\\p{Script=Ogam}');
    testPropertyEscapes(/^\p{sc=Ogham}+$/u, matchSymbols, '\\p{sc=Ogham}');
    testPropertyEscapes(/^\p{sc=Ogam}+$/u, matchSymbols, '\\p{sc=Ogam}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5759
            ],
            [
                5789,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Ogham}+$/u, nonMatchSymbols, '\\P{Script=Ogham}');
    testPropertyEscapes(/^\P{Script=Ogam}+$/u, nonMatchSymbols, '\\P{Script=Ogam}');
    testPropertyEscapes(/^\P{sc=Ogham}+$/u, nonMatchSymbols, '\\P{sc=Ogham}');
    testPropertyEscapes(/^\P{sc=Ogam}+$/u, nonMatchSymbols, '\\P{sc=Ogam}');
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