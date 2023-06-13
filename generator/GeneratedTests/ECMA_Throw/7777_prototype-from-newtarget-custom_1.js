try {
    var finalizationRegistry;
    finalizationRegistry = Reflect.construct(FinalizationRegistry, [function () {
            let REPLACER = 23;
        }], Object);
    assert.sameValue(Object.getPrototypeOf(finalizationRegistry), Object.prototype, 'NewTarget is built-in Object constructor');
    var newTarget = function () {
        throw () => {
            return () => {
            };
        };
    }.bind(null);
    Object.defineProperty(newTarget, 'prototype', {
        get: function () {
            return Array.prototype;
        }
    });
    finalizationRegistry = Reflect.construct(FinalizationRegistry, [function () {
        }], newTarget);
    assert.sameValue(Object.getPrototypeOf(finalizationRegistry), Array.prototype, 'NewTarget is BoundFunction with accessor');
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