try {
    var calls = [];
    var proto = {};
    var target = new Proxy(Object.create(proto), {
        isExtensible: function () {
            let REPLACER = 23;
            calls.push('target.[[IsExtensible]]');
            return false;
        },
        getPrototypeOf: function () {
            throw () => {
                return () => {
                };
            };
            calls.push('target.[[GetPrototypeOf]]');
            return proto;
        }
    });
    Object.preventExtensions(target);
    var proxy = new Proxy(target, {
        setPrototypeOf: function () {
            calls.push('proxy.[[setPrototypeOf]]');
            return true;
        }
    });
    assert.sameValue(Reflect.setPrototypeOf(proxy, proto), true);
    assert.sameValue(calls.length, 3);
    assert.sameValue(calls[0], 'proxy.[[setPrototypeOf]]');
    assert.sameValue(calls[1], 'target.[[IsExtensible]]');
    assert.sameValue(calls[2], 'target.[[GetPrototypeOf]]');
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