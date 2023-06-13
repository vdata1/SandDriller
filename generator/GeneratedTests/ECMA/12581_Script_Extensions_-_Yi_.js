try {
    const matchSymbols = buildString({
        loneCodePoints: [12539],
        ranges: [
            [
                12289,
                12290
            ],
            [
                12296,
                12305
            ],
            [
                12308,
                12315
            ],
            [
                40960,
                42124
            ],
            [
                42128,
                42182
            ],
            [
                65377,
                65381
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Yi}+$/u, matchSymbols, '\\p{Script_Extensions=Yi}');
    testPropertyEscapes(/^\p{Script_Extensions=Yiii}+$/u, matchSymbols, '\\p{Script_Extensions=Yiii}');
    testPropertyEscapes(/^\p{scx=Yi}+$/u, matchSymbols, '\\p{scx=Yi}');
    testPropertyEscapes(/^\p{scx=Yiii}+$/u, matchSymbols, '\\p{scx=Yiii}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                12288
            ],
            [
                12291,
                12295
            ],
            [
                12306,
                12307
            ],
            [
                12316,
                12538
            ],
            [
                12540,
                40959
            ],
            [
                42125,
                42127
            ],
            [
                42183,
                56319
            ],
            [
                57344,
                65376
            ],
            [
                65382,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Yi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Yi}');
    testPropertyEscapes(/^\P{Script_Extensions=Yiii}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Yiii}');
    testPropertyEscapes(/^\P{scx=Yi}+$/u, nonMatchSymbols, '\\P{scx=Yi}');
    testPropertyEscapes(/^\P{scx=Yiii}+$/u, nonMatchSymbols, '\\P{scx=Yiii}');
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