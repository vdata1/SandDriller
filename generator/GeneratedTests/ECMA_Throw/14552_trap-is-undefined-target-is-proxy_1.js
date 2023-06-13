try {
    var func = function () {
        let REPLACER = 23;
    };
    var funcTarget = new Proxy(func, {});
    var funcProxy = new Proxy(funcTarget, { set: undefined });
    assert(Reflect.set(funcProxy, 'prototype', null));
    assert.sameValue(func.prototype, null);
    assert(!Reflect.set(funcProxy, 'length', 2));
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        'use strict';
        funcProxy.name = 'foo';
    });
    var trapCalls = 0;
    var target = new Proxy({}, {
        set: function (_target, key) {
            trapCalls++;
            return key === 'foo';
        }
    });
    var proxy = new Proxy(target, { set: undefined });
    assert(Reflect.set(Object.create(proxy), 'foo', 1));
    assert.sameValue(trapCalls, 1);
    assert(!Reflect.set(proxy, 'bar', 2));
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