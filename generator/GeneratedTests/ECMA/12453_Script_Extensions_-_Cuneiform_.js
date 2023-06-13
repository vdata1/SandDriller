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
    testPropertyEscapes(/^\p{Script_Extensions=Cuneiform}+$/u, matchSymbols, '\\p{Script_Extensions=Cuneiform}');
    testPropertyEscapes(/^\p{Script_Extensions=Xsux}+$/u, matchSymbols, '\\p{Script_Extensions=Xsux}');
    testPropertyEscapes(/^\p{scx=Cuneiform}+$/u, matchSymbols, '\\p{scx=Cuneiform}');
    testPropertyEscapes(/^\p{scx=Xsux}+$/u, matchSymbols, '\\p{scx=Xsux}');
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
    testPropertyEscapes(/^\P{Script_Extensions=Cuneiform}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cuneiform}');
    testPropertyEscapes(/^\P{Script_Extensions=Xsux}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Xsux}');
    testPropertyEscapes(/^\P{scx=Cuneiform}+$/u, nonMatchSymbols, '\\P{scx=Cuneiform}');
    testPropertyEscapes(/^\P{scx=Xsux}+$/u, nonMatchSymbols, '\\P{scx=Xsux}');
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