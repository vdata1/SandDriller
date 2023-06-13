try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66208,
                66256
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Carian}+$/u, matchSymbols, '\\p{Script_Extensions=Carian}');
    testPropertyEscapes(/^\p{Script_Extensions=Cari}+$/u, matchSymbols, '\\p{Script_Extensions=Cari}');
    testPropertyEscapes(/^\p{scx=Carian}+$/u, matchSymbols, '\\p{scx=Carian}');
    testPropertyEscapes(/^\p{scx=Cari}+$/u, matchSymbols, '\\p{scx=Cari}');
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
                66207
            ],
            [
                66257,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Carian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Carian}');
    testPropertyEscapes(/^\P{Script_Extensions=Cari}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cari}');
    testPropertyEscapes(/^\P{scx=Carian}+$/u, nonMatchSymbols, '\\P{scx=Carian}');
    testPropertyEscapes(/^\P{scx=Cari}+$/u, nonMatchSymbols, '\\P{scx=Cari}');
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