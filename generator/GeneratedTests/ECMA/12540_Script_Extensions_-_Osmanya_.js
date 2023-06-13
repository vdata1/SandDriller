try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                66688,
                66717
            ],
            [
                66720,
                66729
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Osmanya}+$/u, matchSymbols, '\\p{Script_Extensions=Osmanya}');
    testPropertyEscapes(/^\p{Script_Extensions=Osma}+$/u, matchSymbols, '\\p{Script_Extensions=Osma}');
    testPropertyEscapes(/^\p{scx=Osmanya}+$/u, matchSymbols, '\\p{scx=Osmanya}');
    testPropertyEscapes(/^\p{scx=Osma}+$/u, matchSymbols, '\\p{scx=Osma}');
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
                66687
            ],
            [
                66718,
                66719
            ],
            [
                66730,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Osmanya}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Osmanya}');
    testPropertyEscapes(/^\P{Script_Extensions=Osma}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Osma}');
    testPropertyEscapes(/^\P{scx=Osmanya}+$/u, nonMatchSymbols, '\\P{scx=Osmanya}');
    testPropertyEscapes(/^\P{scx=Osma}+$/u, nonMatchSymbols, '\\P{scx=Osma}');
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