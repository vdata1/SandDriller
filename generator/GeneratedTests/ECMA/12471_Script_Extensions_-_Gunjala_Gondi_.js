try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2404,
                2405
            ],
            [
                73056,
                73061
            ],
            [
                73063,
                73064
            ],
            [
                73066,
                73102
            ],
            [
                73104,
                73105
            ],
            [
                73107,
                73112
            ],
            [
                73120,
                73129
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Gunjala_Gondi}+$/u, matchSymbols, '\\p{Script_Extensions=Gunjala_Gondi}');
    testPropertyEscapes(/^\p{Script_Extensions=Gong}+$/u, matchSymbols, '\\p{Script_Extensions=Gong}');
    testPropertyEscapes(/^\p{scx=Gunjala_Gondi}+$/u, matchSymbols, '\\p{scx=Gunjala_Gondi}');
    testPropertyEscapes(/^\p{scx=Gong}+$/u, matchSymbols, '\\p{scx=Gong}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            73062,
            73065,
            73103,
            73106
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
                73055
            ],
            [
                73113,
                73119
            ],
            [
                73130,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Gunjala_Gondi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Gunjala_Gondi}');
    testPropertyEscapes(/^\P{Script_Extensions=Gong}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Gong}');
    testPropertyEscapes(/^\P{scx=Gunjala_Gondi}+$/u, nonMatchSymbols, '\\P{scx=Gunjala_Gondi}');
    testPropertyEscapes(/^\P{scx=Gong}+$/u, nonMatchSymbols, '\\P{scx=Gong}');
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