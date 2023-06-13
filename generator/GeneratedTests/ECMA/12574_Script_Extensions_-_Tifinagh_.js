try {
    const matchSymbols = buildString({
        loneCodePoints: [11647],
        ranges: [
            [
                11568,
                11623
            ],
            [
                11631,
                11632
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Tifinagh}+$/u, matchSymbols, '\\p{Script_Extensions=Tifinagh}');
    testPropertyEscapes(/^\p{Script_Extensions=Tfng}+$/u, matchSymbols, '\\p{Script_Extensions=Tfng}');
    testPropertyEscapes(/^\p{scx=Tifinagh}+$/u, matchSymbols, '\\p{scx=Tifinagh}');
    testPropertyEscapes(/^\p{scx=Tfng}+$/u, matchSymbols, '\\p{scx=Tfng}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                11567
            ],
            [
                11624,
                11630
            ],
            [
                11633,
                11646
            ],
            [
                11648,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Tifinagh}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tifinagh}');
    testPropertyEscapes(/^\P{Script_Extensions=Tfng}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Tfng}');
    testPropertyEscapes(/^\P{scx=Tifinagh}+$/u, nonMatchSymbols, '\\P{scx=Tifinagh}');
    testPropertyEscapes(/^\P{scx=Tfng}+$/u, nonMatchSymbols, '\\P{scx=Tfng}');
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