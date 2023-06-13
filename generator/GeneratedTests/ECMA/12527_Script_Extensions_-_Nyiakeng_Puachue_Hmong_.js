try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                123136,
                123180
            ],
            [
                123184,
                123197
            ],
            [
                123200,
                123209
            ],
            [
                123214,
                123215
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Nyiakeng_Puachue_Hmong}+$/u, matchSymbols, '\\p{Script_Extensions=Nyiakeng_Puachue_Hmong}');
    testPropertyEscapes(/^\p{Script_Extensions=Hmnp}+$/u, matchSymbols, '\\p{Script_Extensions=Hmnp}');
    testPropertyEscapes(/^\p{scx=Nyiakeng_Puachue_Hmong}+$/u, matchSymbols, '\\p{scx=Nyiakeng_Puachue_Hmong}');
    testPropertyEscapes(/^\p{scx=Hmnp}+$/u, matchSymbols, '\\p{scx=Hmnp}');
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
                123135
            ],
            [
                123181,
                123183
            ],
            [
                123198,
                123199
            ],
            [
                123210,
                123213
            ],
            [
                123216,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Nyiakeng_Puachue_Hmong}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Nyiakeng_Puachue_Hmong}');
    testPropertyEscapes(/^\P{Script_Extensions=Hmnp}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Hmnp}');
    testPropertyEscapes(/^\P{scx=Nyiakeng_Puachue_Hmong}+$/u, nonMatchSymbols, '\\P{scx=Nyiakeng_Puachue_Hmong}');
    testPropertyEscapes(/^\P{scx=Hmnp}+$/u, nonMatchSymbols, '\\P{scx=Hmnp}');
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