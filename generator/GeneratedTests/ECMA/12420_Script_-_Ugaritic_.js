try {
    const matchSymbols = buildString({
        loneCodePoints: [66463],
        ranges: [[
                66432,
                66461
            ]]
    });
    testPropertyEscapes(/^\p{Script=Ugaritic}+$/u, matchSymbols, '\\p{Script=Ugaritic}');
    testPropertyEscapes(/^\p{Script=Ugar}+$/u, matchSymbols, '\\p{Script=Ugar}');
    testPropertyEscapes(/^\p{sc=Ugaritic}+$/u, matchSymbols, '\\p{sc=Ugaritic}');
    testPropertyEscapes(/^\p{sc=Ugar}+$/u, matchSymbols, '\\p{sc=Ugar}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [66462],
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
                66431
            ],
            [
                66464,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Ugaritic}+$/u, nonMatchSymbols, '\\P{Script=Ugaritic}');
    testPropertyEscapes(/^\P{Script=Ugar}+$/u, nonMatchSymbols, '\\P{Script=Ugar}');
    testPropertyEscapes(/^\P{sc=Ugaritic}+$/u, nonMatchSymbols, '\\P{sc=Ugaritic}');
    testPropertyEscapes(/^\P{sc=Ugar}+$/u, nonMatchSymbols, '\\P{sc=Ugar}');
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