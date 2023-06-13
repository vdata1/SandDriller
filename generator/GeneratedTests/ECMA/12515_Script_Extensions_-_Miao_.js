try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                93952,
                94026
            ],
            [
                94031,
                94087
            ],
            [
                94095,
                94111
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Miao}+$/u, matchSymbols, '\\p{Script_Extensions=Miao}');
    testPropertyEscapes(/^\p{Script_Extensions=Plrd}+$/u, matchSymbols, '\\p{Script_Extensions=Plrd}');
    testPropertyEscapes(/^\p{scx=Miao}+$/u, matchSymbols, '\\p{scx=Miao}');
    testPropertyEscapes(/^\p{scx=Plrd}+$/u, matchSymbols, '\\p{scx=Plrd}');
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
                93951
            ],
            [
                94027,
                94030
            ],
            [
                94088,
                94094
            ],
            [
                94112,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Miao}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Miao}');
    testPropertyEscapes(/^\P{Script_Extensions=Plrd}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Plrd}');
    testPropertyEscapes(/^\P{scx=Miao}+$/u, nonMatchSymbols, '\\P{scx=Miao}');
    testPropertyEscapes(/^\P{scx=Plrd}+$/u, nonMatchSymbols, '\\P{scx=Plrd}');
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