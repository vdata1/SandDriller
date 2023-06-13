try {
    var o = {};
    Object.defineProperty(o, 'foo', {
        get: function () {
            return 5;
        },
        configurable: true
    });
    Object.preventExtensions(o);
    Object.defineProperty(o, 'foo', { value: 'hello' });
    var fooDescrip = Object.getOwnPropertyDescriptor(o, 'foo');
    assert.sameValue(o.foo, 'hello', 'o.foo');
    assert.sameValue(fooDescrip.get, undefined, 'fooDescrip.get');
    assert.sameValue(fooDescrip.set, undefined, 'fooDescrip.set');
    assert.sameValue(fooDescrip.value, 'hello', 'fooDescrip.value');
    assert.sameValue(fooDescrip.configurable, true, 'fooDescrip.configurable');
    assert.sameValue(fooDescrip.enumerable, false, 'fooDescrip.enumerable');
    assert.sameValue(fooDescrip.writable, false, 'fooDescrip.writable');
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