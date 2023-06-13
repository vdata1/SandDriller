try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69376,
                69415
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Old_Sogdian}+$/u, matchSymbols, '\\p{Script_Extensions=Old_Sogdian}');
    testPropertyEscapes(/^\p{Script_Extensions=Sogo}+$/u, matchSymbols, '\\p{Script_Extensions=Sogo}');
    testPropertyEscapes(/^\p{scx=Old_Sogdian}+$/u, matchSymbols, '\\p{scx=Old_Sogdian}');
    testPropertyEscapes(/^\p{scx=Sogo}+$/u, matchSymbols, '\\p{scx=Sogo}');
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
                69375
            ],
            [
                69416,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Old_Sogdian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Old_Sogdian}');
    testPropertyEscapes(/^\P{Script_Extensions=Sogo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sogo}');
    testPropertyEscapes(/^\P{scx=Old_Sogdian}+$/u, nonMatchSymbols, '\\P{scx=Old_Sogdian}');
    testPropertyEscapes(/^\P{scx=Sogo}+$/u, nonMatchSymbols, '\\P{scx=Sogo}');
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