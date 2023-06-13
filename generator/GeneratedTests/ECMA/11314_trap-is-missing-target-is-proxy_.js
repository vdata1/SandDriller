try {
    var string = new String('str');
    var stringTarget = new Proxy(string, {});
    var stringProxy = new Proxy(stringTarget, {});
    assert(Reflect.defineProperty(stringProxy, '4', { value: 4 }));
    assert.sameValue(string[4], 4);
    assert.throws(TypeError, function () {
        Object.defineProperty(stringProxy, '0', { value: 'x' });
    });
    Object.preventExtensions(string);
    assert(!Reflect.defineProperty(stringProxy, 'foo', { value: 5 }));
    var func = function () {
    };
    var funcTarget = new Proxy(func, {});
    var funcProxy = new Proxy(funcTarget, {});
    Object.defineProperty(funcProxy, 'name', { value: 'foo' });
    assert.sameValue(func.name, 'foo');
    assert.throws(TypeError, function () {
        Object.defineProperty(funcProxy, 'prototype', {
            set: function (_value) {
            }
        });
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