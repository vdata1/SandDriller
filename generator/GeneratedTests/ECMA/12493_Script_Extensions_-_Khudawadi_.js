try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2404,
                2405
            ],
            [
                43056,
                43065
            ],
            [
                70320,
                70378
            ],
            [
                70384,
                70393
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Khudawadi}+$/u, matchSymbols, '\\p{Script_Extensions=Khudawadi}');
    testPropertyEscapes(/^\p{Script_Extensions=Sind}+$/u, matchSymbols, '\\p{Script_Extensions=Sind}');
    testPropertyEscapes(/^\p{scx=Khudawadi}+$/u, matchSymbols, '\\p{scx=Khudawadi}');
    testPropertyEscapes(/^\p{scx=Sind}+$/u, matchSymbols, '\\p{scx=Sind}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2403
            ],
            [
                2406,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                70319
            ],
            [
                70379,
                70383
            ],
            [
                70394,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Khudawadi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Khudawadi}');
    testPropertyEscapes(/^\P{Script_Extensions=Sind}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sind}');
    testPropertyEscapes(/^\P{scx=Khudawadi}+$/u, nonMatchSymbols, '\\P{scx=Khudawadi}');
    testPropertyEscapes(/^\P{scx=Sind}+$/u, nonMatchSymbols, '\\P{scx=Sind}');
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