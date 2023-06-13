try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                2404,
                2405
            ],
            [
                2534,
                2543
            ],
            [
                43008,
                43052
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script_Extensions=Syloti_Nagri}+$/u, matchSymbols, '\\p{Script_Extensions=Syloti_Nagri}');
    testPropertyEscapes(/^\p{Script_Extensions=Sylo}+$/u, matchSymbols, '\\p{Script_Extensions=Sylo}');
    testPropertyEscapes(/^\p{scx=Syloti_Nagri}+$/u, matchSymbols, '\\p{scx=Syloti_Nagri}');
    testPropertyEscapes(/^\p{scx=Sylo}+$/u, matchSymbols, '\\p{scx=Sylo}');
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
                2533
            ],
            [
                2544,
                43007
            ],
            [
                43053,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script_Extensions=Syloti_Nagri}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Syloti_Nagri}');
    testPropertyEscapes(/^\P{Script_Extensions=Sylo}+$/u, nonMatchSymbols, '\\P{Script_Extensions=Sylo}');
    testPropertyEscapes(/^\P{scx=Syloti_Nagri}+$/u, nonMatchSymbols, '\\P{scx=Syloti_Nagri}');
    testPropertyEscapes(/^\P{scx=Sylo}+$/u, nonMatchSymbols, '\\P{scx=Sylo}');
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