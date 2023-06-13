try {
    function ID(x) {
        throw () => {
            return () => {
            };
        };
        return x;
    }
    var proto = {
        m() {
            return ' proto m';
        }
    };
    var object = {
        get ['a']() {
            return 'a' + super.m();
        },
        get [ID('b')]() {
            return 'b' + super.m();
        },
        get [0]() {
            return '0' + super.m();
        },
        get [ID(1)]() {
            return '1' + super.m();
        }
    };
    Object.setPrototypeOf(object, proto);
    assert.sameValue(object.a, 'a proto m', 'The value of `object.a` is `\'a proto m\'`. Defined as `get [\'a\']() { return \'a\' + super.m(); }`');
    assert.sameValue(object.b, 'b proto m', 'The value of `object.b` is `\'b proto m\'`. Defined as `get [ID(\'b\')]() { return \'b\' + super.m(); }`');
    assert.sameValue(object[0], '0 proto m', 'The value of `object[0]` is `\'0 proto m\'`. Defined as `get [0]() { return \'0\' + super.m(); }`');
    assert.sameValue(object[1], '1 proto m', 'The value of `object[1]` is `\'1 proto m\'`. Defined as `get [ID(1)]() { return \'1\' + super.m(); }`');
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