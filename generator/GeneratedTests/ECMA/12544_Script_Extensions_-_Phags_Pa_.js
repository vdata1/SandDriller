try {
    const matchSymbols = buildString({
        loneCodePoints: [6149],
        ranges: [
            [
                6146,
                6147
            ],
            [
                43072,
                43127
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Phags_Pa}+$/u, matchSymbols, '\\p{Script_Extensions=Phags_Pa}');
    testPropertyEscapes(/^\p{Script_Extensions=Phag}+$/u, matchSymbols, '\\p{Script_Extensions=Phag}');
    testPropertyEscapes(/^\p{scx=Phags_Pa}+$/u, matchSymbols, '\\p{scx=Phags_Pa}');
    testPropertyEscapes(/^\p{scx=Phag}+$/u, matchSymbols, '\\p{scx=Phag}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [6148],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6145
            ],
            [
                6150,
                43071
            ],
            [
                43128,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Phags_Pa}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Phags_Pa}');
    testPropertyEscapes(/^\P{Script_Extensions=Phag}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Phag}');
    testPropertyEscapes(/^\P{scx=Phags_Pa}+$/u, nonMatchSymbols, '\\P{scx=Phags_Pa}');
    testPropertyEscapes(/^\P{scx=Phag}+$/u, nonMatchSymbols, '\\P{scx=Phag}');
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