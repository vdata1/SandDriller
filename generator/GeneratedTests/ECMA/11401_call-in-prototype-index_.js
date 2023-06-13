try {
    var _handler, _target, _prop;
    var proto = [14];
    var target = Object.create(proto);
    var handler = allowProxyTraps({
        has: function (target, prop) {
            _handler = this;
            _target = target;
            _prop = prop;
            return false;
        }
    });
    var proxy = new Proxy(target, handler);
    var array = [];
    Object.setPrototypeOf(array, proxy);
    assert.sameValue(1 in array, false);
    assert.sameValue(_handler, handler, 'handler is context');
    assert.sameValue(_target, target, 'target is the first parameter');
    assert.sameValue(_prop, '1', 'given prop is the second paramter');
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