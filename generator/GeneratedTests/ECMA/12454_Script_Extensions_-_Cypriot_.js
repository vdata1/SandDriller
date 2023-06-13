try {
    const matchSymbols = buildString({
        loneCodePoints: [
            67592,
            67644,
            67647
        ],
        ranges: [
            [
                65792,
                65794
            ],
            [
                65799,
                65843
            ],
            [
                65847,
                65855
            ],
            [
                67584,
                67589
            ],
            [
                67594,
                67637
            ],
            [
                67639,
                67640
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Cypriot}+$/u, matchSymbols, '\\p{Script_Extensions=Cypriot}');
    testPropertyEscapes(/^\p{Script_Extensions=Cprt}+$/u, matchSymbols, '\\p{Script_Extensions=Cprt}');
    testPropertyEscapes(/^\p{scx=Cypriot}+$/u, matchSymbols, '\\p{scx=Cypriot}');
    testPropertyEscapes(/^\p{scx=Cprt}+$/u, matchSymbols, '\\p{scx=Cprt}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            67593,
            67638
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
                65791
            ],
            [
                65795,
                65798
            ],
            [
                65844,
                65846
            ],
            [
                65856,
                67583
            ],
            [
                67590,
                67591
            ],
            [
                67641,
                67643
            ],
            [
                67645,
                67646
            ],
            [
                67648,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Cypriot}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cypriot}');
    testPropertyEscapes(/^\P{Script_Extensions=Cprt}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Cprt}');
    testPropertyEscapes(/^\P{scx=Cypriot}+$/u, nonMatchSymbols, '\\P{scx=Cypriot}');
    testPropertyEscapes(/^\P{scx=Cprt}+$/u, nonMatchSymbols, '\\P{scx=Cprt}');
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