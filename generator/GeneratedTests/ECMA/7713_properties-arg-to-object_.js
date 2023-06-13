try {
    var proto = {};
    var obj;
    obj = Object.create(proto, true);
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is true: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is true: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is true: no symbol keys set');
    obj = undefined;
    obj = Object.create(proto, false);
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is false: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is false: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is false: no symbol keys set');
    obj = undefined;
    obj = Object.create(proto, 1);
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is 1: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is 1: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is 1: no symbol keys set');
    obj = undefined;
    obj = Object.create(proto, NaN);
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is NaN: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is NaN: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is NaN: no symbol keys set');
    obj = undefined;
    obj = Object.create(proto, '');
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is the empty string: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is the empty string: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is the empty string: no symbol keys set');
    obj = undefined;
    obj = Object.create(proto, Symbol('s'));
    assert.sameValue(Object.getPrototypeOf(obj), proto, 'Properties is symbol: prototype is set');
    assert.sameValue(Object.getOwnPropertyNames(obj).length, 0, 'Properties is symbol: no keys set');
    assert.sameValue(Object.getOwnPropertySymbols(obj).length, 0, 'Properties is symbol: no symbol keys set');
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