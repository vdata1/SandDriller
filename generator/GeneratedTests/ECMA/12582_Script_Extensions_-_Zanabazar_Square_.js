try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                72192,
                72263
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Zanabazar_Square}+$/u, matchSymbols, '\\p{Script_Extensions=Zanabazar_Square}');
    testPropertyEscapes(/^\p{Script_Extensions=Zanb}+$/u, matchSymbols, '\\p{Script_Extensions=Zanb}');
    testPropertyEscapes(/^\p{scx=Zanabazar_Square}+$/u, matchSymbols, '\\p{scx=Zanabazar_Square}');
    testPropertyEscapes(/^\p{scx=Zanb}+$/u, matchSymbols, '\\p{scx=Zanb}');
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
                72191
            ],
            [
                72264,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Zanabazar_Square}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Zanabazar_Square}');
    testPropertyEscapes(/^\P{Script_Extensions=Zanb}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Zanb}');
    testPropertyEscapes(/^\P{scx=Zanabazar_Square}+$/u, nonMatchSymbols, '\\P{scx=Zanabazar_Square}');
    testPropertyEscapes(/^\P{scx=Zanb}+$/u, nonMatchSymbols, '\\P{scx=Zanb}');
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