try {
    const matchSymbols = buildString({
        loneCodePoints: [
            7401,
            7410,
            7418
        ],
        ranges: [
            [
                2404,
                2405
            ],
            [
                3302,
                3311
            ],
            [
                43056,
                43061
            ],
            [
                72096,
                72103
            ],
            [
                72106,
                72151
            ],
            [
                72154,
                72164
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Nandinagari}+$/u, matchSymbols, '\\p{Script_Extensions=Nandinagari}');
    testPropertyEscapes(/^\p{Script_Extensions=Nand}+$/u, matchSymbols, '\\p{Script_Extensions=Nand}');
    testPropertyEscapes(/^\p{scx=Nandinagari}+$/u, matchSymbols, '\\p{scx=Nandinagari}');
    testPropertyEscapes(/^\p{scx=Nand}+$/u, matchSymbols, '\\p{scx=Nand}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                3301
            ],
            [
                3312,
                7400
            ],
            [
                7402,
                7409
            ],
            [
                7411,
                7417
            ],
            [
                7419,
                43055
            ],
            [
                43062,
                56319
            ],
            [
                57344,
                72095
            ],
            [
                72104,
                72105
            ],
            [
                72152,
                72153
            ],
            [
                72165,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Nandinagari}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nandinagari}');
    testPropertyEscapes(/^\P{Script_Extensions=Nand}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nand}');
    testPropertyEscapes(/^\P{scx=Nandinagari}+$/u, nonMatchSymbols, '\\P{scx=Nandinagari}');
    testPropertyEscapes(/^\P{scx=Nand}+$/u, nonMatchSymbols, '\\P{scx=Nand}');
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