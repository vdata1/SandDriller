try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                70784,
                70855
            ],
            [
                70864,
                70873
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tirhuta}+$/u, matchSymbols, '\\p{Script=Tirhuta}');
    testPropertyEscapes(/^\p{Script=Tirh}+$/u, matchSymbols, '\\p{Script=Tirh}');
    testPropertyEscapes(/^\p{sc=Tirhuta}+$/u, matchSymbols, '\\p{sc=Tirhuta}');
    testPropertyEscapes(/^\p{sc=Tirh}+$/u, matchSymbols, '\\p{sc=Tirh}');
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
                70783
            ],
            [
                70856,
                70863
            ],
            [
                70874,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Tirhuta}+$/u, nonMatchSymbols, '\\P{Script=Tirhuta}');
    testPropertyEscapes(/^\P{Script=Tirh}+$/u, nonMatchSymbols, '\\P{Script=Tirh}');
    testPropertyEscapes(/^\P{sc=Tirhuta}+$/u, nonMatchSymbols, '\\P{sc=Tirhuta}');
    testPropertyEscapes(/^\P{sc=Tirh}+$/u, nonMatchSymbols, '\\P{sc=Tirh}');
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