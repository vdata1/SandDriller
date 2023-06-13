try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                70320,
                70378
            ],
            [
                70384,
                70393
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Khudawadi}+$/u, matchSymbols, '\\p{Script=Khudawadi}');
    testPropertyEscapes(/^\p{Script=Sind}+$/u, matchSymbols, '\\p{Script=Sind}');
    testPropertyEscapes(/^\p{sc=Khudawadi}+$/u, matchSymbols, '\\p{sc=Khudawadi}');
    testPropertyEscapes(/^\p{sc=Sind}+$/u, matchSymbols, '\\p{sc=Sind}');
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
                70319
            ],
            [
                70379,
                70383
            ],
            [
                70394,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Khudawadi}+$/u, nonMatchSymbols, '\\P{Script=Khudawadi}');
    testPropertyEscapes(/^\P{Script=Sind}+$/u, nonMatchSymbols, '\\P{Script=Sind}');
    testPropertyEscapes(/^\P{sc=Khudawadi}+$/u, nonMatchSymbols, '\\P{sc=Khudawadi}');
    testPropertyEscapes(/^\P{sc=Sind}+$/u, nonMatchSymbols, '\\P{sc=Sind}');
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