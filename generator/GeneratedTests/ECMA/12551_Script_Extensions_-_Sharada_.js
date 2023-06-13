try {
    const matchSymbols = buildString({
        loneCodePoints: [
            2385,
            7383,
            7385,
            7392
        ],
        ranges: [
            [
                7388,
                7389
            ],
            [
                70016,
                70111
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Sharada}+$/u, matchSymbols, '\\p{Script_Extensions=Sharada}');
    testPropertyEscapes(/^\p{Script_Extensions=Shrd}+$/u, matchSymbols, '\\p{Script_Extensions=Shrd}');
    testPropertyEscapes(/^\p{scx=Sharada}+$/u, matchSymbols, '\\p{scx=Sharada}');
    testPropertyEscapes(/^\p{scx=Shrd}+$/u, matchSymbols, '\\p{scx=Shrd}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [7384],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2384
            ],
            [
                2386,
                7382
            ],
            [
                7386,
                7387
            ],
            [
                7390,
                7391
            ],
            [
                7393,
                56319
            ],
            [
                57344,
                70015
            ],
            [
                70112,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Sharada}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sharada}');
    testPropertyEscapes(/^\P{Script_Extensions=Shrd}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Shrd}');
    testPropertyEscapes(/^\P{scx=Sharada}+$/u, nonMatchSymbols, '\\P{scx=Sharada}');
    testPropertyEscapes(/^\P{scx=Shrd}+$/u, nonMatchSymbols, '\\P{scx=Shrd}');
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