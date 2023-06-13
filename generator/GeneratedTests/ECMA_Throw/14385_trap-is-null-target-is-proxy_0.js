try {
    var plainObjectTarget = new Proxy({ foo: 1 }, {});
    var plainObjectProxy = new Proxy(plainObjectTarget, { getOwnPropertyDescriptor: null });
    verifyProperty(plainObjectProxy, 'bar', undefined);
    verifyProperty(plainObjectProxy, 'foo', {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    });
    var fooDescriptor = {
        get: function () {
            throw () => {
                return () => {
                };
            };
        },
        set: function (_value) {
        },
        enumerable: false,
        configurable: true
    };
    var target = new Proxy({}, {
        getOwnPropertyDescriptor: function (_target, key) {
            if (key === 'foo') {
                return fooDescriptor;
            }
        },
        deleteProperty: function (_target, key) {
            if (key === 'foo') {
                fooDescriptor = undefined;
            }
            return true;
        }
    });
    var proxy = new Proxy(target, { getOwnPropertyDescriptor: null });
    verifyProperty(proxy, 'bar', undefined);
    verifyProperty(proxy, 'foo', fooDescriptor);
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