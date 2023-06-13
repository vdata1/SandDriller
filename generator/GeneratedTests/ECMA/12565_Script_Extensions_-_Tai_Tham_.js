try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6688,
                6750
            ],
            [
                6752,
                6780
            ],
            [
                6783,
                6793
            ],
            [
                6800,
                6809
            ],
            [
                6816,
                6829
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tai_Tham}+$/u, matchSymbols, '\\p{Script_Extensions=Tai_Tham}');
    testPropertyEscapes(/^\p{Script_Extensions=Lana}+$/u, matchSymbols, '\\p{Script_Extensions=Lana}');
    testPropertyEscapes(/^\p{scx=Tai_Tham}+$/u, matchSymbols, '\\p{scx=Tai_Tham}');
    testPropertyEscapes(/^\p{scx=Lana}+$/u, matchSymbols, '\\p{scx=Lana}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [6751],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6687
            ],
            [
                6781,
                6782
            ],
            [
                6794,
                6799
            ],
            [
                6810,
                6815
            ],
            [
                6830,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tai_Tham}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tai_Tham}');
    testPropertyEscapes(/^\P{Script_Extensions=Lana}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lana}');
    testPropertyEscapes(/^\P{scx=Tai_Tham}+$/u, nonMatchSymbols, '\\P{scx=Tai_Tham}');
    testPropertyEscapes(/^\P{scx=Lana}+$/u, nonMatchSymbols, '\\P{scx=Lana}');
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