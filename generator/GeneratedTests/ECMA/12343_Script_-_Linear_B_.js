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
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Linear_B}+$/u, matchSymbols, '\\p{Script=Linear_B}');
    testPropertyEscapes(/^\p{Script=Linb}+$/u, matchSymbols, '\\p{Script=Linb}');
    testPropertyEscapes(/^\p{sc=Linear_B}+$/u, matchSymbols, '\\p{sc=Linear_B}');
    testPropertyEscapes(/^\p{sc=Linb}+$/u, matchSymbols, '\\p{sc=Linb}');
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
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Linear_B}+$/u, nonMatchSymbols, '\\P{Script=Linear_B}');
    testPropertyEscapes(/^\P{Script=Linb}+$/u, nonMatchSymbols, '\\P{Script=Linb}');
    testPropertyEscapes(/^\P{sc=Linear_B}+$/u, nonMatchSymbols, '\\P{sc=Linear_B}');
    testPropertyEscapes(/^\P{sc=Linb}+$/u, nonMatchSymbols, '\\P{sc=Linb}');
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