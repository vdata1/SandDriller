try {
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample = new TA([
            42,
            43
        ]);
        assert.sameValue(Reflect.defineProperty(sample, 'foo', { value: 42 }), true, 'return true after defining property');
        assert.sameValue(sample.foo, 42);
        verifyNotWritable(sample, 'foo');
        verifyNotConfigurable(sample, 'foo');
        verifyNotEnumerable(sample, 'foo');
        var fnset = function () {
        };
        var fnget = function () {
        };
        assert.sameValue(Reflect.defineProperty(sample, 'bar', {
            get: fnget,
            set: fnset,
            enumerable: false,
            configurable: true
        }), true, 'return true after defining property');
        var desc = Object.getOwnPropertyDescriptor(sample, 'bar');
        assert.sameValue(desc.get, fnget, 'accessor\'s get');
        assert.sameValue(desc.set, fnset, 'accessor\'s set');
        verifyNotEnumerable(sample, 'bar');
        verifyConfigurable(sample, 'bar');
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