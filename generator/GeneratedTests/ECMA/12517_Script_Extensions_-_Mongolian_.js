try {
    const matchSymbols = buildString({
        loneCodePoints: [8239],
        ranges: [
            [
                6144,
                6158
            ],
            [
                6160,
                6169
            ],
            [
                6176,
                6264
            ],
            [
                6272,
                6314
            ],
            [
                71264,
                71276
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Mongolian}+$/u, matchSymbols, '\\p{Script_Extensions=Mongolian}');
    testPropertyEscapes(/^\p{Script_Extensions=Mong}+$/u, matchSymbols, '\\p{Script_Extensions=Mong}');
    testPropertyEscapes(/^\p{scx=Mongolian}+$/u, matchSymbols, '\\p{scx=Mongolian}');
    testPropertyEscapes(/^\p{scx=Mong}+$/u, matchSymbols, '\\p{scx=Mong}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [6159],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6143
            ],
            [
                6170,
                6175
            ],
            [
                6265,
                6271
            ],
            [
                6315,
                8238
            ],
            [
                8240,
                56319
            ],
            [
                57344,
                71263
            ],
            [
                71277,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Mongolian}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mongolian}');
    testPropertyEscapes(/^\P{Script_Extensions=Mong}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Mong}');
    testPropertyEscapes(/^\P{scx=Mongolian}+$/u, nonMatchSymbols, '\\P{scx=Mongolian}');
    testPropertyEscapes(/^\P{scx=Mong}+$/u, nonMatchSymbols, '\\P{scx=Mong}');
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