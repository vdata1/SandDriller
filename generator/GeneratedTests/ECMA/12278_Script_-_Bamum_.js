try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                42656,
                42743
            ],
            [
                92160,
                92728
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Bamum}+$/u, matchSymbols, '\\p{Script=Bamum}');
    testPropertyEscapes(/^\p{Script=Bamu}+$/u, matchSymbols, '\\p{Script=Bamu}');
    testPropertyEscapes(/^\p{sc=Bamum}+$/u, matchSymbols, '\\p{sc=Bamum}');
    testPropertyEscapes(/^\p{sc=Bamu}+$/u, matchSymbols, '\\p{sc=Bamu}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                42655
            ],
            [
                42744,
                56319
            ],
            [
                57344,
                92159
            ],
            [
                92729,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Bamum}+$/u, nonMatchSymbols, '\\P{Script=Bamum}');
    testPropertyEscapes(/^\P{Script=Bamu}+$/u, nonMatchSymbols, '\\P{Script=Bamu}');
    testPropertyEscapes(/^\P{sc=Bamum}+$/u, nonMatchSymbols, '\\P{sc=Bamum}');
    testPropertyEscapes(/^\P{sc=Bamu}+$/u, nonMatchSymbols, '\\P{sc=Bamu}');
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