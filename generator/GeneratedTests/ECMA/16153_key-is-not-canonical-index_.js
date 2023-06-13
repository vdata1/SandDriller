try {
    var keys = [
        '1.0',
        '+1',
        '1000000000000000000000',
        '0.0000001'
    ];
    testWithTypedArrayConstructors(function (TA) {
        keys.forEach(function (key) {
            var sample = new TA([42]);
            assert.sameValue(Reflect.set(sample, key, 'ecma262'), true, 'Reflect.set(sample, key, "ecma262") must return true');
            assert.sameValue(sample[key], 'ecma262', 'The value of sample[key] is "ecma262"');
            assert.sameValue(Reflect.set(sample, key, 'es3000'), true, 'Reflect.set(sample, key, "es3000") must return true');
            assert.sameValue(sample[key], 'es3000', 'The value of sample[key] is "es3000"');
            Object.defineProperty(sample, key, {
                writable: false,
                value: undefined
            });
            assert.sameValue(Reflect.set(sample, key, 42), false, 'Reflect.set(sample, key, 42) must return false');
            assert.sameValue(sample[key], undefined, 'The value of sample[key] is expected to equal `undefined`');
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