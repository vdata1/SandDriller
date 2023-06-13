try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                72704,
                72712
            ],
            [
                72714,
                72758
            ],
            [
                72760,
                72773
            ],
            [
                72784,
                72812
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Bhaiksuki}+$/u, matchSymbols, '\\p{Script=Bhaiksuki}');
    testPropertyEscapes(/^\p{Script=Bhks}+$/u, matchSymbols, '\\p{Script=Bhks}');
    testPropertyEscapes(/^\p{sc=Bhaiksuki}+$/u, matchSymbols, '\\p{sc=Bhaiksuki}');
    testPropertyEscapes(/^\p{sc=Bhks}+$/u, matchSymbols, '\\p{sc=Bhks}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            72713,
            72759
        ],
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
                72703
            ],
            [
                72774,
                72783
            ],
            [
                72813,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Bhaiksuki}+$/u, nonMatchSymbols, '\\P{Script=Bhaiksuki}');
    testPropertyEscapes(/^\P{Script=Bhks}+$/u, nonMatchSymbols, '\\P{Script=Bhks}');
    testPropertyEscapes(/^\P{sc=Bhaiksuki}+$/u, nonMatchSymbols, '\\P{sc=Bhaiksuki}');
    testPropertyEscapes(/^\P{sc=Bhks}+$/u, nonMatchSymbols, '\\P{sc=Bhks}');
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