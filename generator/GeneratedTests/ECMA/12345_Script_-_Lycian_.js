try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66176,
                66204
            ]]
    });
    testPropertyEscapes(/^\p{Script=Lycian}+$/u, matchSymbols, '\\p{Script=Lycian}');
    testPropertyEscapes(/^\p{Script=Lyci}+$/u, matchSymbols, '\\p{Script=Lyci}');
    testPropertyEscapes(/^\p{sc=Lycian}+$/u, matchSymbols, '\\p{sc=Lycian}');
    testPropertyEscapes(/^\p{sc=Lyci}+$/u, matchSymbols, '\\p{sc=Lyci}');
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
                66175
            ],
            [
                66205,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Lycian}+$/u, nonMatchSymbols, '\\P{Script=Lycian}');
    testPropertyEscapes(/^\P{Script=Lyci}+$/u, nonMatchSymbols, '\\P{Script=Lyci}');
    testPropertyEscapes(/^\P{sc=Lycian}+$/u, nonMatchSymbols, '\\P{sc=Lycian}');
    testPropertyEscapes(/^\P{sc=Lyci}+$/u, nonMatchSymbols, '\\P{sc=Lyci}');
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