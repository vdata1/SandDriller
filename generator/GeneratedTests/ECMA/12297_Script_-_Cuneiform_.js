try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                73728,
                74649
            ],
            [
                74752,
                74862
            ],
            [
                74864,
                74868
            ],
            [
                74880,
                75075
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Cuneiform}+$/u, matchSymbols, '\\p{Script=Cuneiform}');
    testPropertyEscapes(/^\p{Script=Xsux}+$/u, matchSymbols, '\\p{Script=Xsux}');
    testPropertyEscapes(/^\p{sc=Cuneiform}+$/u, matchSymbols, '\\p{sc=Cuneiform}');
    testPropertyEscapes(/^\p{sc=Xsux}+$/u, matchSymbols, '\\p{sc=Xsux}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [74863],
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
                73727
            ],
            [
                74650,
                74751
            ],
            [
                74869,
                74879
            ],
            [
                75076,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Cuneiform}+$/u, nonMatchSymbols, '\\P{Script=Cuneiform}');
    testPropertyEscapes(/^\P{Script=Xsux}+$/u, nonMatchSymbols, '\\P{Script=Xsux}');
    testPropertyEscapes(/^\P{sc=Cuneiform}+$/u, nonMatchSymbols, '\\P{sc=Cuneiform}');
    testPropertyEscapes(/^\P{sc=Xsux}+$/u, nonMatchSymbols, '\\P{sc=Xsux}');
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