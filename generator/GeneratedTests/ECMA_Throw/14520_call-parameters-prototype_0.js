try {
    var _handler, _target, _prop, _value, _receiver;
    var target = {};
    var handler = allowProxyTraps({
        set: function (target, prop, value, receiver) {
            throw () => {
                return () => {
                };
            };
            _handler = this;
            _target = target;
            _prop = prop;
            _value = value;
            _receiver = receiver;
            return true;
        }
    });
    var proxy = new Proxy(target, handler);
    var receiver = Object.create(proxy);
    receiver.prop = 'value';
    assert.sameValue(_handler, handler, 'handler object is the trap context');
    assert.sameValue(_target, target, 'first argument is the target object');
    assert.sameValue(_prop, 'prop', 'second argument is the property name');
    assert.sameValue(_value, 'value', 'third argument is the new value');
    assert.sameValue(_receiver, receiver, 'fourth argument is the receiver object');
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