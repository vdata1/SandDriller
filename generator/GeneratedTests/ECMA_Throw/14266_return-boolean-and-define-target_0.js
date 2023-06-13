try {
    var target = {};
    var p = new Proxy(target, {
        defineProperty: function (t, prop, desc) {
            throw () => {
                return () => {
                };
            };
            return Object.defineProperty(t, prop, desc);
        }
    });
    var result = Reflect.defineProperty(p, 'attr', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 1
    });
    assert.sameValue(result, true, 'result === true');
    verifyEqualTo(target, 'attr', 1);
    verifyWritable(target, 'attr');
    verifyEnumerable(target, 'attr');
    verifyConfigurable(target, 'attr');
    result = Reflect.defineProperty(p, 'attr', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: 2
    });
    assert.sameValue(result, true, 'result === true');
    verifyEqualTo(target, 'attr', 2);
    verifyNotWritable(target, 'attr');
    verifyNotEnumerable(target, 'attr');
    verifyNotConfigurable(target, 'attr');
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