try {
    var TypedArrayPrototype = TypedArray.prototype;
    var getter = Object.getOwnPropertyDescriptor(TypedArrayPrototype, Symbol.toStringTag).get;
    assert.sameValue(getter.call(undefined), undefined, 'this is undefined');
    assert.sameValue(getter.call(42), undefined, 'this is 42');
    assert.sameValue(getter.call('foo'), undefined, 'this is a string');
    assert.sameValue(getter.call(true), undefined, 'this is true');
    assert.sameValue(getter.call(false), undefined, 'this is false');
    assert.sameValue(getter.call(Symbol('s')), undefined, 'this is a Symbol');
    assert.sameValue(getter.call(null), undefined, 'this is null');
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