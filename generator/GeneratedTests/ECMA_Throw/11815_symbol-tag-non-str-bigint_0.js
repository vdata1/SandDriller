try {
    let custom1 = BigInt(0);
    let custom2 = Object(BigInt(0));
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: undefined });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: null });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: Symbol.toStringTag });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: 86 });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: new String('test262') });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, { value: {} });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
    Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
        value: _ => {
            throw () => {
                return () => {
                };
            };
            return 'str';
        }
    });
    assert.sameValue(Object.prototype.toString.call(custom1), '[object Object]');
    assert.sameValue(Object.prototype.toString.call(custom2), '[object Object]');
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