try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                70016,
                70111
            ]]
    });
    testPropertyEscapes(/^\p{Script=Sharada}+$/u, matchSymbols, '\\p{Script=Sharada}');
    testPropertyEscapes(/^\p{Script=Shrd}+$/u, matchSymbols, '\\p{Script=Shrd}');
    testPropertyEscapes(/^\p{sc=Sharada}+$/u, matchSymbols, '\\p{sc=Sharada}');
    testPropertyEscapes(/^\p{sc=Shrd}+$/u, matchSymbols, '\\p{sc=Shrd}');
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
                70015
            ],
            [
                70112,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Sharada}+$/u, nonMatchSymbols, '\\P{Script=Sharada}');
    testPropertyEscapes(/^\P{Script=Shrd}+$/u, nonMatchSymbols, '\\P{Script=Shrd}');
    testPropertyEscapes(/^\P{sc=Sharada}+$/u, nonMatchSymbols, '\\P{sc=Sharada}');
    testPropertyEscapes(/^\P{sc=Shrd}+$/u, nonMatchSymbols, '\\P{sc=Shrd}');
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