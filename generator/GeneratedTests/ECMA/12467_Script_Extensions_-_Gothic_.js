try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66352,
                66378
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Gothic}+$/u, matchSymbols, '\\p{Script_Extensions=Gothic}');
    testPropertyEscapes(/^\p{Script_Extensions=Goth}+$/u, matchSymbols, '\\p{Script_Extensions=Goth}');
    testPropertyEscapes(/^\p{scx=Gothic}+$/u, matchSymbols, '\\p{scx=Gothic}');
    testPropertyEscapes(/^\p{scx=Goth}+$/u, matchSymbols, '\\p{scx=Goth}');
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
                66351
            ],
            [
                66379,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Gothic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Gothic}');
    testPropertyEscapes(/^\P{Script_Extensions=Goth}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Goth}');
    testPropertyEscapes(/^\P{scx=Gothic}+$/u, nonMatchSymbols, '\\P{scx=Gothic}');
    testPropertyEscapes(/^\P{scx=Goth}+$/u, nonMatchSymbols, '\\P{scx=Goth}');
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