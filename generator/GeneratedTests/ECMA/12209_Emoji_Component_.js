try {
    const matchSymbols = buildString({
        loneCodePoints: [
            35,
            42,
            8205,
            8419,
            65039
        ],
        ranges: [
            [
                48,
                57
            ],
            [
                127462,
                127487
            ],
            [
                127995,
                127999
            ],
            [
                129456,
                129459
            ],
            [
                917536,
                917631
            ]
        ]
    });
    testPropertyEscapes(/^\p{Emoji_Component}+$/u, matchSymbols, '\\p{Emoji_Component}');
    testPropertyEscapes(/^\p{EComp}+$/u, matchSymbols, '\\p{EComp}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                34
            ],
            [
                36,
                41
            ],
            [
                43,
                47
            ],
            [
                58,
                8204
            ],
            [
                8206,
                8418
            ],
            [
                8420,
                56319
            ],
            [
                57344,
                65038
            ],
            [
                65040,
                127461
            ],
            [
                127488,
                127994
            ],
            [
                128000,
                129455
            ],
            [
                129460,
                917535
            ],
            [
                917632,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Emoji_Component}+$/u, nonMatchSymbols, '\\P{Emoji_Component}');
    testPropertyEscapes(/^\P{EComp}+$/u, nonMatchSymbols, '\\P{EComp}');
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