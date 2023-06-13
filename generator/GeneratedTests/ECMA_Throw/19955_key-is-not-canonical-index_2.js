try {
    var keys = [
        '1.0',
        '+1',
        '1000000000000000000000',
        '0.0000001'
    ];
    testWithBigIntTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        keys.forEach(function (key) {
            let REPLACER = 23;
            var sample = new TA();
            assert.sameValue(sample[key], undefined, 'return undefined for inexistent properties [' + key + ']');
            TypedArray.prototype[key] = 'test262';
            assert.sameValue(sample[key], 'test262', 'return value from inherited key [' + key + ']');
            sample[key] = 'bar';
            assert.sameValue(sample[key], 'bar', 'return value from own key [' + key + ']');
            Object.defineProperty(sample, key, {
                get: function () {
                    throw () => {
                        return () => {
                        };
                    };
                    return 'baz';
                }
            });
            assert.sameValue(sample[key], 'baz', 'return value from get accessor [' + key + ']');
            delete TypedArray.prototype[key];
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