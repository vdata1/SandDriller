try {
    const matchSymbols = buildString({
        loneCodePoints: [94177],
        ranges: [[
                110960,
                111355
            ]]
    });
    testPropertyEscapes(/^\p{Script=Nushu}+$/u, matchSymbols, '\\p{Script=Nushu}');
    testPropertyEscapes(/^\p{Script=Nshu}+$/u, matchSymbols, '\\p{Script=Nshu}');
    testPropertyEscapes(/^\p{sc=Nushu}+$/u, matchSymbols, '\\p{sc=Nushu}');
    testPropertyEscapes(/^\p{sc=Nshu}+$/u, matchSymbols, '\\p{sc=Nshu}');
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
                94176
            ],
            [
                94178,
                110959
            ],
            [
                111356,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Nushu}+$/u, nonMatchSymbols, '\\P{Script=Nushu}');
    testPropertyEscapes(/^\P{Script=Nshu}+$/u, nonMatchSymbols, '\\P{Script=Nshu}');
    testPropertyEscapes(/^\P{sc=Nushu}+$/u, nonMatchSymbols, '\\P{sc=Nushu}');
    testPropertyEscapes(/^\P{sc=Nshu}+$/u, nonMatchSymbols, '\\P{sc=Nshu}');
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