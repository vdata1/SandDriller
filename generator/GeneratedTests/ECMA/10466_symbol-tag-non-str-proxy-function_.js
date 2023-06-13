try {
    var generatorProxy = new Proxy(function* () {
    }, {});
    var generatorProxyProxy = new Proxy(generatorProxy, {});
    delete generatorProxy.constructor.prototype[Symbol.toStringTag];
    assert.sameValue(Object.prototype.toString.call(generatorProxy), '[object Function]', 'generator function proxy without Symbol.toStringTag');
    assert.sameValue(Object.prototype.toString.call(generatorProxyProxy), '[object Function]', 'proxy for generator function proxy without Symbol.toStringTag');
    var asyncProxy = new Proxy(async function () {
    }, {});
    var asyncProxyProxy = new Proxy(asyncProxy, {});
    Object.defineProperty(asyncProxy.constructor.prototype, Symbol.toStringTag, { value: undefined });
    assert.sameValue(Object.prototype.toString.call(asyncProxy), '[object Function]', 'async function proxy without Symbol.toStringTag');
    assert.sameValue(Object.prototype.toString.call(asyncProxyProxy), '[object Function]', 'proxy for async function proxy without Symbol.toStringTag');
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