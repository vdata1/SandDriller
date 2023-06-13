try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                71424,
                71450
            ],
            [
                71453,
                71467
            ],
            [
                71472,
                71487
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Ahom}+$/u, matchSymbols, '\\p{Script=Ahom}');
    testPropertyEscapes(/^\p{Script=Ahom}+$/u, matchSymbols, '\\p{Script=Ahom}');
    testPropertyEscapes(/^\p{sc=Ahom}+$/u, matchSymbols, '\\p{sc=Ahom}');
    testPropertyEscapes(/^\p{sc=Ahom}+$/u, matchSymbols, '\\p{sc=Ahom}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
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
                71423
            ],
            [
                71451,
                71452
            ],
            [
                71468,
                71471
            ],
            [
                71488,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Ahom}+$/u, nonMatchSymbols, '\\P{Script=Ahom}');
    testPropertyEscapes(/^\P{Script=Ahom}+$/u, nonMatchSymbols, '\\P{Script=Ahom}');
    testPropertyEscapes(/^\P{sc=Ahom}+$/u, nonMatchSymbols, '\\P{sc=Ahom}');
    testPropertyEscapes(/^\P{sc=Ahom}+$/u, nonMatchSymbols, '\\P{sc=Ahom}');
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