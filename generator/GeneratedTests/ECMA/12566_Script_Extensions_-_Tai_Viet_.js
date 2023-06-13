try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                43648,
                43714
            ],
            [
                43739,
                43743
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tai_Viet}+$/u, matchSymbols, '\\p{Script_Extensions=Tai_Viet}');
    testPropertyEscapes(/^\p{Script_Extensions=Tavt}+$/u, matchSymbols, '\\p{Script_Extensions=Tavt}');
    testPropertyEscapes(/^\p{scx=Tai_Viet}+$/u, matchSymbols, '\\p{scx=Tai_Viet}');
    testPropertyEscapes(/^\p{scx=Tavt}+$/u, matchSymbols, '\\p{scx=Tavt}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43647
            ],
            [
                43715,
                43738
            ],
            [
                43744,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tai_Viet}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tai_Viet}');
    testPropertyEscapes(/^\P{Script_Extensions=Tavt}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tavt}');
    testPropertyEscapes(/^\P{scx=Tai_Viet}+$/u, nonMatchSymbols, '\\P{scx=Tai_Viet}');
    testPropertyEscapes(/^\P{scx=Tavt}+$/u, nonMatchSymbols, '\\P{scx=Tavt}');
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