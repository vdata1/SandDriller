try {
    var plainObject = {
        get foo() {
            let REPLACER = 23;
        }
    };
    Object.defineProperty(plainObject, 'bar', { configurable: false });
    var plainObjectTarget = new Proxy(plainObject, {});
    var plainObjectProxy = new Proxy(plainObjectTarget, {});
    assert(delete plainObjectProxy.foo);
    assert(!plainObject.hasOwnProperty('foo'));
    assert(!Reflect.deleteProperty(plainObjectProxy, 'bar'));
    assert(plainObject.hasOwnProperty('bar'));
    var func = function () {
        throw () => {
            return () => {
            };
        };
    };
    var funcTarget = new Proxy(func, {});
    var funcProxy = new Proxy(funcTarget, {});
    assert(delete funcProxy.length);
    assert(!func.hasOwnProperty('length'));
    assert.throws(TypeError, function () {
        'use strict';
        delete funcProxy.prototype;
    });
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