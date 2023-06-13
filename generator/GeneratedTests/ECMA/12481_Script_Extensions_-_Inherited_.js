try {
    const matchSymbols = buildString({
        loneCodePoints: [
            7673,
            66045
        ],
        ranges: [
            [
                768,
                833
            ],
            [
                835,
                836
            ],
            [
                838,
                866
            ],
            [
                2387,
                2388
            ],
            [
                6832,
                6848
            ],
            [
                7618,
                7671
            ],
            [
                7675,
                7679
            ],
            [
                8204,
                8205
            ],
            [
                8400,
                8431
            ],
            [
                65024,
                65039
            ],
            [
                65056,
                65069
            ],
            [
                119143,
                119145
            ],
            [
                119163,
                119170
            ],
            [
                119173,
                119179
            ],
            [
                119210,
                119213
            ],
            [
                917760,
                917999
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Inherited}+$/u, matchSymbols, '\\p{Script_Extensions=Inherited}');
    testPropertyEscapes(/^\p{Script_Extensions=Zinh}+$/u, matchSymbols, '\\p{Script_Extensions=Zinh}');
    testPropertyEscapes(/^\p{Script_Extensions=Qaai}+$/u, matchSymbols, '\\p{Script_Extensions=Qaai}');
    testPropertyEscapes(/^\p{scx=Inherited}+$/u, matchSymbols, '\\p{scx=Inherited}');
    testPropertyEscapes(/^\p{scx=Zinh}+$/u, matchSymbols, '\\p{scx=Zinh}');
    testPropertyEscapes(/^\p{scx=Qaai}+$/u, matchSymbols, '\\p{scx=Qaai}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            834,
            837,
            7672,
            7674
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                767
            ],
            [
                867,
                2386
            ],
            [
                2389,
                6831
            ],
            [
                6849,
                7617
            ],
            [
                7680,
                8203
            ],
            [
                8206,
                8399
            ],
            [
                8432,
                56319
            ],
            [
                57344,
                65023
            ],
            [
                65040,
                65055
            ],
            [
                65070,
                66044
            ],
            [
                66046,
                119142
            ],
            [
                119146,
                119162
            ],
            [
                119171,
                119172
            ],
            [
                119180,
                119209
            ],
            [
                119214,
                917759
            ],
            [
                918000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Inherited}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Inherited}');
    testPropertyEscapes(/^\P{Script_Extensions=Zinh}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Zinh}');
    testPropertyEscapes(/^\P{Script_Extensions=Qaai}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Qaai}');
    testPropertyEscapes(/^\P{scx=Inherited}+$/u, nonMatchSymbols, '\\P{scx=Inherited}');
    testPropertyEscapes(/^\P{scx=Zinh}+$/u, nonMatchSymbols, '\\P{scx=Zinh}');
    testPropertyEscapes(/^\P{scx=Qaai}+$/u, nonMatchSymbols, '\\P{scx=Qaai}');
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