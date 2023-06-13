try {
    const matchSymbols = buildString({
        loneCodePoints: [69837],
        ranges: [
            [
                2406,
                2415
            ],
            [
                43056,
                43065
            ],
            [
                69760,
                69825
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Kaithi}+$/u, matchSymbols, '\\p{Script_Extensions=Kaithi}');
    testPropertyEscapes(/^\p{Script_Extensions=Kthi}+$/u, matchSymbols, '\\p{Script_Extensions=Kthi}');
    testPropertyEscapes(/^\p{scx=Kaithi}+$/u, matchSymbols, '\\p{scx=Kaithi}');
    testPropertyEscapes(/^\p{scx=Kthi}+$/u, matchSymbols, '\\p{scx=Kthi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                2405
            ],
            [
                2416,
                43055
            ],
            [
                43066,
                56319
            ],
            [
                57344,
                69759
            ],
            [
                69826,
                69836
            ],
            [
                69838,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Kaithi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kaithi}');
    testPropertyEscapes(/^\P{Script_Extensions=Kthi}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Kthi}');
    testPropertyEscapes(/^\P{scx=Kaithi}+$/u, nonMatchSymbols, '\\P{scx=Kaithi}');
    testPropertyEscapes(/^\P{scx=Kthi}+$/u, nonMatchSymbols, '\\P{scx=Kthi}');
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