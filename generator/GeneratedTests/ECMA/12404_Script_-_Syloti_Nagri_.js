try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                43008,
                43052
            ]]
    });
    testPropertyEscapes(/^\p{Script=Syloti_Nagri}+$/u, matchSymbols, '\\p{Script=Syloti_Nagri}');
    testPropertyEscapes(/^\p{Script=Sylo}+$/u, matchSymbols, '\\p{Script=Sylo}');
    testPropertyEscapes(/^\p{sc=Syloti_Nagri}+$/u, matchSymbols, '\\p{sc=Syloti_Nagri}');
    testPropertyEscapes(/^\p{sc=Sylo}+$/u, matchSymbols, '\\p{sc=Sylo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
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
    testPropertyEscapes(/^\P{Script=Syloti_Nagri}+$/u, nonMatchSymbols, '\\P{Script=Syloti_Nagri}');
    testPropertyEscapes(/^\P{Script=Sylo}+$/u, nonMatchSymbols, '\\P{Script=Sylo}');
    testPropertyEscapes(/^\P{sc=Syloti_Nagri}+$/u, nonMatchSymbols, '\\P{sc=Syloti_Nagri}');
    testPropertyEscapes(/^\P{sc=Sylo}+$/u, nonMatchSymbols, '\\P{sc=Sylo}');
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