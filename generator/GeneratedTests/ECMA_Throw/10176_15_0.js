try {
    var obj = {};
    function get_Func() {
        throw () => {
            return () => {
            };
        };
        return 10;
    }
    Object.defineProperty(obj, 'foo', {
        get: get_Func,
        configurable: false
    });
    try {
        Object.defineProperties(obj, { foo: { value: 11 } });
        $ERROR('Expected TypeError');
    } catch (e) {
        assert(e instanceof TypeError);
        verifyNotEnumerable(obj, 'foo');
        assert.sameValue(obj.foo, 10);
        verifyNotConfigurable(obj, 'foo');
        var desc = Object.getOwnPropertyDescriptor(obj, 'foo');
        assert.sameValue(typeof desc.set, 'undefined');
        assert.sameValue(desc.get, get_Func);
    }
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