try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43136,
                43205
            ],
            [
                43214,
                43225
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Saurashtra}+$/u, matchSymbols, '\\p{Script_Extensions=Saurashtra}');
    testPropertyEscapes(/^\p{Script_Extensions=Saur}+$/u, matchSymbols, '\\p{Script_Extensions=Saur}');
    testPropertyEscapes(/^\p{scx=Saurashtra}+$/u, matchSymbols, '\\p{scx=Saurashtra}');
    testPropertyEscapes(/^\p{scx=Saur}+$/u, matchSymbols, '\\p{scx=Saur}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43135
            ],
            [
                43206,
                43213
            ],
            [
                43226,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Saurashtra}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Saurashtra}');
    testPropertyEscapes(/^\P{Script_Extensions=Saur}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Saur}');
    testPropertyEscapes(/^\P{scx=Saurashtra}+$/u, nonMatchSymbols, '\\P{scx=Saurashtra}');
    testPropertyEscapes(/^\P{scx=Saur}+$/u, nonMatchSymbols, '\\P{scx=Saur}');
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