try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68352,
                68405
            ],
            [
                68409,
                68415
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Avestan}+$/u, matchSymbols, '\\p{Script_Extensions=Avestan}');
    testPropertyEscapes(/^\p{Script_Extensions=Avst}+$/u, matchSymbols, '\\p{Script_Extensions=Avst}');
    testPropertyEscapes(/^\p{scx=Avestan}+$/u, matchSymbols, '\\p{scx=Avestan}');
    testPropertyEscapes(/^\p{scx=Avst}+$/u, matchSymbols, '\\p{scx=Avst}');
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
                68351
            ],
            [
                68406,
                68408
            ],
            [
                68416,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Avestan}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Avestan}');
    testPropertyEscapes(/^\P{Script_Extensions=Avst}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Avst}');
    testPropertyEscapes(/^\P{scx=Avestan}+$/u, nonMatchSymbols, '\\P{scx=Avestan}');
    testPropertyEscapes(/^\P{scx=Avst}+$/u, nonMatchSymbols, '\\P{scx=Avst}');
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