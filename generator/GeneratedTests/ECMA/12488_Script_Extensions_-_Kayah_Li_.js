try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                43264,
                43311
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Kayah_Li}+$/u, matchSymbols, '\\p{Script_Extensions=Kayah_Li}');
    testPropertyEscapes(/^\p{Script_Extensions=Kali}+$/u, matchSymbols, '\\p{Script_Extensions=Kali}');
    testPropertyEscapes(/^\p{scx=Kayah_Li}+$/u, matchSymbols, '\\p{scx=Kayah_Li}');
    testPropertyEscapes(/^\p{scx=Kali}+$/u, matchSymbols, '\\p{scx=Kali}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43263
            ],
            [
                43312,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Kayah_Li}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kayah_Li}');
    testPropertyEscapes(/^\P{Script_Extensions=Kali}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kali}');
    testPropertyEscapes(/^\P{scx=Kayah_Li}+$/u, nonMatchSymbols, '\\P{scx=Kayah_Li}');
    testPropertyEscapes(/^\P{scx=Kali}+$/u, nonMatchSymbols, '\\P{scx=Kali}');
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