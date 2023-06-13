try {
    const matchSymbols = buildString({
        loneCodePoints: [
            64017,
            64031,
            64033
        ],
        ranges: [
            [
                13312,
                19903
            ],
            [
                19968,
                40956
            ],
            [
                64014,
                64015
            ],
            [
                64019,
                64020
            ],
            [
                64035,
                64036
            ],
            [
                64039,
                64041
            ],
            [
                131072,
                173789
            ],
            [
                173824,
                177972
            ],
            [
                177984,
                178205
            ],
            [
                178208,
                183969
            ],
            [
                183984,
                191456
            ],
            [
                196608,
                201546
            ]
        ]
    });
    testPropertyEscapes(/^\p{Unified_Ideograph}+$/u, matchSymbols, '\\p{Unified_Ideograph}');
    testPropertyEscapes(/^\p{UIdeo}+$/u, matchSymbols, '\\p{UIdeo}');
    const nonMatchSymbols = buildString({
        loneCodePoints: [
            64016,
            64018,
            64032,
            64034
        ],
        ranges: [
            [
                56320,
                57343
            ],
            [
                0,
                13311
            ],
            [
                19904,
                19967
            ],
            [
                40957,
                56319
            ],
            [
                57344,
                64013
            ],
            [
                64021,
                64030
            ],
            [
                64037,
                64038
            ],
            [
                64042,
                131071
            ],
            [
                173790,
                173823
            ],
            [
                177973,
                177983
            ],
            [
                178206,
                178207
            ],
            [
                183970,
                183983
            ],
            [
                191457,
                196607
            ],
            [
                201547,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\P{Unified_Ideograph}+$/u, nonMatchSymbols, '\\P{Unified_Ideograph}');
    testPropertyEscapes(/^\P{UIdeo}+$/u, nonMatchSymbols, '\\P{UIdeo}');
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