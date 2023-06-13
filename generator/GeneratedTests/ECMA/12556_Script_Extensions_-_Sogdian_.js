try {
    const matchSymbols = buildString({
        loneCodePoints: [1600],
        ranges: [[
                69424,
                69465
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Sogdian}+$/u, matchSymbols, '\\p{Script_Extensions=Sogdian}');
    testPropertyEscapes(/^\p{Script_Extensions=Sogd}+$/u, matchSymbols, '\\p{Script_Extensions=Sogd}');
    testPropertyEscapes(/^\p{scx=Sogdian}+$/u, matchSymbols, '\\p{scx=Sogdian}');
    testPropertyEscapes(/^\p{scx=Sogd}+$/u, matchSymbols, '\\p{scx=Sogd}');
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
                56319
            ],
            [
                57344,
                69423
            ],
            [
                69466,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Sogdian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sogdian}');
    testPropertyEscapes(/^\P{Script_Extensions=Sogd}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sogd}');
    testPropertyEscapes(/^\P{scx=Sogdian}+$/u, nonMatchSymbols, '\\P{scx=Sogdian}');
    testPropertyEscapes(/^\P{scx=Sogd}+$/u, nonMatchSymbols, '\\P{scx=Sogd}');
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