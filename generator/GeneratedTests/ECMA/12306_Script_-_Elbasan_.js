try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66816,
                66855
            ]]
    });
    testPropertyEscapes(/^\p{Script=Elbasan}+$/u, matchSymbols, '\\p{Script=Elbasan}');
    testPropertyEscapes(/^\p{Script=Elba}+$/u, matchSymbols, '\\p{Script=Elba}');
    testPropertyEscapes(/^\p{sc=Elbasan}+$/u, matchSymbols, '\\p{sc=Elbasan}');
    testPropertyEscapes(/^\p{sc=Elba}+$/u, matchSymbols, '\\p{sc=Elba}');
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
                66815
            ],
            [
                66856,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Elbasan}+$/u, nonMatchSymbols, '\\P{Script=Elbasan}');
    testPropertyEscapes(/^\P{Script=Elba}+$/u, nonMatchSymbols, '\\P{Script=Elba}');
    testPropertyEscapes(/^\P{sc=Elbasan}+$/u, nonMatchSymbols, '\\P{sc=Elbasan}');
    testPropertyEscapes(/^\P{sc=Elba}+$/u, nonMatchSymbols, '\\P{sc=Elba}');
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