try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68480,
                68497
            ],
            [
                68505,
                68508
            ],
            [
                68521,
                68527
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Psalter_Pahlavi}+$/u, matchSymbols, '\\p{Script=Psalter_Pahlavi}');
    testPropertyEscapes(/^\p{Script=Phlp}+$/u, matchSymbols, '\\p{Script=Phlp}');
    testPropertyEscapes(/^\p{sc=Psalter_Pahlavi}+$/u, matchSymbols, '\\p{sc=Psalter_Pahlavi}');
    testPropertyEscapes(/^\p{sc=Phlp}+$/u, matchSymbols, '\\p{sc=Phlp}');
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
                68479
            ],
            [
                68498,
                68504
            ],
            [
                68509,
                68520
            ],
            [
                68528,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Psalter_Pahlavi}+$/u, nonMatchSymbols, '\\P{Script=Psalter_Pahlavi}');
    testPropertyEscapes(/^\P{Script=Phlp}+$/u, nonMatchSymbols, '\\P{Script=Phlp}');
    testPropertyEscapes(/^\P{sc=Psalter_Pahlavi}+$/u, nonMatchSymbols, '\\P{sc=Psalter_Pahlavi}');
    testPropertyEscapes(/^\P{sc=Phlp}+$/u, nonMatchSymbols, '\\P{sc=Phlp}');
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