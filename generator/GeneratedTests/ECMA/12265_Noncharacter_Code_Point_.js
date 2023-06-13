try {
    const matchSymbols = buildString({
        loneCodePoints: [],
        ranges: [
            [
                64976,
                65007
            ],
            [
                65534,
                65535
            ],
            [
                131070,
                131071
            ],
            [
                196606,
                196607
            ],
            [
                262142,
                262143
            ],
            [
                327678,
                327679
            ],
            [
                393214,
                393215
            ],
            [
                458750,
                458751
            ],
            [
                524286,
                524287
            ],
            [
                589822,
                589823
            ],
            [
                655358,
                655359
            ],
            [
                720894,
                720895
            ],
            [
                786430,
                786431
            ],
            [
                851966,
                851967
            ],
            [
                917502,
                917503
            ],
            [
                983038,
                983039
            ],
            [
                1048574,
                1048575
            ],
            [
                1114110,
                1114111
            ]
        ]
    });
    testPropertyEscapes(/^\p{Noncharacter_Code_Point}+$/u, matchSymbols, '\\p{Noncharacter_Code_Point}');
    testPropertyEscapes(/^\p{NChar}+$/u, matchSymbols, '\\p{NChar}');
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
                64975
            ],
            [
                65008,
                65533
            ],
            [
                65536,
                131069
            ],
            [
                131072,
                196605
            ],
            [
                196608,
                262141
            ],
            [
                262144,
                327677
            ],
            [
                327680,
                393213
            ],
            [
                393216,
                458749
            ],
            [
                458752,
                524285
            ],
            [
                524288,
                589821
            ],
            [
                589824,
                655357
            ],
            [
                655360,
                720893
            ],
            [
                720896,
                786429
            ],
            [
                786432,
                851965
            ],
            [
                851968,
                917501
            ],
            [
                917504,
                983037
            ],
            [
                983040,
                1048573
            ],
            [
                1048576,
                1114109
            ]
        ]
    });
    testPropertyEscapes(/^\P{Noncharacter_Code_Point}+$/u, nonMatchSymbols, '\\P{Noncharacter_Code_Point}');
    testPropertyEscapes(/^\P{NChar}+$/u, nonMatchSymbols, '\\P{NChar}');
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