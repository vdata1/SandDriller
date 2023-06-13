try {
    const matchSymbols = buildString({
        loneCodePoints: [2768],
        ranges: [
            [
                2689,
                2691
            ],
            [
                2693,
                2701
            ],
            [
                2703,
                2705
            ],
            [
                2707,
                2728
            ],
            [
                2730,
                2736
            ],
            [
                2738,
                2739
            ],
            [
                2741,
                2745
            ],
            [
                2748,
                2757
            ],
            [
                2759,
                2761
            ],
            [
                2763,
                2765
            ],
            [
                2784,
                2787
            ],
            [
                2790,
                2801
            ],
            [
                2809,
                2815
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Gujarati}+$/u, matchSymbols, '\\p{Script=Gujarati}');
    testPropertyEscapes(/^\p{Script=Gujr}+$/u, matchSymbols, '\\p{Script=Gujr}');
    testPropertyEscapes(/^\p{sc=Gujarati}+$/u, matchSymbols, '\\p{sc=Gujarati}');
    testPropertyEscapes(/^\p{sc=Gujr}+$/u, matchSymbols, '\\p{sc=Gujr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2692,
            2702,
            2706,
            2729,
            2737,
            2740,
            2758,
            2762
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2688
            ],
            [
                2746,
                2747
            ],
            [
                2766,
                2767
            ],
            [
                2769,
                2783
            ],
            [
                2788,
                2789
            ],
            [
                2802,
                2808
            ],
            [
                2816,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Gujarati}+$/u, nonMatchSymbols, '\\P{Script=Gujarati}');
    testPropertyEscapes(/^\P{Script=Gujr}+$/u, nonMatchSymbols, '\\P{Script=Gujr}');
    testPropertyEscapes(/^\P{sc=Gujarati}+$/u, nonMatchSymbols, '\\P{sc=Gujarati}');
    testPropertyEscapes(/^\P{sc=Gujr}+$/u, nonMatchSymbols, '\\P{sc=Gujr}');
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