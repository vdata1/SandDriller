try {
    const matchSymbols = buildString({
        loneCodePoints: [
            4696,
            4800
        ],
        ranges: [
            [
                4608,
                4680
            ],
            [
                4682,
                4685
            ],
            [
                4688,
                4694
            ],
            [
                4698,
                4701
            ],
            [
                4704,
                4744
            ],
            [
                4746,
                4749
            ],
            [
                4752,
                4784
            ],
            [
                4786,
                4789
            ],
            [
                4792,
                4798
            ],
            [
                4802,
                4805
            ],
            [
                4808,
                4822
            ],
            [
                4824,
                4880
            ],
            [
                4882,
                4885
            ],
            [
                4888,
                4954
            ],
            [
                4957,
                4988
            ],
            [
                4992,
                5017
            ],
            [
                11648,
                11670
            ],
            [
                11680,
                11686
            ],
            [
                11688,
                11694
            ],
            [
                11696,
                11702
            ],
            [
                11704,
                11710
            ],
            [
                11712,
                11718
            ],
            [
                11720,
                11726
            ],
            [
                11728,
                11734
            ],
            [
                11736,
                11742
            ],
            [
                43777,
                43782
            ],
            [
                43785,
                43790
            ],
            [
                43793,
                43798
            ],
            [
                43808,
                43814
            ],
            [
                43816,
                43822
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Ethiopic}+$/u, matchSymbols, '\\p{Script_Extensions=Ethiopic}');
    testPropertyEscapes(/^\p{Script_Extensions=Ethi}+$/u, matchSymbols, '\\p{Script_Extensions=Ethi}');
    testPropertyEscapes(/^\p{scx=Ethiopic}+$/u, matchSymbols, '\\p{scx=Ethiopic}');
    testPropertyEscapes(/^\p{scx=Ethi}+$/u, matchSymbols, '\\p{scx=Ethi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            4681,
            4695,
            4697,
            4745,
            4785,
            4799,
            4801,
            4823,
            4881,
            11687,
            11695,
            11703,
            11711,
            11719,
            11727,
            11735,
            43815
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4607
            ],
            [
                4686,
                4687
            ],
            [
                4702,
                4703
            ],
            [
                4750,
                4751
            ],
            [
                4790,
                4791
            ],
            [
                4806,
                4807
            ],
            [
                4886,
                4887
            ],
            [
                4955,
                4956
            ],
            [
                4989,
                4991
            ],
            [
                5018,
                11647
            ],
            [
                11671,
                11679
            ],
            [
                11743,
                43776
            ],
            [
                43783,
                43784
            ],
            [
                43791,
                43792
            ],
            [
                43799,
                43807
            ],
            [
                43823,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Ethiopic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Ethiopic}');
    testPropertyEscapes(/^\P{Script_Extensions=Ethi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Ethi}');
    testPropertyEscapes(/^\P{scx=Ethiopic}+$/u, nonMatchSymbols, '\\P{scx=Ethiopic}');
    testPropertyEscapes(/^\P{scx=Ethi}+$/u, nonMatchSymbols, '\\P{scx=Ethi}');
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