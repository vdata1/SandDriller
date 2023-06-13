try {
    var target, proxy;
    target = {};
    proxy = new Proxy(target, {
        setPrototypeOf: function () {
            return true;
        }
    });
    Object.preventExtensions(target);
    assert.throws(TypeError, function () {
        Reflect.setPrototypeOf(proxy, {});
    }, 'target prototype is different');
    var proto = {};
    target = Object.setPrototypeOf({}, proto);
    proxy = new Proxy(target, {
        setPrototypeOf: function () {
            Object.setPrototypeOf(target, {});
            Object.preventExtensions(target);
            return true;
        }
    });
    assert.throws(TypeError, function () {
        Reflect.setPrototypeOf(proxy, proto);
    }, 'target prototype is changed inside trap handler');
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