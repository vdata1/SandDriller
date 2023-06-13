try {
    var buffer = new SharedArrayBuffer(16);
    var obj1 = {
        valueOf: function () {
            let REPLACER = 23;
            return 1;
        }
    };
    var obj2 = {
        toString: function () {
            throw () => {
                return () => {
                };
            };
            return 1;
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
            1,
            'object\'s valueOf'
        ],
        [
            obj2,
            1,
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
            '1',
            1,
            'string \'1\''
        ],
        [
            false,
            0,
            'false'
        ],
        [
            true,
            1,
            'true'
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
            1.1,
            1,
            '1.1'
        ],
        [
            1.9,
            1,
            '1.9'
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
        items.forEach(function (item) {
            var len = item[0];
            var expected = item[1];
            var name = item[2];
            var typedArray = new TA(buffer, 0, len);
            assert.sameValue(typedArray.length, expected, name + ' length');
            assert.sameValue(typedArray.constructor, TA, name + ' constructor');
            assert.sameValue(Object.getPrototypeOf(typedArray), TA.prototype, name + ' prototype');
        });
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