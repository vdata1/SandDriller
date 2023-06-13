try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                71296,
                71352
            ],
            [
                71360,
                71369
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Takri}+$/u, matchSymbols, '\\p{Script=Takri}');
    testPropertyEscapes(/^\p{Script=Takr}+$/u, matchSymbols, '\\p{Script=Takr}');
    testPropertyEscapes(/^\p{sc=Takri}+$/u, matchSymbols, '\\p{sc=Takri}');
    testPropertyEscapes(/^\p{sc=Takr}+$/u, matchSymbols, '\\p{sc=Takr}');
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
                71295
            ],
            [
                71353,
                71359
            ],
            [
                71370,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Takri}+$/u, nonMatchSymbols, '\\P{Script=Takri}');
    testPropertyEscapes(/^\P{Script=Takr}+$/u, nonMatchSymbols, '\\P{Script=Takr}');
    testPropertyEscapes(/^\P{sc=Takri}+$/u, nonMatchSymbols, '\\P{sc=Takri}');
    testPropertyEscapes(/^\P{sc=Takr}+$/u, nonMatchSymbols, '\\P{sc=Takr}');
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