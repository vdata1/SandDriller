try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69968,
                70006
            ]]
    });
    testPropertyEscapes(/^\p{Script=Mahajani}+$/u, matchSymbols, '\\p{Script=Mahajani}');
    testPropertyEscapes(/^\p{Script=Mahj}+$/u, matchSymbols, '\\p{Script=Mahj}');
    testPropertyEscapes(/^\p{sc=Mahajani}+$/u, matchSymbols, '\\p{sc=Mahajani}');
    testPropertyEscapes(/^\p{sc=Mahj}+$/u, matchSymbols, '\\p{sc=Mahj}');
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
                69967
            ],
            [
                70007,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Mahajani}+$/u, nonMatchSymbols, '\\P{Script=Mahajani}');
    testPropertyEscapes(/^\P{Script=Mahj}+$/u, nonMatchSymbols, '\\P{Script=Mahj}');
    testPropertyEscapes(/^\P{sc=Mahajani}+$/u, nonMatchSymbols, '\\P{sc=Mahajani}');
    testPropertyEscapes(/^\P{sc=Mahj}+$/u, nonMatchSymbols, '\\P{sc=Mahj}');
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