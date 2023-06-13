try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                72816,
                72847
            ],
            [
                72850,
                72871
            ],
            [
                72873,
                72886
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Marchen}+$/u, matchSymbols, '\\p{Script_Extensions=Marchen}');
    testPropertyEscapes(/^\p{Script_Extensions=Marc}+$/u, matchSymbols, '\\p{Script_Extensions=Marc}');
    testPropertyEscapes(/^\p{scx=Marchen}+$/u, matchSymbols, '\\p{scx=Marchen}');
    testPropertyEscapes(/^\p{scx=Marc}+$/u, matchSymbols, '\\p{scx=Marc}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [72872],
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
                72815
            ],
            [
                72848,
                72849
            ],
            [
                72887,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Marchen}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Marchen}');
    testPropertyEscapes(/^\P{Script_Extensions=Marc}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Marc}');
    testPropertyEscapes(/^\P{scx=Marchen}+$/u, nonMatchSymbols, '\\P{scx=Marchen}');
    testPropertyEscapes(/^\P{scx=Marc}+$/u, nonMatchSymbols, '\\P{scx=Marc}');
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