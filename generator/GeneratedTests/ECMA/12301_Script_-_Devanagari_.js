try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2304,
                2384
            ],
            [
                2389,
                2403
            ],
            [
                2406,
                2431
            ],
            [
                43232,
                43263
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Devanagari}+$/u, matchSymbols, '\\p{Script=Devanagari}');
    testPropertyEscapes(/^\p{Script=Deva}+$/u, matchSymbols, '\\p{Script=Deva}');
    testPropertyEscapes(/^\p{sc=Devanagari}+$/u, matchSymbols, '\\p{sc=Devanagari}');
    testPropertyEscapes(/^\p{sc=Deva}+$/u, matchSymbols, '\\p{sc=Deva}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2303
            ],
            [
                2385,
                2388
            ],
            [
                2404,
                2405
            ],
            [
                2432,
                43231
            ],
            [
                43264,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Devanagari}+$/u, nonMatchSymbols, '\\P{Script=Devanagari}');
    testPropertyEscapes(/^\P{Script=Deva}+$/u, nonMatchSymbols, '\\P{Script=Deva}');
    testPropertyEscapes(/^\P{sc=Devanagari}+$/u, nonMatchSymbols, '\\P{sc=Devanagari}');
    testPropertyEscapes(/^\P{sc=Deva}+$/u, nonMatchSymbols, '\\P{sc=Deva}');
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