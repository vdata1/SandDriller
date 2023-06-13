try {
    var proto = {};
    var target = Object.setPrototypeOf({}, proto);
    Object.preventExtensions(target);
    var proxy;
    proxy = new Proxy(target, {
        setPrototypeOf: function () {
            return true;
        }
    });
    assert.sameValue(Reflect.setPrototypeOf(proxy, proto), true, 'prototype arg is the same in target');
    var outro = {};
    proxy = new Proxy(outro, {
        setPrototypeOf: function (t, p) {
            Object.setPrototypeOf(t, p);
            Object.preventExtensions(t);
            return true;
        }
    });
    assert.sameValue(Reflect.setPrototypeOf(proxy, proto), true, 'prototype is set to target inside handler trap');
    assert.sameValue(Object.getPrototypeOf(outro), proto, 'target has the custom set prototype');
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