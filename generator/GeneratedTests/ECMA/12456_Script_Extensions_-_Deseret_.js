try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66560,
                66639
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Deseret}+$/u, matchSymbols, '\\p{Script_Extensions=Deseret}');
    testPropertyEscapes(/^\p{Script_Extensions=Dsrt}+$/u, matchSymbols, '\\p{Script_Extensions=Dsrt}');
    testPropertyEscapes(/^\p{scx=Deseret}+$/u, matchSymbols, '\\p{scx=Deseret}');
    testPropertyEscapes(/^\p{scx=Dsrt}+$/u, matchSymbols, '\\p{scx=Dsrt}');
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
                66559
            ],
            [
                66640,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Deseret}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Deseret}');
    testPropertyEscapes(/^\P{Script_Extensions=Dsrt}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Dsrt}');
    testPropertyEscapes(/^\P{scx=Deseret}+$/u, nonMatchSymbols, '\\P{scx=Deseret}');
    testPropertyEscapes(/^\P{scx=Dsrt}+$/u, nonMatchSymbols, '\\P{scx=Dsrt}');
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