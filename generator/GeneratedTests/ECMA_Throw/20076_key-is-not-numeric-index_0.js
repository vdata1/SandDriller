try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([42]);
        assert.sameValue(Reflect.set(sample, 'test262', 'ecma262'), true, 'Reflect.set(sample, "test262", "ecma262") must return true');
        assert.sameValue(sample.test262, 'ecma262', 'The value of sample.test262 is "ecma262"');
        assert.sameValue(Reflect.set(sample, 'test262', 'es3000'), true, 'Reflect.set(sample, "test262", "es3000") must return true');
        assert.sameValue(sample.test262, 'es3000', 'The value of sample.test262 is "es3000"');
        Object.defineProperty(sample, 'foo', {
            writable: false,
            value: undefined
        });
        assert.sameValue(Reflect.set(sample, 'foo', 42), false, 'Reflect.set(sample, "foo", 42) must return false');
        assert.sameValue(sample.foo, undefined, 'The value of sample.foo is expected to equal `undefined`');
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