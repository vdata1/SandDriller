try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                68608,
                68680
            ]]
    });
    testPropertyEscapes(/^\p{Script=Old_Turkic}+$/u, matchSymbols, '\\p{Script=Old_Turkic}');
    testPropertyEscapes(/^\p{Script=Orkh}+$/u, matchSymbols, '\\p{Script=Orkh}');
    testPropertyEscapes(/^\p{sc=Old_Turkic}+$/u, matchSymbols, '\\p{sc=Old_Turkic}');
    testPropertyEscapes(/^\p{sc=Orkh}+$/u, matchSymbols, '\\p{sc=Orkh}');
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
    testPropertyEscapes(/^\P{Script=Old_Turkic}+$/u, nonMatchSymbols, '\\P{Script=Old_Turkic}');
    testPropertyEscapes(/^\P{Script=Orkh}+$/u, nonMatchSymbols, '\\P{Script=Orkh}');
    testPropertyEscapes(/^\P{sc=Old_Turkic}+$/u, nonMatchSymbols, '\\P{sc=Old_Turkic}');
    testPropertyEscapes(/^\P{sc=Orkh}+$/u, nonMatchSymbols, '\\P{sc=Orkh}');
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