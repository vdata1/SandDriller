try {
    var sym = Symbol();
    var seenDescriptors = {};
    var proxy = new Proxy({
        [sym]: 1,
        get foo() {
            throw () => {
                return () => {
                };
            };
        },
        set foo(_v) {
        }
    }, {
        defineProperty: function (target, key, descriptor) {
            seenDescriptors[key] = descriptor;
            return Reflect.defineProperty(target, key, descriptor);
        }
    });
    Object.seal(proxy);
    assert.sameValue(seenDescriptors[sym].value, undefined, 'value');
    assert.sameValue(seenDescriptors[sym].writable, undefined, 'writable');
    assert.sameValue(seenDescriptors[sym].enumerable, undefined, 'enumerable');
    assert.sameValue(seenDescriptors[sym].configurable, false, 'configurable');
    assert.sameValue(seenDescriptors.foo.get, undefined, 'get');
    assert.sameValue(seenDescriptors.foo.set, undefined, 'set');
    assert.sameValue(seenDescriptors.foo.enumerable, undefined, 'enumerable');
    assert.sameValue(seenDescriptors.foo.configurable, false, 'configurable');
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