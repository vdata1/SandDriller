try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69600,
                69622
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Elymaic}+$/u, matchSymbols, '\\p{Script_Extensions=Elymaic}');
    testPropertyEscapes(/^\p{Script_Extensions=Elym}+$/u, matchSymbols, '\\p{Script_Extensions=Elym}');
    testPropertyEscapes(/^\p{scx=Elymaic}+$/u, matchSymbols, '\\p{scx=Elymaic}');
    testPropertyEscapes(/^\p{scx=Elym}+$/u, matchSymbols, '\\p{scx=Elym}');
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
                69599
            ],
            [
                69623,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Elymaic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Elymaic}');
    testPropertyEscapes(/^\P{Script_Extensions=Elym}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Elym}');
    testPropertyEscapes(/^\P{scx=Elymaic}+$/u, nonMatchSymbols, '\\P{scx=Elymaic}');
    testPropertyEscapes(/^\P{scx=Elym}+$/u, nonMatchSymbols, '\\P{scx=Elym}');
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