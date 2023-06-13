try {
    const matchSymbols = buildString({
        loneCodePoints: [
            6586,
            43705
        ],
        ranges: [
            [
                3648,
                3652
            ],
            [
                3776,
                3780
            ],
            [
                6581,
                6583
            ],
            [
                43701,
                43702
            ],
            [
                43707,
                43708
            ]
        ]
    });
    testPropertyEscapes(/^\p{Logical_Order_Exception}+$/u, matchSymbols, '\\p{Logical_Order_Exception}');
    testPropertyEscapes(/^\p{LOE}+$/u, matchSymbols, '\\p{LOE}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [43706],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                3647
            ],
            [
                3653,
                3775
            ],
            [
                3781,
                6580
            ],
            [
                6584,
                6585
            ],
            [
                6587,
                43700
            ],
            [
                43703,
                43704
            ],
            [
                43709,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Logical_Order_Exception}+$/u, nonMatchSymbols, '\\P{Logical_Order_Exception}');
    testPropertyEscapes(/^\P{LOE}+$/u, nonMatchSymbols, '\\P{LOE}');
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