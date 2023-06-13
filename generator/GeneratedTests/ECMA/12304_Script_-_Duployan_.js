try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                113664,
                113770
            ],
            [
                113776,
                113788
            ],
            [
                113792,
                113800
            ],
            [
                113808,
                113817
            ],
            [
                113820,
                113823
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Duployan}+$/u, matchSymbols, '\\p{Script=Duployan}');
    testPropertyEscapes(/^\p{Script=Dupl}+$/u, matchSymbols, '\\p{Script=Dupl}');
    testPropertyEscapes(/^\p{sc=Duployan}+$/u, matchSymbols, '\\p{sc=Duployan}');
    testPropertyEscapes(/^\p{sc=Dupl}+$/u, matchSymbols, '\\p{sc=Dupl}');
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
                113663
            ],
            [
                113771,
                113775
            ],
            [
                113789,
                113791
            ],
            [
                113801,
                113807
            ],
            [
                113818,
                113819
            ],
            [
                113824,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Duployan}+$/u, nonMatchSymbols, '\\P{Script=Duployan}');
    testPropertyEscapes(/^\P{Script=Dupl}+$/u, nonMatchSymbols, '\\P{Script=Dupl}');
    testPropertyEscapes(/^\P{sc=Duployan}+$/u, nonMatchSymbols, '\\P{sc=Duployan}');
    testPropertyEscapes(/^\P{sc=Dupl}+$/u, nonMatchSymbols, '\\P{sc=Dupl}');
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