try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                72272,
                72354
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Soyombo}+$/u, matchSymbols, '\\p{Script_Extensions=Soyombo}');
    testPropertyEscapes(/^\p{Script_Extensions=Soyo}+$/u, matchSymbols, '\\p{Script_Extensions=Soyo}');
    testPropertyEscapes(/^\p{scx=Soyombo}+$/u, matchSymbols, '\\p{scx=Soyombo}');
    testPropertyEscapes(/^\p{scx=Soyo}+$/u, matchSymbols, '\\p{scx=Soyo}');
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
                72271
            ],
            [
                72355,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Soyombo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Soyombo}');
    testPropertyEscapes(/^\P{Script_Extensions=Soyo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Soyo}');
    testPropertyEscapes(/^\P{scx=Soyombo}+$/u, nonMatchSymbols, '\\P{scx=Soyombo}');
    testPropertyEscapes(/^\P{scx=Soyo}+$/u, nonMatchSymbols, '\\P{scx=Soyo}');
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