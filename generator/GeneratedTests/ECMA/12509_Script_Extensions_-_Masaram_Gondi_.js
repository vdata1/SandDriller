try {
    const matchSymbols = buildString({
        loneCodePoints: [73018],
        ranges: [
            [
                2404,
                2405
            ],
            [
                72960,
                72966
            ],
            [
                72968,
                72969
            ],
            [
                72971,
                73014
            ],
            [
                73020,
                73021
            ],
            [
                73023,
                73031
            ],
            [
                73040,
                73049
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Masaram_Gondi}+$/u, matchSymbols, '\\p{Script_Extensions=Masaram_Gondi}');
    testPropertyEscapes(/^\p{Script_Extensions=Gonm}+$/u, matchSymbols, '\\p{Script_Extensions=Gonm}');
    testPropertyEscapes(/^\p{scx=Masaram_Gondi}+$/u, matchSymbols, '\\p{scx=Masaram_Gondi}');
    testPropertyEscapes(/^\p{scx=Gonm}+$/u, matchSymbols, '\\p{scx=Gonm}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            72967,
            72970,
            73019,
            73022
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2403
            ],
            [
                2406,
                56319
            ],
            [
                57344,
                72959
            ],
            [
                73015,
                73017
            ],
            [
                73032,
                73039
            ],
            [
                73050,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Masaram_Gondi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Masaram_Gondi}');
    testPropertyEscapes(/^\P{Script_Extensions=Gonm}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Gonm}');
    testPropertyEscapes(/^\P{scx=Masaram_Gondi}+$/u, nonMatchSymbols, '\\P{scx=Masaram_Gondi}');
    testPropertyEscapes(/^\P{scx=Gonm}+$/u, nonMatchSymbols, '\\P{scx=Gonm}');
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