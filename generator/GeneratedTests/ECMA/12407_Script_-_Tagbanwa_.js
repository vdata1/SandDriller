try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5984,
                5996
            ],
            [
                5998,
                6000
            ],
            [
                6002,
                6003
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Tagbanwa}+$/u, matchSymbols, '\\p{Script=Tagbanwa}');
    testPropertyEscapes(/^\p{Script=Tagb}+$/u, matchSymbols, '\\p{Script=Tagb}');
    testPropertyEscapes(/^\p{sc=Tagbanwa}+$/u, matchSymbols, '\\p{sc=Tagbanwa}');
    testPropertyEscapes(/^\p{sc=Tagb}+$/u, matchSymbols, '\\p{sc=Tagb}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            5997,
            6001
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5983
            ],
            [
                6004,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Tagbanwa}+$/u, nonMatchSymbols, '\\P{Script=Tagbanwa}');
    testPropertyEscapes(/^\P{Script=Tagb}+$/u, nonMatchSymbols, '\\P{Script=Tagb}');
    testPropertyEscapes(/^\P{sc=Tagbanwa}+$/u, nonMatchSymbols, '\\P{sc=Tagbanwa}');
    testPropertyEscapes(/^\P{sc=Tagb}+$/u, nonMatchSymbols, '\\P{sc=Tagb}');
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