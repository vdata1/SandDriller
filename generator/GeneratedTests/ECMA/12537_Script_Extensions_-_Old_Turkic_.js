try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                68608,
                68680
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Old_Turkic}+$/u, matchSymbols, '\\p{Script_Extensions=Old_Turkic}');
    testPropertyEscapes(/^\p{Script_Extensions=Orkh}+$/u, matchSymbols, '\\p{Script_Extensions=Orkh}');
    testPropertyEscapes(/^\p{scx=Old_Turkic}+$/u, matchSymbols, '\\p{scx=Old_Turkic}');
    testPropertyEscapes(/^\p{scx=Orkh}+$/u, matchSymbols, '\\p{scx=Orkh}');
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
                68607
            ],
            [
                68681,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Old_Turkic}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Old_Turkic}');
    testPropertyEscapes(/^\P{Script_Extensions=Orkh}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Orkh}');
    testPropertyEscapes(/^\P{scx=Old_Turkic}+$/u, nonMatchSymbols, '\\P{scx=Old_Turkic}');
    testPropertyEscapes(/^\P{scx=Orkh}+$/u, nonMatchSymbols, '\\P{scx=Orkh}');
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