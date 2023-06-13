try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43744,
                43766
            ],
            [
                43968,
                44013
            ],
            [
                44016,
                44025
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Meetei_Mayek}+$/u, matchSymbols, '\\p{Script=Meetei_Mayek}');
    testPropertyEscapes(/^\p{Script=Mtei}+$/u, matchSymbols, '\\p{Script=Mtei}');
    testPropertyEscapes(/^\p{sc=Meetei_Mayek}+$/u, matchSymbols, '\\p{sc=Meetei_Mayek}');
    testPropertyEscapes(/^\p{sc=Mtei}+$/u, matchSymbols, '\\p{sc=Mtei}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43743
            ],
            [
                43767,
                43967
            ],
            [
                44014,
                44015
            ],
            [
                44026,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Meetei_Mayek}+$/u, nonMatchSymbols, '\\P{Script=Meetei_Mayek}');
    testPropertyEscapes(/^\P{Script=Mtei}+$/u, nonMatchSymbols, '\\P{Script=Mtei}');
    testPropertyEscapes(/^\P{sc=Meetei_Mayek}+$/u, nonMatchSymbols, '\\P{sc=Meetei_Mayek}');
    testPropertyEscapes(/^\P{sc=Mtei}+$/u, nonMatchSymbols, '\\P{sc=Mtei}');
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