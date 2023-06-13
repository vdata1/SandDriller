try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2404,
                2415
            ],
            [
                43056,
                43065
            ],
            [
                71680,
                71739
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Dogra}+$/u, matchSymbols, '\\p{Script_Extensions=Dogra}');
    testPropertyEscapes(/^\p{Script_Extensions=Dogr}+$/u, matchSymbols, '\\p{Script_Extensions=Dogr}');
    testPropertyEscapes(/^\p{scx=Dogra}+$/u, matchSymbols, '\\p{scx=Dogra}');
    testPropertyEscapes(/^\p{scx=Dogr}+$/u, matchSymbols, '\\p{scx=Dogr}');
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
                2416,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                71679
            ],
            [
                71740,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Dogra}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Dogra}');
    testPropertyEscapes(/^\P{Script_Extensions=Dogr}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Dogr}');
    testPropertyEscapes(/^\P{scx=Dogra}+$/u, nonMatchSymbols, '\\P{scx=Dogra}');
    testPropertyEscapes(/^\P{scx=Dogr}+$/u, nonMatchSymbols, '\\P{scx=Dogr}');
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