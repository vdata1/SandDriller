try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                72096,
                72103
            ],
            [
                72106,
                72151
            ],
            [
                72154,
                72164
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Nandinagari}+$/u, matchSymbols, '\\p{Script=Nandinagari}');
    testPropertyEscapes(/^\p{Script=Nand}+$/u, matchSymbols, '\\p{Script=Nand}');
    testPropertyEscapes(/^\p{sc=Nandinagari}+$/u, matchSymbols, '\\p{sc=Nandinagari}');
    testPropertyEscapes(/^\p{sc=Nand}+$/u, matchSymbols, '\\p{sc=Nand}');
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
                72095
            ],
            [
                72104,
                72105
            ],
            [
                72152,
                72153
            ],
            [
                72165,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Nandinagari}+$/u, nonMatchSymbols, '\\P{Script=Nandinagari}');
    testPropertyEscapes(/^\P{Script=Nand}+$/u, nonMatchSymbols, '\\P{Script=Nand}');
    testPropertyEscapes(/^\P{sc=Nandinagari}+$/u, nonMatchSymbols, '\\P{sc=Nandinagari}');
    testPropertyEscapes(/^\P{sc=Nand}+$/u, nonMatchSymbols, '\\P{sc=Nand}');
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