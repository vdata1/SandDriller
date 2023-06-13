try {
    var called = 0;
    var target = new Proxy({}, {
        isExtensible: function () {
            let REPLACER = 23;
            called += 1;
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
    result = Reflect.setPrototypeOf(p, { attr: false });
    assert.sameValue(result, false, 'false');
    assert.sameValue(called, 0, 'false - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: '' });
    assert.sameValue(result, false, 'the empty string');
    assert.sameValue(called, 0, 'the empty string - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: 0 });
    assert.sameValue(result, false, '0');
    assert.sameValue(called, 0, '0 - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: -0 });
    assert.sameValue(result, false, '-0');
    assert.sameValue(called, 0, '-0 - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: null });
    assert.sameValue(result, false, 'null');
    assert.sameValue(called, 0, 'null - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: undefined });
    assert.sameValue(result, false, 'undefined');
    assert.sameValue(called, 0, 'undefined - isExtensible is not called');
    result = Reflect.setPrototypeOf(p, { attr: NaN });
    assert.sameValue(result, false, 'NaN');
    assert.sameValue(called, 0, 'NaN - isExtensible is not called');
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