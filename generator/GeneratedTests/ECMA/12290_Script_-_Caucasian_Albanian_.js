try {
    const matchSymbols = buildString({
        loneCodePoints: [66927],
        ranges: [[
                66864,
                66915
            ]]
    });
    testPropertyEscapes(/^\p{Script=Caucasian_Albanian}+$/u, matchSymbols, '\\p{Script=Caucasian_Albanian}');
    testPropertyEscapes(/^\p{Script=Aghb}+$/u, matchSymbols, '\\p{Script=Aghb}');
    testPropertyEscapes(/^\p{sc=Caucasian_Albanian}+$/u, matchSymbols, '\\p{sc=Caucasian_Albanian}');
    testPropertyEscapes(/^\p{sc=Aghb}+$/u, matchSymbols, '\\p{sc=Aghb}');
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
                66863
            ],
            [
                66916,
                66926
            ],
            [
                66928,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Caucasian_Albanian}+$/u, nonMatchSymbols, '\\P{Script=Caucasian_Albanian}');
    testPropertyEscapes(/^\P{Script=Aghb}+$/u, nonMatchSymbols, '\\P{Script=Aghb}');
    testPropertyEscapes(/^\P{sc=Caucasian_Albanian}+$/u, nonMatchSymbols, '\\P{sc=Caucasian_Albanian}');
    testPropertyEscapes(/^\P{sc=Aghb}+$/u, nonMatchSymbols, '\\P{sc=Aghb}');
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