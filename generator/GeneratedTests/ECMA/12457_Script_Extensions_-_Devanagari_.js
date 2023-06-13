try {
    const matchSymbols = buildString({
        loneCodePoints: [8432],
        ranges: [
            [
                2304,
                2386
            ],
            [
                2389,
                2431
            ],
            [
                7376,
                7414
            ],
            [
                7416,
                7417
            ],
            [
                43056,
                43065
            ],
            [
                43232,
                43263
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Devanagari}+$/u, matchSymbols, '\\p{Script_Extensions=Devanagari}');
    testPropertyEscapes(/^\p{Script_Extensions=Deva}+$/u, matchSymbols, '\\p{Script_Extensions=Deva}');
    testPropertyEscapes(/^\p{scx=Devanagari}+$/u, matchSymbols, '\\p{scx=Devanagari}');
    testPropertyEscapes(/^\p{scx=Deva}+$/u, matchSymbols, '\\p{scx=Deva}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [7415],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2303
            ],
            [
                2387,
                2388
            ],
            [
                2432,
                7375
            ],
            [
                7418,
                8431
            ],
            [
                8433,
                43055
            ],
            [
                43066,
                43231
            ],
            [
                43264,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Devanagari}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Devanagari}');
    testPropertyEscapes(/^\P{Script_Extensions=Deva}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Deva}');
    testPropertyEscapes(/^\P{scx=Devanagari}+$/u, nonMatchSymbols, '\\P{scx=Devanagari}');
    testPropertyEscapes(/^\P{scx=Deva}+$/u, nonMatchSymbols, '\\P{scx=Deva}');
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