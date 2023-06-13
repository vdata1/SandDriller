try {
    const matchSymbols = buildString({
        loneCodePoints: [
            1600,
            2142
        ],
        ranges: [[
                2112,
                2139
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Mandaic}+$/u, matchSymbols, '\\p{Script_Extensions=Mandaic}');
    testPropertyEscapes(/^\p{Script_Extensions=Mand}+$/u, matchSymbols, '\\p{Script_Extensions=Mand}');
    testPropertyEscapes(/^\p{scx=Mandaic}+$/u, matchSymbols, '\\p{scx=Mandaic}');
    testPropertyEscapes(/^\p{scx=Mand}+$/u, matchSymbols, '\\p{scx=Mand}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                1599
            ],
            [
                1601,
                2111
            ],
            [
                2140,
                2141
            ],
            [
                2143,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Mandaic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mandaic}');
    testPropertyEscapes(/^\P{Script_Extensions=Mand}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mand}');
    testPropertyEscapes(/^\P{scx=Mandaic}+$/u, nonMatchSymbols, '\\P{scx=Mandaic}');
    testPropertyEscapes(/^\P{scx=Mand}+$/u, nonMatchSymbols, '\\P{scx=Mand}');
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