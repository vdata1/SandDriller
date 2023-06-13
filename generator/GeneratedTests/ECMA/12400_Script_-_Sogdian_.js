try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69424,
                69465
            ]]
    });
    testPropertyEscapes(/^\p{Script=Sogdian}+$/u, matchSymbols, '\\p{Script=Sogdian}');
    testPropertyEscapes(/^\p{Script=Sogd}+$/u, matchSymbols, '\\p{Script=Sogd}');
    testPropertyEscapes(/^\p{sc=Sogdian}+$/u, matchSymbols, '\\p{sc=Sogdian}');
    testPropertyEscapes(/^\p{sc=Sogd}+$/u, matchSymbols, '\\p{sc=Sogd}');
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
                69423
            ],
            [
                69466,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Sogdian}+$/u, nonMatchSymbols, '\\P{Script=Sogdian}');
    testPropertyEscapes(/^\P{Script=Sogd}+$/u, nonMatchSymbols, '\\P{Script=Sogd}');
    testPropertyEscapes(/^\P{sc=Sogdian}+$/u, nonMatchSymbols, '\\P{sc=Sogdian}');
    testPropertyEscapes(/^\P{sc=Sogd}+$/u, nonMatchSymbols, '\\P{sc=Sogd}');
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