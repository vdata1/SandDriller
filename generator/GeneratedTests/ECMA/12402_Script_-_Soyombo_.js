try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                72272,
                72354
            ]]
    });
    testPropertyEscapes(/^\p{Script=Soyombo}+$/u, matchSymbols, '\\p{Script=Soyombo}');
    testPropertyEscapes(/^\p{Script=Soyo}+$/u, matchSymbols, '\\p{Script=Soyo}');
    testPropertyEscapes(/^\p{sc=Soyombo}+$/u, matchSymbols, '\\p{sc=Soyombo}');
    testPropertyEscapes(/^\p{sc=Soyo}+$/u, matchSymbols, '\\p{sc=Soyo}');
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
                72271
            ],
            [
                72355,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Soyombo}+$/u, nonMatchSymbols, '\\P{Script=Soyombo}');
    testPropertyEscapes(/^\P{Script=Soyo}+$/u, nonMatchSymbols, '\\P{Script=Soyo}');
    testPropertyEscapes(/^\P{sc=Soyombo}+$/u, nonMatchSymbols, '\\P{sc=Soyombo}');
    testPropertyEscapes(/^\P{sc=Soyo}+$/u, nonMatchSymbols, '\\P{sc=Soyo}');
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