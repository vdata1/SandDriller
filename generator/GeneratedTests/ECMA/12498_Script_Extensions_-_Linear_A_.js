try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                65799,
                65843
            ],
            [
                67072,
                67382
            ],
            [
                67392,
                67413
            ],
            [
                67424,
                67431
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Linear_A}+$/u, matchSymbols, '\\p{Script_Extensions=Linear_A}');
    testPropertyEscapes(/^\p{Script_Extensions=Lina}+$/u, matchSymbols, '\\p{Script_Extensions=Lina}');
    testPropertyEscapes(/^\p{scx=Linear_A}+$/u, matchSymbols, '\\p{scx=Linear_A}');
    testPropertyEscapes(/^\p{scx=Lina}+$/u, matchSymbols, '\\p{scx=Lina}');
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
                65798
            ],
            [
                65844,
                67071
            ],
            [
                67383,
                67391
            ],
            [
                67414,
                67423
            ],
            [
                67432,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Linear_A}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Linear_A}');
    testPropertyEscapes(/^\P{Script_Extensions=Lina}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Lina}');
    testPropertyEscapes(/^\P{scx=Linear_A}+$/u, nonMatchSymbols, '\\P{scx=Linear_A}');
    testPropertyEscapes(/^\P{scx=Lina}+$/u, nonMatchSymbols, '\\P{scx=Lina}');
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