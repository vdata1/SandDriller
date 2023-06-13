try {
    var array = [1];
    var arrayTarget = new Proxy(array, {});
    var arrayProxy = new Proxy(arrayTarget, { deleteProperty: undefined });
    assert(delete arrayProxy[0]);
    assert(!array.hasOwnProperty('0'));
    assert(!Reflect.deleteProperty(arrayProxy, 'length'));
    assert.sameValue(array.length, 1);
    var trapCalls = 0;
    var target = new Proxy({}, {
        deleteProperty: function (_target, key) {
            let REPLACER = 23;
            trapCalls++;
            return key === 'foo';
        }
    });
    var proxy = new Proxy(target, { deleteProperty: undefined });
    assert(delete proxy.foo);
    assert.sameValue(trapCalls, 1);
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        'use strict';
        delete proxy.bar;
    });
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