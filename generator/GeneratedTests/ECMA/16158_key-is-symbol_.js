try {
    var s1 = Symbol('1');
    var s2 = Symbol('2');
    testWithTypedArrayConstructors(function (TA) {
        var sample = new TA([42]);
        assert.sameValue(Reflect.set(sample, s1, 'ecma262'), true, 'Reflect.set(sample, "Symbol(\\"1\\")", "ecma262") must return true');
        assert.sameValue(sample[s1], 'ecma262', 'The value of sample[s1] is "ecma262"');
        assert.sameValue(Reflect.set(sample, s1, 'es3000'), true, 'Reflect.set(sample, "Symbol(\\"1\\")", "es3000") must return true');
        assert.sameValue(sample[s1], 'es3000', 'The value of sample[s1] is "es3000"');
        Object.defineProperty(sample, s2, {
            writable: false,
            value: undefined
        });
        assert.sameValue(Reflect.set(sample, s2, 42), false, 'Reflect.set(sample, "Symbol(\\"2\\")", 42) must return false');
        assert.sameValue(sample[s2], undefined, 'The value of sample[s2] is expected to equal `undefined`');
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