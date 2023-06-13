try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69552,
                69579
            ]]
    });
    testPropertyEscapes(/^\p{Script=Chorasmian}+$/u, matchSymbols, '\\p{Script=Chorasmian}');
    testPropertyEscapes(/^\p{Script=Chrs}+$/u, matchSymbols, '\\p{Script=Chrs}');
    testPropertyEscapes(/^\p{sc=Chorasmian}+$/u, matchSymbols, '\\p{sc=Chorasmian}');
    testPropertyEscapes(/^\p{sc=Chrs}+$/u, matchSymbols, '\\p{sc=Chrs}');
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
                69551
            ],
            [
                69580,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Chorasmian}+$/u, nonMatchSymbols, '\\P{Script=Chorasmian}');
    testPropertyEscapes(/^\P{Script=Chrs}+$/u, nonMatchSymbols, '\\P{Script=Chrs}');
    testPropertyEscapes(/^\P{sc=Chorasmian}+$/u, nonMatchSymbols, '\\P{sc=Chorasmian}');
    testPropertyEscapes(/^\P{sc=Chrs}+$/u, nonMatchSymbols, '\\P{sc=Chrs}');
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