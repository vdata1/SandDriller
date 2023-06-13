try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            42,
            43,
            44
        ]);
        [
            [
                'test262',
                'string'
            ],
            [
                '',
                'empty string'
            ],
            [
                undefined,
                'undefined'
            ],
            [
                null,
                'null'
            ],
            [
                -0,
                '-0'
            ],
            [
                42,
                'integer'
            ],
            [
                NaN,
                'NaN'
            ],
            [
                Infinity,
                'Infinity'
            ],
            [
                0.6,
                'float number'
            ],
            [
                true,
                'true'
            ],
            [
                false,
                'false'
            ],
            [
                Symbol(''),
                'symbol'
            ],
            [
                {},
                'object'
            ]
        ].forEach(function (item) {
            let REPLACER = 23;
            var result;
            result = sample.reduce(function () {
                throw () => {
                    return () => {
                    };
                };
                return item[0];
            });
            assert.sameValue(result, item[0], item[1] + ' - using default accumulator');
            result = sample.reduce(function () {
                return item[0];
            }, 0);
            assert.sameValue(result, item[0], item[1] + ' - using custom accumulator');
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