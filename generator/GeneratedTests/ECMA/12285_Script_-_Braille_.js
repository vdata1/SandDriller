try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                10240,
                10495
            ]]
    });
    testPropertyEscapes(/^\p{Script=Braille}+$/u, matchSymbols, '\\p{Script=Braille}');
    testPropertyEscapes(/^\p{Script=Brai}+$/u, matchSymbols, '\\p{Script=Brai}');
    testPropertyEscapes(/^\p{sc=Braille}+$/u, matchSymbols, '\\p{sc=Braille}');
    testPropertyEscapes(/^\p{sc=Brai}+$/u, matchSymbols, '\\p{sc=Brai}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                10239
            ],
            [
                10496,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Braille}+$/u, nonMatchSymbols, '\\P{Script=Braille}');
    testPropertyEscapes(/^\P{Script=Brai}+$/u, nonMatchSymbols, '\\P{Script=Brai}');
    testPropertyEscapes(/^\P{sc=Braille}+$/u, nonMatchSymbols, '\\P{sc=Braille}');
    testPropertyEscapes(/^\P{sc=Brai}+$/u, nonMatchSymbols, '\\P{sc=Brai}');
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