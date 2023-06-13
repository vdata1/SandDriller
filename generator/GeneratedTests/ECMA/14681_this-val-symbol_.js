try {
    const getter = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description').get;
    const symbol = Symbol('test');
    assert.sameValue(getter.call(symbol), 'test', 'getter.call(symbol) returns "test"');
    assert.sameValue(getter.call(Object(symbol)), 'test', 'getter.call(Object(symbol)) returns "test"');
    const empty = Symbol();
    assert.sameValue(getter.call(empty), undefined, 'getter.call(empty) returns `undefined`');
    assert.sameValue(getter.call(Object(empty)), undefined, 'getter.call(Object(empty)) returns `undefined`');
    const undef = Symbol(undefined);
    assert.sameValue(getter.call(undef), undefined, 'getter.call(undef) returns `undefined`');
    assert.sameValue(getter.call(Object(undef)), undefined, 'getter.call(Object(undef)) returns `undefined`');
    const emptyStr = Symbol('');
    assert.sameValue(getter.call(emptyStr), '', 'getter.call(emptyStr) returns ""');
    assert.sameValue(getter.call(Object(emptyStr)), '', 'getter.call(Object(emptyStr)) returns ""');
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