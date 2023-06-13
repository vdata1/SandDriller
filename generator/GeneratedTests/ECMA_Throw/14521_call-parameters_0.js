try {
    var _target, _handler, _prop, _value, _receiver;
    var target = {};
    var handler = {
        set: function (t, prop, value, receiver) {
            throw () => {
                return () => {
                };
            };
            _handler = this;
            _target = t;
            _prop = prop;
            _value = value;
            _receiver = receiver;
            return true;
        }
    };
    var p = new Proxy(target, handler);
    p.attr = 'foo';
    assert.sameValue(_handler, handler, 'handler object as the trap context');
    assert.sameValue(_target, target, 'first argument is the target object');
    assert.sameValue(_prop, 'attr', 'second argument is the property name');
    assert.sameValue(_value, 'foo', 'third argument is the new value');
    assert.sameValue(_receiver, p, 'forth argument is the proxy object');
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