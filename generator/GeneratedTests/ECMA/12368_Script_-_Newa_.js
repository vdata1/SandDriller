try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                70656,
                70747
            ],
            [
                70749,
                70753
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Newa}+$/u, matchSymbols, '\\p{Script=Newa}');
    testPropertyEscapes(/^\p{Script=Newa}+$/u, matchSymbols, '\\p{Script=Newa}');
    testPropertyEscapes(/^\p{sc=Newa}+$/u, matchSymbols, '\\p{sc=Newa}');
    testPropertyEscapes(/^\p{sc=Newa}+$/u, matchSymbols, '\\p{sc=Newa}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [70748],
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
                70655
            ],
            [
                70754,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Newa}+$/u, nonMatchSymbols, '\\P{Script=Newa}');
    testPropertyEscapes(/^\P{Script=Newa}+$/u, nonMatchSymbols, '\\P{Script=Newa}');
    testPropertyEscapes(/^\P{sc=Newa}+$/u, nonMatchSymbols, '\\P{sc=Newa}');
    testPropertyEscapes(/^\P{sc=Newa}+$/u, nonMatchSymbols, '\\P{sc=Newa}');
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