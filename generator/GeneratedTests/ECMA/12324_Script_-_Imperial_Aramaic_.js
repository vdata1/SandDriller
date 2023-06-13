try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                67648,
                67669
            ],
            [
                67671,
                67679
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Imperial_Aramaic}+$/u, matchSymbols, '\\p{Script=Imperial_Aramaic}');
    testPropertyEscapes(/^\p{Script=Armi}+$/u, matchSymbols, '\\p{Script=Armi}');
    testPropertyEscapes(/^\p{sc=Imperial_Aramaic}+$/u, matchSymbols, '\\p{sc=Imperial_Aramaic}');
    testPropertyEscapes(/^\p{sc=Armi}+$/u, matchSymbols, '\\p{sc=Armi}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [67670],
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
                67647
            ],
            [
                67680,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Imperial_Aramaic}+$/u, nonMatchSymbols, '\\P{Script=Imperial_Aramaic}');
    testPropertyEscapes(/^\P{Script=Armi}+$/u, nonMatchSymbols, '\\P{Script=Armi}');
    testPropertyEscapes(/^\P{sc=Imperial_Aramaic}+$/u, nonMatchSymbols, '\\P{sc=Imperial_Aramaic}');
    testPropertyEscapes(/^\P{sc=Armi}+$/u, nonMatchSymbols, '\\P{sc=Armi}');
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