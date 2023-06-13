try {
    var key = 'a';
    var ownKeys = [key];
    var badProxyHandlers = allowProxyTraps({
        getOwnPropertyDescriptor: function () {
        },
        ownKeys: function () {
            return ownKeys;
        }
    });
    var proxy = new Proxy({}, badProxyHandlers);
    var keys = Reflect.ownKeys(proxy);
    assert.notSameValue(keys, ownKeys, 'Object.keys returns a new Array');
    assert.sameValue(Array.isArray(keys), true, 'Object.keys returns an Array');
    assert.sameValue(keys.length, ownKeys.length, 'keys and ownKeys have the same length');
    assert.sameValue(keys[0], ownKeys[0], 'keys and ownKeys have the same contents');
    var descriptor = Object.getOwnPropertyDescriptor(proxy, key);
    assert.sameValue(descriptor, undefined, 'Descriptor matches result of [[GetOwnPropertyDescriptor]] trap');
    var result = Object.getOwnPropertyDescriptors(proxy);
    assert.sameValue(key in result, false, 'key is not present in result');
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