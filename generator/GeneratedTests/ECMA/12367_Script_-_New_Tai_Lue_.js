try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                6528,
                6571
            ],
            [
                6576,
                6601
            ],
            [
                6608,
                6618
            ],
            [
                6622,
                6623
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=New_Tai_Lue}+$/u, matchSymbols, '\\p{Script=New_Tai_Lue}');
    testPropertyEscapes(/^\p{Script=Talu}+$/u, matchSymbols, '\\p{Script=Talu}');
    testPropertyEscapes(/^\p{sc=New_Tai_Lue}+$/u, matchSymbols, '\\p{sc=New_Tai_Lue}');
    testPropertyEscapes(/^\p{sc=Talu}+$/u, matchSymbols, '\\p{sc=Talu}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                6527
            ],
            [
                6572,
                6575
            ],
            [
                6602,
                6607
            ],
            [
                6619,
                6621
            ],
            [
                6624,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=New_Tai_Lue}+$/u, nonMatchSymbols, '\\P{Script=New_Tai_Lue}');
    testPropertyEscapes(/^\P{Script=Talu}+$/u, nonMatchSymbols, '\\P{Script=Talu}');
    testPropertyEscapes(/^\P{sc=New_Tai_Lue}+$/u, nonMatchSymbols, '\\P{sc=New_Tai_Lue}');
    testPropertyEscapes(/^\P{sc=Talu}+$/u, nonMatchSymbols, '\\P{sc=Talu}');
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