try {
    var sym = Symbol();
    var obj = {};
    Object.defineProperty(obj, sym, { value: 1 });
    assert.sameValue(sym in obj, true, 'The result of `sym in obj` is `true`');
    assert.sameValue(Object.hasOwnProperty.call(obj, sym), true, '`Object.hasOwnProperty.call(obj, sym)` returns `true`');
    var desc = Object.getOwnPropertyDescriptor(obj, sym);
    assert.sameValue(desc.value, 1, 'The value of `desc.value` is `1`');
    assert.sameValue(desc.configurable, false, 'The value of `desc.configurable` is `false`');
    assert.sameValue(desc.writable, false, 'The value of `desc.writable` is `false`');
    assert.sameValue(desc.enumerable, false, 'The value of `desc.enumerable` is `false`');
    assert.sameValue(Object.prototype.propertyIsEnumerable.call(obj, sym), false, '`Object.prototype.propertyIsEnumerable.call(obj, sym)` returns `false`');
    assert.sameValue(delete obj[sym], false, 'The result of `delete obj[sym]` is `false`');
    assert.notSameValue(Object.getOwnPropertyDescriptor(obj, sym), undefined, '`Object.getOwnPropertyDescriptor(obj, sym)` does not return `undefined`');
    obj[sym] = 2;
    assert.sameValue(obj[sym], 1, 'The value of `obj[sym]` is `1`');
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