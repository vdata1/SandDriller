try {
    const matchSymbols = buildString({
        loneCodePoints: [123647],
        ranges: [[
                123584,
                123641
            ]]
    });
    testPropertyEscapes(/^\p{Script=Wancho}+$/u, matchSymbols, '\\p{Script=Wancho}');
    testPropertyEscapes(/^\p{Script=Wcho}+$/u, matchSymbols, '\\p{Script=Wcho}');
    testPropertyEscapes(/^\p{sc=Wancho}+$/u, matchSymbols, '\\p{sc=Wancho}');
    testPropertyEscapes(/^\p{sc=Wcho}+$/u, matchSymbols, '\\p{sc=Wcho}');
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
                123583
            ],
            [
                123642,
                123646
            ],
            [
                123648,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Wancho}+$/u, nonMatchSymbols, '\\P{Script=Wancho}');
    testPropertyEscapes(/^\P{Script=Wcho}+$/u, nonMatchSymbols, '\\P{Script=Wcho}');
    testPropertyEscapes(/^\P{sc=Wancho}+$/u, nonMatchSymbols, '\\P{sc=Wancho}');
    testPropertyEscapes(/^\P{sc=Wcho}+$/u, nonMatchSymbols, '\\P{sc=Wcho}');
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