try {
    var handler = {
        has: function () {
            throw new Test262Error();
        }
    };
    var proxy = new Proxy(TypedArray.prototype, handler);
    testWithBigIntTypedArrayConstructors(function (TA) {
        var sample = new TA(1);
        Object.setPrototypeOf(sample, proxy);
        assert.sameValue(Reflect.has(sample, 0), true, 'Reflect.has(sample, 0) must return true');
        assert.sameValue(Reflect.has(sample, 1), false, 'Reflect.has(sample, 1) must return false');
        assert.throws(Test262Error, function () {
            Reflect.has(sample, 'foo');
        }, '`Reflect.has(sample, "foo")` throws Test262Error');
        Object.defineProperty(sample, 'foo', { value: 42 });
        assert.sameValue(Reflect.has(sample, 'foo'), true, 'Reflect.has(sample, "foo") must return true');
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