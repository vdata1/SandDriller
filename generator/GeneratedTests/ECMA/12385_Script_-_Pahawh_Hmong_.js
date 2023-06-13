try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                92928,
                92997
            ],
            [
                93008,
                93017
            ],
            [
                93019,
                93025
            ],
            [
                93027,
                93047
            ],
            [
                93053,
                93071
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Pahawh_Hmong}+$/u, matchSymbols, '\\p{Script=Pahawh_Hmong}');
    testPropertyEscapes(/^\p{Script=Hmng}+$/u, matchSymbols, '\\p{Script=Hmng}');
    testPropertyEscapes(/^\p{sc=Pahawh_Hmong}+$/u, matchSymbols, '\\p{sc=Pahawh_Hmong}');
    testPropertyEscapes(/^\p{sc=Hmng}+$/u, matchSymbols, '\\p{sc=Hmng}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            93018,
            93026
        ],
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
                92927
            ],
            [
                92998,
                93007
            ],
            [
                93048,
                93052
            ],
            [
                93072,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Pahawh_Hmong}+$/u, nonMatchSymbols, '\\P{Script=Pahawh_Hmong}');
    testPropertyEscapes(/^\P{Script=Hmng}+$/u, nonMatchSymbols, '\\P{Script=Hmng}');
    testPropertyEscapes(/^\P{sc=Pahawh_Hmong}+$/u, nonMatchSymbols, '\\P{sc=Pahawh_Hmong}');
    testPropertyEscapes(/^\P{sc=Hmng}+$/u, nonMatchSymbols, '\\P{sc=Hmng}');
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