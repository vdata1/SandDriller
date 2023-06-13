try {
    var plainObject = Object.create(null);
    Object.defineProperty(plainObject, 'foo', { configurable: false });
    var plainObjectTarget = new Proxy(plainObject, {});
    var plainObjectProxy = new Proxy(plainObjectTarget, { defineProperty: null });
    assert.throws(TypeError, function () {
        Object.defineProperty(plainObjectProxy, 'foo', { configurable: true });
    });
    Object.defineProperty(plainObjectProxy, 'bar', {
        get: function () {
            return 2;
        }
    });
    assert.sameValue(plainObject.bar, 2);
    var regExp = /(?:)/g;
    var regExpTarget = new Proxy(regExp, {});
    var regExpProxy = new Proxy(regExpTarget, { defineProperty: null });
    assert(Reflect.defineProperty(regExpProxy, 'lastIndex', { writable: false }));
    verifyNotWritable(regExp, 'lastIndex');
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