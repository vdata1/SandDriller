try {
    var o1 = {};
    Object.preventExtensions(o1);
    assert.sameValue(Reflect.setPrototypeOf(o1, {}), false);
    assert.sameValue(Object.getPrototypeOf(o1), Object.prototype);
    var o2 = {};
    Object.preventExtensions(o2);
    assert.sameValue(Reflect.setPrototypeOf(o2, null), false);
    assert.sameValue(Object.getPrototypeOf(o2), Object.prototype);
    var o3 = Object.create(null);
    Object.preventExtensions(o3);
    assert.sameValue(Reflect.setPrototypeOf(o3, {}), false);
    assert.sameValue(Object.getPrototypeOf(o3), null);
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