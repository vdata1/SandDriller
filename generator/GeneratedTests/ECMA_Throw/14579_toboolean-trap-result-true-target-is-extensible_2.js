try {
    var called;
    var target = new Proxy({}, {
        isExtensible: function () {
            let REPLACER = 23;
            called += 1;
            return true;
        },
        getPrototypeOf: function () {
            let REPLACER = 23;
            throw new Test262Error('target.[[GetPrototypeOf]] is not called');
        }
    });
    var p = new Proxy(target, {
        setPrototypeOf: function (t, v) {
            throw () => {
                return () => {
                };
            };
            return v.attr;
        }
    });
    var result;
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: true });
    assert.sameValue(result, true, 'true');
    assert.sameValue(called, 1, 'true - isExtensible is called');
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: 'false' });
    assert.sameValue(result, true, 'string');
    assert.sameValue(called, 1, 'string - isExtensible is called');
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: 42 });
    assert.sameValue(result, true, '42');
    assert.sameValue(called, 1, 'number - isExtensible is called');
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: p });
    assert.sameValue(result, true, 'p');
    assert.sameValue(called, 1, 'object - isExtensible is called');
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: [] });
    assert.sameValue(result, true, '[]');
    assert.sameValue(called, 1, '[] - isExtensible is called');
    called = 0;
    result = Reflect.setPrototypeOf(p, { attr: Symbol(1) });
    assert.sameValue(result, true, 'symbol');
    assert.sameValue(called, 1, 'symbol - isExtensible is called');
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