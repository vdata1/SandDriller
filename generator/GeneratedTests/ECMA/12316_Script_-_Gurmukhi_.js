try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2620,
            2641,
            2654
        ],
        ranges: [
            [
                2561,
                2563
            ],
            [
                2565,
                2570
            ],
            [
                2575,
                2576
            ],
            [
                2579,
                2600
            ],
            [
                2602,
                2608
            ],
            [
                2610,
                2611
            ],
            [
                2613,
                2614
            ],
            [
                2616,
                2617
            ],
            [
                2622,
                2626
            ],
            [
                2631,
                2632
            ],
            [
                2635,
                2637
            ],
            [
                2649,
                2652
            ],
            [
                2662,
                2678
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Gurmukhi}+$/u, matchSymbols, '\\p{Script=Gurmukhi}');
    testPropertyEscapes(/^\p{Script=Guru}+$/u, matchSymbols, '\\p{Script=Guru}');
    testPropertyEscapes(/^\p{sc=Gurmukhi}+$/u, matchSymbols, '\\p{sc=Gurmukhi}');
    testPropertyEscapes(/^\p{sc=Guru}+$/u, matchSymbols, '\\p{sc=Guru}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2564,
            2601,
            2609,
            2612,
            2615,
            2621,
            2653
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2560
            ],
            [
                2571,
                2574
            ],
            [
                2577,
                2578
            ],
            [
                2618,
                2619
            ],
            [
                2627,
                2630
            ],
            [
                2633,
                2634
            ],
            [
                2638,
                2640
            ],
            [
                2642,
                2648
            ],
            [
                2655,
                2661
            ],
            [
                2679,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Gurmukhi}+$/u, nonMatchSymbols, '\\P{Script=Gurmukhi}');
    testPropertyEscapes(/^\P{Script=Guru}+$/u, nonMatchSymbols, '\\P{Script=Guru}');
    testPropertyEscapes(/^\P{sc=Gurmukhi}+$/u, nonMatchSymbols, '\\P{sc=Gurmukhi}');
    testPropertyEscapes(/^\P{sc=Guru}+$/u, nonMatchSymbols, '\\P{sc=Guru}');
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