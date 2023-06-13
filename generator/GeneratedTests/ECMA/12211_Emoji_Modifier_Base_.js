try {
    const matchSymbols = buildString({
        loneCodePoints: [
            9757,
            9977,
            127877,
            127943,
            128124,
            128143,
            128145,
            128170,
            128378,
            128400,
            128675,
            128704,
            128716,
            129292,
            129295,
            129318,
            129399,
            129467
        ],
        ranges: [
            [
                9994,
                9997
            ],
            [
                127938,
                127940
            ],
            [
                127946,
                127948
            ],
            [
                128066,
                128067
            ],
            [
                128070,
                128080
            ],
            [
                128102,
                128120
            ],
            [
                128129,
                128131
            ],
            [
                128133,
                128135
            ],
            [
                128372,
                128373
            ],
            [
                128405,
                128406
            ],
            [
                128581,
                128583
            ],
            [
                128587,
                128591
            ],
            [
                128692,
                128694
            ],
            [
                129304,
                129311
            ],
            [
                129328,
                129337
            ],
            [
                129340,
                129342
            ],
            [
                129461,
                129462
            ],
            [
                129464,
                129465
            ],
            [
                129485,
                129487
            ],
            [
                129489,
                129501
            ]
        ]
    });
    testPropertyEscapes(/^\p{Emoji_Modifier_Base}+$/u, matchSymbols, '\\p{Emoji_Modifier_Base}');
    testPropertyEscapes(/^\p{EBase}+$/u, matchSymbols, '\\p{EBase}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            128132,
            128144,
            129463,
            129466,
            129488
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                9756
            ],
            [
                9758,
                9976
            ],
            [
                9978,
                9993
            ],
            [
                9998,
                56319
            ],
            [
                57344,
                127876
            ],
            [
                127878,
                127937
            ],
            [
                127941,
                127942
            ],
            [
                127944,
                127945
            ],
            [
                127949,
                128065
            ],
            [
                128068,
                128069
            ],
            [
                128081,
                128101
            ],
            [
                128121,
                128123
            ],
            [
                128125,
                128128
            ],
            [
                128136,
                128142
            ],
            [
                128146,
                128169
            ],
            [
                128171,
                128371
            ],
            [
                128374,
                128377
            ],
            [
                128379,
                128399
            ],
            [
                128401,
                128404
            ],
            [
                128407,
                128580
            ],
            [
                128584,
                128586
            ],
            [
                128592,
                128674
            ],
            [
                128676,
                128691
            ],
            [
                128695,
                128703
            ],
            [
                128705,
                128715
            ],
            [
                128717,
                129291
            ],
            [
                129293,
                129294
            ],
            [
                129296,
                129303
            ],
            [
                129312,
                129317
            ],
            [
                129319,
                129327
            ],
            [
                129338,
                129339
            ],
            [
                129343,
                129398
            ],
            [
                129400,
                129460
            ],
            [
                129468,
                129484
            ],
            [
                129502,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Emoji_Modifier_Base}+$/u, nonMatchSymbols, '\\P{Emoji_Modifier_Base}');
    testPropertyEscapes(/^\P{EBase}+$/u, nonMatchSymbols, '\\P{EBase}');
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