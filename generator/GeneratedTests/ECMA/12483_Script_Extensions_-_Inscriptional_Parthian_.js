try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68416,
                68437
            ],
            [
                68440,
                68447
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Inscriptional_Parthian}+$/u, matchSymbols, '\\p{Script_Extensions=Inscriptional_Parthian}');
    testPropertyEscapes(/^\p{Script_Extensions=Prti}+$/u, matchSymbols, '\\p{Script_Extensions=Prti}');
    testPropertyEscapes(/^\p{scx=Inscriptional_Parthian}+$/u, matchSymbols, '\\p{scx=Inscriptional_Parthian}');
    testPropertyEscapes(/^\p{scx=Prti}+$/u, matchSymbols, '\\p{scx=Prti}');
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
                68415
            ],
            [
                68438,
                68439
            ],
            [
                68448,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Inscriptional_Parthian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Inscriptional_Parthian}');
    testPropertyEscapes(/^\P{Script_Extensions=Prti}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Prti}');
    testPropertyEscapes(/^\P{scx=Inscriptional_Parthian}+$/u, nonMatchSymbols, '\\P{scx=Inscriptional_Parthian}');
    testPropertyEscapes(/^\P{scx=Prti}+$/u, nonMatchSymbols, '\\P{scx=Prti}');
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