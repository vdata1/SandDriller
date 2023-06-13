try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                66688,
                66717
            ],
            [
                66720,
                66729
            ]
        ]
    });
    testPropertyEscapes(/^\p{Script=Osmanya}+$/u, matchSymbols, '\\p{Script=Osmanya}');
    testPropertyEscapes(/^\p{Script=Osma}+$/u, matchSymbols, '\\p{Script=Osma}');
    testPropertyEscapes(/^\p{sc=Osmanya}+$/u, matchSymbols, '\\p{sc=Osmanya}');
    testPropertyEscapes(/^\p{sc=Osma}+$/u, matchSymbols, '\\p{sc=Osma}');
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
                66687
            ],
            [
                66718,
                66719
            ],
            [
                66730,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Script=Osmanya}+$/u, nonMatchSymbols, '\\P{Script=Osmanya}');
    testPropertyEscapes(/^\P{Script=Osma}+$/u, nonMatchSymbols, '\\P{Script=Osma}');
    testPropertyEscapes(/^\P{sc=Osmanya}+$/u, nonMatchSymbols, '\\P{sc=Osmanya}');
    testPropertyEscapes(/^\P{sc=Osma}+$/u, nonMatchSymbols, '\\P{sc=Osma}');
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