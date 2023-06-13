try {
    const matchSymbols = buildString({
        loneCodePoints: [
            7386,
            7410
        ],
        ranges: [
            [
                2385,
                2386
            ],
            [
                2404,
                2405
            ],
            [
                2817,
                2819
            ],
            [
                2821,
                2828
            ],
            [
                2831,
                2832
            ],
            [
                2835,
                2856
            ],
            [
                2858,
                2864
            ],
            [
                2866,
                2867
            ],
            [
                2869,
                2873
            ],
            [
                2876,
                2884
            ],
            [
                2887,
                2888
            ],
            [
                2891,
                2893
            ],
            [
                2901,
                2903
            ],
            [
                2908,
                2909
            ],
            [
                2911,
                2915
            ],
            [
                2918,
                2935
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Oriya}+$/u, matchSymbols, '\\p{Script_Extensions=Oriya}');
    testPropertyEscapes(/^\p{Script_Extensions=Orya}+$/u, matchSymbols, '\\p{Script_Extensions=Orya}');
    testPropertyEscapes(/^\p{scx=Oriya}+$/u, matchSymbols, '\\p{scx=Oriya}');
    testPropertyEscapes(/^\p{scx=Orya}+$/u, matchSymbols, '\\p{scx=Orya}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            2820,
            2857,
            2865,
            2868,
            2910
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2384
            ],
            [
                2387,
                2403
            ],
            [
                2406,
                2816
            ],
            [
                2829,
                2830
            ],
            [
                2833,
                2834
            ],
            [
                2874,
                2875
            ],
            [
                2885,
                2886
            ],
            [
                2889,
                2890
            ],
            [
                2894,
                2900
            ],
            [
                2904,
                2907
            ],
            [
                2916,
                2917
            ],
            [
                2936,
                7385
            ],
            [
                7387,
                7409
            ],
            [
                7411,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Oriya}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Oriya}');
    testPropertyEscapes(/^\P{Script_Extensions=Orya}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Orya}');
    testPropertyEscapes(/^\P{scx=Oriya}+$/u, nonMatchSymbols, '\\P{scx=Oriya}');
    testPropertyEscapes(/^\P{scx=Orya}+$/u, nonMatchSymbols, '\\P{scx=Orya}');
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