try {
    const matchSymbols = buildString({
        loneCodePoints: [67903],
        ranges: [[
                67872,
                67897
            ]]
    });
    testPropertyEscapes(/^\p{Script=Lydian}+$/u, matchSymbols, '\\p{Script=Lydian}');
    testPropertyEscapes(/^\p{Script=Lydi}+$/u, matchSymbols, '\\p{Script=Lydi}');
    testPropertyEscapes(/^\p{sc=Lydian}+$/u, matchSymbols, '\\p{sc=Lydian}');
    testPropertyEscapes(/^\p{sc=Lydi}+$/u, matchSymbols, '\\p{sc=Lydi}');
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
                67871
            ],
            [
                67898,
                67902
            ],
            [
                67904,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Lydian}+$/u, nonMatchSymbols, '\\P{Script=Lydian}');
    testPropertyEscapes(/^\P{Script=Lydi}+$/u, nonMatchSymbols, '\\P{Script=Lydi}');
    testPropertyEscapes(/^\P{sc=Lydian}+$/u, nonMatchSymbols, '\\P{sc=Lydian}');
    testPropertyEscapes(/^\P{sc=Lydi}+$/u, nonMatchSymbols, '\\P{sc=Lydi}');
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