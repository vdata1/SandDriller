try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                72192,
                72263
            ]]
    });
    testPropertyEscapes(/^\p{Script=Zanabazar_Square}+$/u, matchSymbols, '\\p{Script=Zanabazar_Square}');
    testPropertyEscapes(/^\p{Script=Zanb}+$/u, matchSymbols, '\\p{Script=Zanb}');
    testPropertyEscapes(/^\p{sc=Zanabazar_Square}+$/u, matchSymbols, '\\p{sc=Zanabazar_Square}');
    testPropertyEscapes(/^\p{sc=Zanb}+$/u, matchSymbols, '\\p{sc=Zanb}');
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
                72191
            ],
            [
                72264,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Zanabazar_Square}+$/u, nonMatchSymbols, '\\P{Script=Zanabazar_Square}');
    testPropertyEscapes(/^\P{Script=Zanb}+$/u, nonMatchSymbols, '\\P{Script=Zanb}');
    testPropertyEscapes(/^\P{sc=Zanabazar_Square}+$/u, nonMatchSymbols, '\\P{sc=Zanabazar_Square}');
    testPropertyEscapes(/^\P{sc=Zanb}+$/u, nonMatchSymbols, '\\P{sc=Zanb}');
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