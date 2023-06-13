try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66208,
                66256
            ]]
    });
    testPropertyEscapes(/^\p{Script=Carian}+$/u, matchSymbols, '\\p{Script=Carian}');
    testPropertyEscapes(/^\p{Script=Cari}+$/u, matchSymbols, '\\p{Script=Cari}');
    testPropertyEscapes(/^\p{sc=Carian}+$/u, matchSymbols, '\\p{sc=Carian}');
    testPropertyEscapes(/^\p{sc=Cari}+$/u, matchSymbols, '\\p{sc=Cari}');
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
                66207
            ],
            [
                66257,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Carian}+$/u, nonMatchSymbols, '\\P{Script=Carian}');
    testPropertyEscapes(/^\P{Script=Cari}+$/u, nonMatchSymbols, '\\P{Script=Cari}');
    testPropertyEscapes(/^\P{sc=Carian}+$/u, nonMatchSymbols, '\\P{sc=Carian}');
    testPropertyEscapes(/^\P{sc=Cari}+$/u, nonMatchSymbols, '\\P{sc=Cari}');
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