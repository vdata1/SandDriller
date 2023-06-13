try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                43072,
                43127
            ]]
    });
    testPropertyEscapes(/^\p{Script=Phags_Pa}+$/u, matchSymbols, '\\p{Script=Phags_Pa}');
    testPropertyEscapes(/^\p{Script=Phag}+$/u, matchSymbols, '\\p{Script=Phag}');
    testPropertyEscapes(/^\p{sc=Phags_Pa}+$/u, matchSymbols, '\\p{sc=Phags_Pa}');
    testPropertyEscapes(/^\p{sc=Phag}+$/u, matchSymbols, '\\p{sc=Phag}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                43071
            ],
            [
                43128,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Phags_Pa}+$/u, nonMatchSymbols, '\\P{Script=Phags_Pa}');
    testPropertyEscapes(/^\P{Script=Phag}+$/u, nonMatchSymbols, '\\P{Script=Phag}');
    testPropertyEscapes(/^\P{sc=Phags_Pa}+$/u, nonMatchSymbols, '\\P{sc=Phags_Pa}');
    testPropertyEscapes(/^\P{sc=Phag}+$/u, nonMatchSymbols, '\\P{sc=Phag}');
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