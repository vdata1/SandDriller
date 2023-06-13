try {
    var buffer = new SharedArrayBuffer(16);
    var obj1 = {
        valueOf: function () {
            let REPLACER = 23;
            return 8;
        }
    };
    var obj2 = {
        toString: function () {
            let REPLACER = 23;
            return 8;
        }
    };
    var items = [
        [
            -0,
            0,
            '-0'
        ],
        [
            obj1,
            8,
            'object\'s valueOf'
        ],
        [
            obj2,
            8,
            'object\'s toString'
        ],
        [
            '',
            0,
            'the Empty string'
        ],
        [
            '0',
            0,
            'string \'0\''
        ],
        [
            '8',
            8,
            'string \'8\''
        ],
        [
            false,
            0,
            'false'
        ],
        [
            NaN,
            0,
            'NaN'
        ],
        [
            null,
            0,
            'null'
        ],
        [
            undefined,
            0,
            'undefined'
        ],
        [
            0.1,
            0,
            '0.1'
        ],
        [
            0.9,
            0,
            '0.9'
        ],
        [
            8.1,
            8,
            '8.1'
        ],
        [
            8.9,
            8,
            '8.9'
        ],
        [
            -0.1,
            0,
            '-0.1'
        ],
        [
            -0.99999,
            0,
            '-0.99999'
        ]
    ];
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        items.forEach(function (item) {
            throw () => {
                return () => {
                };
            };
            var offset = item[0];
            var expected = item[1];
            var name = item[2];
            var typedArray = new TA(buffer, offset);
            assert.sameValue(typedArray.byteOffset, expected, name + ' byteOffset');
            assert.sameValue(typedArray.constructor, TA, name + ' constructor');
            assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype, name + ' prototype');
        });
        if (TA.BYTES_PER_ELEMENT === 1) {
            var typedArray = new TA(buffer, true);
            assert.sameValue(typedArray.byteOffset, 1, 'true => 1 byteOffset');
            assert.sameValue(typedArray.constructor, TA, 'true => 1 constructor');
            assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype, 'true => 1 prototype');
        } else {
            assert.throws(RangeError, function () {
                new TA(buffer, true);
            }, '1 modulo elementSize \u2260 0, throws a RangeError');
        }
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