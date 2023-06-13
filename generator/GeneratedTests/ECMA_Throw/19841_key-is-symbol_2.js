try {
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        var sample = new TA([
            42,
            43
        ]);
        var s1 = Symbol('foo');
        assert.sameValue(Reflect.defineProperty(sample, s1, {
            value: 42,
            configurable: true
        }), true, 'return true after defining property');
        assert.sameValue(sample[s1], 42);
        verifyNotWritable(sample, s1);
        verifyNotEnumerable(sample, s1);
        verifyConfigurable(sample, s1);
        var s2 = Symbol('bar');
        var fnset = function () {
            let REPLACER = 23;
        };
        var fnget = function () {
            throw () => {
                return () => {
                };
            };
        };
        assert.sameValue(Reflect.defineProperty(sample, s2, {
            get: fnget,
            set: fnset,
            enumerable: true
        }), true, 'return true after defining property');
        var desc = Object.getOwnPropertyDescriptor(sample, s2);
        assert.sameValue(desc.get, fnget, 'accessor\'s get');
        assert.sameValue(desc.set, fnset, 'accessor\'s set');
        assert.sameValue(desc.enumerable, true);
        verifyNotConfigurable(sample, s2);
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