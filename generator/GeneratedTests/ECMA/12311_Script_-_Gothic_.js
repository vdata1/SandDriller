try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66352,
                66378
            ]]
    });
    testPropertyEscapes(/^\p{Script=Gothic}+$/u, matchSymbols, '\\p{Script=Gothic}');
    testPropertyEscapes(/^\p{Script=Goth}+$/u, matchSymbols, '\\p{Script=Goth}');
    testPropertyEscapes(/^\p{sc=Gothic}+$/u, matchSymbols, '\\p{sc=Gothic}');
    testPropertyEscapes(/^\p{sc=Goth}+$/u, matchSymbols, '\\p{sc=Goth}');
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
                66351
            ],
            [
                66379,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Gothic}+$/u, nonMatchSymbols, '\\P{Script=Gothic}');
    testPropertyEscapes(/^\P{Script=Goth}+$/u, nonMatchSymbols, '\\P{Script=Goth}');
    testPropertyEscapes(/^\P{sc=Gothic}+$/u, nonMatchSymbols, '\\P{sc=Gothic}');
    testPropertyEscapes(/^\P{sc=Goth}+$/u, nonMatchSymbols, '\\P{sc=Goth}');
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