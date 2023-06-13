try {
    const matchSymbols = buildString({
        loneCodePoints: [94180],
        ranges: [[
                101120,
                101589
            ]]
    });
    testPropertyEscapes(/^\p{Script=Khitan_Small_Script}+$/u, matchSymbols, '\\p{Script=Khitan_Small_Script}');
    testPropertyEscapes(/^\p{Script=Kits}+$/u, matchSymbols, '\\p{Script=Kits}');
    testPropertyEscapes(/^\p{sc=Khitan_Small_Script}+$/u, matchSymbols, '\\p{sc=Khitan_Small_Script}');
    testPropertyEscapes(/^\p{sc=Kits}+$/u, matchSymbols, '\\p{sc=Kits}');
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
                94179
            ],
            [
                94181,
                101119
            ],
            [
                101590,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Khitan_Small_Script}+$/u, nonMatchSymbols, '\\P{Script=Khitan_Small_Script}');
    testPropertyEscapes(/^\P{Script=Kits}+$/u, nonMatchSymbols, '\\P{Script=Kits}');
    testPropertyEscapes(/^\P{sc=Khitan_Small_Script}+$/u, nonMatchSymbols, '\\P{sc=Khitan_Small_Script}');
    testPropertyEscapes(/^\P{sc=Kits}+$/u, nonMatchSymbols, '\\P{sc=Kits}');
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