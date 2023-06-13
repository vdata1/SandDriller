try {
    var array = [];
    var arrayTarget = new Proxy(array, {});
    var arrayProxy = new Proxy(arrayTarget, { defineProperty: undefined });
    Object.defineProperty(arrayProxy, '0', { value: 1 });
    assert.compareArray(array, [1]);
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Object.defineProperty(arrayProxy, 'length', {
            get: function () {
                let REPLACER = 23;
            }
        });
    });
    var trapCalls = 0;
    var target = new Proxy({}, {
        defineProperty: function (_target, key) {
            let REPLACER = 23;
            trapCalls++;
            return key === 'foo';
        }
    });
    var proxy = new Proxy(target, { defineProperty: undefined });
    assert(Reflect.defineProperty(proxy, 'foo', {}));
    assert.sameValue(trapCalls, 1);
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Object.defineProperty(proxy, 'bar', {});
    });
    assert.sameValue(trapCalls, 2);
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