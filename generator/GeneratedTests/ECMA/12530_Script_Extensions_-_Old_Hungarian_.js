try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68736,
                68786
            ],
            [
                68800,
                68850
            ],
            [
                68858,
                68863
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Old_Hungarian}+$/u, matchSymbols, '\\p{Script_Extensions=Old_Hungarian}');
    testPropertyEscapes(/^\p{Script_Extensions=Hung}+$/u, matchSymbols, '\\p{Script_Extensions=Hung}');
    testPropertyEscapes(/^\p{scx=Old_Hungarian}+$/u, matchSymbols, '\\p{scx=Old_Hungarian}');
    testPropertyEscapes(/^\p{scx=Hung}+$/u, matchSymbols, '\\p{scx=Hung}');
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
                68735
            ],
            [
                68787,
                68799
            ],
            [
                68851,
                68857
            ],
            [
                68864,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Old_Hungarian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Old_Hungarian}');
    testPropertyEscapes(/^\P{Script_Extensions=Hung}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hung}');
    testPropertyEscapes(/^\P{scx=Old_Hungarian}+$/u, nonMatchSymbols, '\\P{scx=Old_Hungarian}');
    testPropertyEscapes(/^\P{scx=Hung}+$/u, nonMatchSymbols, '\\P{scx=Hung}');
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