try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [[
                5952,
                5971
            ]]
    });
    testPropertyEscapes(/^\p{Script=Buhid}+$/u, matchSymbols, '\\p{Script=Buhid}');
    testPropertyEscapes(/^\p{Script=Buhd}+$/u, matchSymbols, '\\p{Script=Buhd}');
    testPropertyEscapes(/^\p{sc=Buhid}+$/u, matchSymbols, '\\p{sc=Buhid}');
    testPropertyEscapes(/^\p{sc=Buhd}+$/u, matchSymbols, '\\p{sc=Buhd}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                5951
            ],
            [
                5972,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Buhid}+$/u, nonMatchSymbols, '\\P{Script=Buhid}');
    testPropertyEscapes(/^\P{Script=Buhd}+$/u, nonMatchSymbols, '\\P{Script=Buhd}');
    testPropertyEscapes(/^\P{sc=Buhid}+$/u, nonMatchSymbols, '\\P{sc=Buhid}');
    testPropertyEscapes(/^\P{sc=Buhd}+$/u, nonMatchSymbols, '\\P{sc=Buhd}');
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