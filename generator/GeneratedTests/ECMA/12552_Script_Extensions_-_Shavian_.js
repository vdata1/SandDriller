try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66640,
                66687
            ]]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Shavian}+$/u, matchSymbols, '\\p{Script_Extensions=Shavian}');
    testPropertyEscapes(/^\p{Script_Extensions=Shaw}+$/u, matchSymbols, '\\p{Script_Extensions=Shaw}');
    testPropertyEscapes(/^\p{scx=Shavian}+$/u, matchSymbols, '\\p{scx=Shavian}');
    testPropertyEscapes(/^\p{scx=Shaw}+$/u, matchSymbols, '\\p{scx=Shaw}');
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
                66639
            ],
            [
                66688,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Shavian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Shavian}');
    testPropertyEscapes(/^\P{Script_Extensions=Shaw}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Shaw}');
    testPropertyEscapes(/^\P{scx=Shavian}+$/u, nonMatchSymbols, '\\P{scx=Shavian}');
    testPropertyEscapes(/^\P{scx=Shaw}+$/u, nonMatchSymbols, '\\P{scx=Shaw}');
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