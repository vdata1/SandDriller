try {
    const matchSymbols = buildString({
        loneCodePoints: [43359],
        ranges: [[
                43312,
                43347
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Rejang}+$/u, matchSymbols, '\\p{Script_Extensions=Rejang}');
    testPropertyEscapes(/^\p{Script_Extensions=Rjng}+$/u, matchSymbols, '\\p{Script_Extensions=Rjng}');
    testPropertyEscapes(/^\p{scx=Rejang}+$/u, matchSymbols, '\\p{scx=Rejang}');
    testPropertyEscapes(/^\p{scx=Rjng}+$/u, matchSymbols, '\\p{scx=Rjng}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43311
            ],
            [
                43348,
                43358
            ],
            [
                43360,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Rejang}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Rejang}');
    testPropertyEscapes(/^\P{Script_Extensions=Rjng}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Rjng}');
    testPropertyEscapes(/^\P{scx=Rejang}+$/u, nonMatchSymbols, '\\P{scx=Rejang}');
    testPropertyEscapes(/^\P{scx=Rjng}+$/u, nonMatchSymbols, '\\P{scx=Rjng}');
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