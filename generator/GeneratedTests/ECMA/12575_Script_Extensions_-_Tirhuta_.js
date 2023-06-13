try {
    const matchSymbols = buildString({
        loneCodePoints: [7410],
        ranges: [
            [
                2385,
                2386
            ],
            [
                2404,
                2405
            ],
            [
                43056,
                43065
            ],
            [
                70784,
                70855
            ],
            [
                70864,
                70873
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tirhuta}+$/u, matchSymbols, '\\p{Script_Extensions=Tirhuta}');
    testPropertyEscapes(/^\p{Script_Extensions=Tirh}+$/u, matchSymbols, '\\p{Script_Extensions=Tirh}');
    testPropertyEscapes(/^\p{scx=Tirhuta}+$/u, matchSymbols, '\\p{scx=Tirhuta}');
    testPropertyEscapes(/^\p{scx=Tirh}+$/u, matchSymbols, '\\p{scx=Tirh}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2384
            ],
            [
                2387,
                2403
            ],
            [
                2406,
                7409
            ],
            [
                7411,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                70783
            ],
            [
                70856,
                70863
            ],
            [
                70874,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tirhuta}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tirhuta}');
    testPropertyEscapes(/^\P{Script_Extensions=Tirh}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tirh}');
    testPropertyEscapes(/^\P{scx=Tirhuta}+$/u, nonMatchSymbols, '\\P{scx=Tirhuta}');
    testPropertyEscapes(/^\P{scx=Tirh}+$/u, nonMatchSymbols, '\\P{scx=Tirh}');
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