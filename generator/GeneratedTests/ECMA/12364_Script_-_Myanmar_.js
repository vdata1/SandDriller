try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                4096,
                4255
            ],
            [
                43488,
                43518
            ],
            [
                43616,
                43647
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Myanmar}+$/u, matchSymbols, '\\p{Script=Myanmar}');
    testPropertyEscapes(/^\p{Script=Mymr}+$/u, matchSymbols, '\\p{Script=Mymr}');
    testPropertyEscapes(/^\p{sc=Myanmar}+$/u, matchSymbols, '\\p{sc=Myanmar}');
    testPropertyEscapes(/^\p{sc=Mymr}+$/u, matchSymbols, '\\p{sc=Mymr}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                4095
            ],
            [
                4256,
                43487
            ],
            [
                43519,
                43615
            ],
            [
                43648,
                56319
            ],
            [
                57344,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Myanmar}+$/u, nonMatchSymbols, '\\P{Script=Myanmar}');
    testPropertyEscapes(/^\P{Script=Mymr}+$/u, nonMatchSymbols, '\\P{Script=Mymr}');
    testPropertyEscapes(/^\P{sc=Myanmar}+$/u, nonMatchSymbols, '\\P{sc=Myanmar}');
    testPropertyEscapes(/^\P{sc=Mymr}+$/u, nonMatchSymbols, '\\P{sc=Mymr}');
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