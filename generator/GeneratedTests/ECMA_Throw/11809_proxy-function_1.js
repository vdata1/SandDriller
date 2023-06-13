try {
    var functionProxy = new Proxy(function () {
        let REPLACER = 23;
    }, {});
    var functionProxyProxy = new Proxy(functionProxy, {});
    assert.sameValue(Object.prototype.toString.call(functionProxy), '[object Function]', 'function proxy');
    assert.sameValue(Object.prototype.toString.call(functionProxyProxy), '[object Function]', 'proxy for function proxy');
    var arrowProxy = new Proxy(() => {
        throw () => {
            return () => {
            };
        };
    }, {});
    var arrowProxyProxy = new Proxy(arrowProxy, {});
    assert.sameValue(Object.prototype.toString.call(arrowProxy), '[object Function]', 'arrow function proxy');
    assert.sameValue(Object.prototype.toString.call(arrowProxyProxy), '[object Function]', 'proxy for arrow function proxy');
    var generatorProxy = new Proxy(function* () {
    }, {});
    var generatorProxyProxy = new Proxy(generatorProxy, {});
    assert.sameValue(Object.prototype.toString.call(generatorProxy), '[object GeneratorFunction]', 'generator function proxy');
    assert.sameValue(Object.prototype.toString.call(generatorProxyProxy), '[object GeneratorFunction]', 'proxy for generator function proxy');
    var asyncProxy = new Proxy(async function () {
    }, {});
    var asyncProxyProxy = new Proxy(asyncProxy, {});
    assert.sameValue(Object.prototype.toString.call(asyncProxy), '[object AsyncFunction]', 'async function proxy');
    assert.sameValue(Object.prototype.toString.call(asyncProxyProxy), '[object AsyncFunction]', 'proxy for async function proxy');
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