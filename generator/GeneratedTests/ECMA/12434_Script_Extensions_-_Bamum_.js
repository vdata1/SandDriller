try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                42656,
                42743
            ],
            [
                92160,
                92728
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Bamum}+$/u, matchSymbols, '\\p{Script_Extensions=Bamum}');
    testPropertyEscapes(/^\p{Script_Extensions=Bamu}+$/u, matchSymbols, '\\p{Script_Extensions=Bamu}');
    testPropertyEscapes(/^\p{scx=Bamum}+$/u, matchSymbols, '\\p{scx=Bamum}');
    testPropertyEscapes(/^\p{scx=Bamu}+$/u, matchSymbols, '\\p{scx=Bamu}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                42655
            ],
            [
                42744,
                56319
            ],
            [
                57344,
                92159
            ],
            [
                92729,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Bamum}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bamum}');
    testPropertyEscapes(/^\P{Script_Extensions=Bamu}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Bamu}');
    testPropertyEscapes(/^\P{scx=Bamum}+$/u, nonMatchSymbols, '\\P{scx=Bamum}');
    testPropertyEscapes(/^\P{scx=Bamu}+$/u, nonMatchSymbols, '\\P{scx=Bamu}');
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