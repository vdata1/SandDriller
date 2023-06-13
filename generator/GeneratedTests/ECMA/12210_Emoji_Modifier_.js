try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                127995,
                127999
            ]]
    });
    testPropertyEscapes(/^\p{Emoji_Modifier}+$/u, matchSymbols, '\\p{Emoji_Modifier}');
    testPropertyEscapes(/^\p{EMod}+$/u, matchSymbols, '\\p{EMod}');
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
                127994
            ],
            [
                128000,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Emoji_Modifier}+$/u, nonMatchSymbols, '\\P{Emoji_Modifier}');
    testPropertyEscapes(/^\P{EMod}+$/u, nonMatchSymbols, '\\P{EMod}');
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