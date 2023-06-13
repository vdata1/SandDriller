try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                5941,
                5942
            ],
            [
                5952,
                5971
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Buhid}+$/u, matchSymbols, '\\p{Script_Extensions=Buhid}');
    testPropertyEscapes(/^\p{Script_Extensions=Buhd}+$/u, matchSymbols, '\\p{Script_Extensions=Buhd}');
    testPropertyEscapes(/^\p{scx=Buhid}+$/u, matchSymbols, '\\p{scx=Buhid}');
    testPropertyEscapes(/^\p{scx=Buhd}+$/u, matchSymbols, '\\p{scx=Buhd}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5940
            ],
            [
                5943,
                5951
            ],
            [
                5972,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Buhid}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Buhid}');
    testPropertyEscapes(/^\P{Script_Extensions=Buhd}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Buhd}');
    testPropertyEscapes(/^\P{scx=Buhid}+$/u, nonMatchSymbols, '\\P{scx=Buhid}');
    testPropertyEscapes(/^\P{scx=Buhd}+$/u, nonMatchSymbols, '\\P{scx=Buhd}');
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