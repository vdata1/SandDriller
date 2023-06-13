try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                66640,
                66687
            ]]
    });
    testPropertyEscapes(/^\p{Script=Shavian}+$/u, matchSymbols, '\\p{Script=Shavian}');
    testPropertyEscapes(/^\p{Script=Shaw}+$/u, matchSymbols, '\\p{Script=Shaw}');
    testPropertyEscapes(/^\p{sc=Shavian}+$/u, matchSymbols, '\\p{sc=Shavian}');
    testPropertyEscapes(/^\p{sc=Shaw}+$/u, matchSymbols, '\\p{sc=Shaw}');
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
                66639
            ],
            [
                66688,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Shavian}+$/u, nonMatchSymbols, '\\P{Script=Shavian}');
    testPropertyEscapes(/^\P{Script=Shaw}+$/u, nonMatchSymbols, '\\P{Script=Shaw}');
    testPropertyEscapes(/^\P{sc=Shavian}+$/u, nonMatchSymbols, '\\P{sc=Shavian}');
    testPropertyEscapes(/^\P{sc=Shaw}+$/u, nonMatchSymbols, '\\P{sc=Shaw}');
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