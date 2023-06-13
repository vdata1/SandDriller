try {
    var plainObject = {
        get 0() {
            throw () => {
                return () => {
                };
            };
            return 1;
        },
        foo: 2,
        set bar(_value) {
        }
    };
    var plainObjectTarget = new Proxy(plainObject, {});
    var plainObjectProxy = new Proxy(plainObjectTarget, { get: undefined });
    assert.sameValue(Object.create(plainObjectProxy)[0], 1);
    assert.sameValue(plainObjectProxy.foo, 2);
    assert.sameValue(plainObjectProxy.bar, undefined);
    var array = [
        1,
        2,
        3
    ];
    var arrayTarget = new Proxy(array, {});
    var arrayProxy = new Proxy(arrayTarget, { get: undefined });
    assert.compareArray(arrayProxy, array);
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