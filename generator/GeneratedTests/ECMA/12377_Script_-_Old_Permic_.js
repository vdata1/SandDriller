try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66384,
                66426
            ]]
    });
    testPropertyEscapes(/^\p{Script=Old_Permic}+$/u, matchSymbols, '\\p{Script=Old_Permic}');
    testPropertyEscapes(/^\p{Script=Perm}+$/u, matchSymbols, '\\p{Script=Perm}');
    testPropertyEscapes(/^\p{sc=Old_Permic}+$/u, matchSymbols, '\\p{sc=Old_Permic}');
    testPropertyEscapes(/^\p{sc=Perm}+$/u, matchSymbols, '\\p{sc=Perm}');
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
                66383
            ],
            [
                66427,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Old_Permic}+$/u, nonMatchSymbols, '\\P{Script=Old_Permic}');
    testPropertyEscapes(/^\P{Script=Perm}+$/u, nonMatchSymbols, '\\P{Script=Perm}');
    testPropertyEscapes(/^\P{sc=Old_Permic}+$/u, nonMatchSymbols, '\\P{sc=Old_Permic}');
    testPropertyEscapes(/^\P{sc=Perm}+$/u, nonMatchSymbols, '\\P{sc=Perm}');
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