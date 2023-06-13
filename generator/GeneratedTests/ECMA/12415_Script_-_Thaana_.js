try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                1920,
                1969
            ]]
    });
    testPropertyEscapes(/^\p{Script=Thaana}+$/u, matchSymbols, '\\p{Script=Thaana}');
    testPropertyEscapes(/^\p{Script=Thaa}+$/u, matchSymbols, '\\p{Script=Thaa}');
    testPropertyEscapes(/^\p{sc=Thaana}+$/u, matchSymbols, '\\p{sc=Thaana}');
    testPropertyEscapes(/^\p{sc=Thaa}+$/u, matchSymbols, '\\p{sc=Thaa}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1919
            ],
            [
                1970,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Thaana}+$/u, nonMatchSymbols, '\\P{Script=Thaana}');
    testPropertyEscapes(/^\P{Script=Thaa}+$/u, nonMatchSymbols, '\\P{Script=Thaa}');
    testPropertyEscapes(/^\P{sc=Thaana}+$/u, nonMatchSymbols, '\\P{sc=Thaana}');
    testPropertyEscapes(/^\P{sc=Thaa}+$/u, nonMatchSymbols, '\\P{sc=Thaa}');
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