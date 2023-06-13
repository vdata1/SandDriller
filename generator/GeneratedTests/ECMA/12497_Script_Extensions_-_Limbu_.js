try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2405,
            6464
        ],
        ranges: [
            [
                6400,
                6430
            ],
            [
                6432,
                6443
            ],
            [
                6448,
                6459
            ],
            [
                6468,
                6479
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Limbu}+$/u, matchSymbols, '\\p{Script_Extensions=Limbu}');
    testPropertyEscapes(/^\p{Script_Extensions=Limb}+$/u, matchSymbols, '\\p{Script_Extensions=Limb}');
    testPropertyEscapes(/^\p{scx=Limbu}+$/u, matchSymbols, '\\p{scx=Limbu}');
    testPropertyEscapes(/^\p{scx=Limb}+$/u, matchSymbols, '\\p{scx=Limb}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [6431],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2404
            ],
            [
                2406,
                6399
            ],
            [
                6444,
                6447
            ],
            [
                6460,
                6463
            ],
            [
                6465,
                6467
            ],
            [
                6480,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Limbu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Limbu}');
    testPropertyEscapes(/^\P{Script_Extensions=Limb}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Limb}');
    testPropertyEscapes(/^\P{scx=Limbu}+$/u, nonMatchSymbols, '\\P{scx=Limbu}');
    testPropertyEscapes(/^\P{scx=Limb}+$/u, nonMatchSymbols, '\\P{scx=Limb}');
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