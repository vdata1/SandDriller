try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                7040,
                7103
            ],
            [
                7360,
                7367
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Sundanese}+$/u, matchSymbols, '\\p{Script_Extensions=Sundanese}');
    testPropertyEscapes(/^\p{Script_Extensions=Sund}+$/u, matchSymbols, '\\p{Script_Extensions=Sund}');
    testPropertyEscapes(/^\p{scx=Sundanese}+$/u, matchSymbols, '\\p{scx=Sundanese}');
    testPropertyEscapes(/^\p{scx=Sund}+$/u, matchSymbols, '\\p{scx=Sund}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                7039
            ],
            [
                7104,
                7359
            ],
            [
                7368,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Sundanese}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sundanese}');
    testPropertyEscapes(/^\P{Script_Extensions=Sund}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sund}');
    testPropertyEscapes(/^\P{scx=Sundanese}+$/u, nonMatchSymbols, '\\P{scx=Sundanese}');
    testPropertyEscapes(/^\P{scx=Sund}+$/u, nonMatchSymbols, '\\P{scx=Sund}');
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