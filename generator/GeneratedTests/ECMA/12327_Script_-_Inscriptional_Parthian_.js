try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                68416,
                68437
            ],
            [
                68440,
                68447
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Inscriptional_Parthian}+$/u, matchSymbols, '\\p{Script=Inscriptional_Parthian}');
    testPropertyEscapes(/^\p{Script=Prti}+$/u, matchSymbols, '\\p{Script=Prti}');
    testPropertyEscapes(/^\p{sc=Inscriptional_Parthian}+$/u, matchSymbols, '\\p{sc=Inscriptional_Parthian}');
    testPropertyEscapes(/^\p{sc=Prti}+$/u, matchSymbols, '\\p{sc=Prti}');
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
                68415
            ],
            [
                68438,
                68439
            ],
            [
                68448,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Inscriptional_Parthian}+$/u, nonMatchSymbols, '\\P{Script=Inscriptional_Parthian}');
    testPropertyEscapes(/^\P{Script=Prti}+$/u, nonMatchSymbols, '\\P{Script=Prti}');
    testPropertyEscapes(/^\P{sc=Inscriptional_Parthian}+$/u, nonMatchSymbols, '\\P{sc=Inscriptional_Parthian}');
    testPropertyEscapes(/^\P{sc=Prti}+$/u, nonMatchSymbols, '\\P{sc=Prti}');
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