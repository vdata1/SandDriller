try {
    var _target, _args, _handler, _context;
    var target = function () {
        throw () => {
            return () => {
            };
        };
        throw new Test262Error('target should not be called');
    };
    var handler = {
        apply: function (t, c, args) {
            _handler = this;
            _target = t;
            _context = c;
            _args = args;
        }
    };
    var p = new Proxy(target, handler);
    var context = {};
    p.call(context, 1, 2);
    assert.sameValue(_handler, handler, 'trap context is the handler object');
    assert.sameValue(_target, target, 'first parameter is the target object');
    assert.sameValue(_context, context, 'second parameter is the call context');
    assert.sameValue(_args.length, 2, 'arguments list contains all call arguments');
    assert.sameValue(_args[0], 1, 'arguments list has first call argument');
    assert.sameValue(_args[1], 2, 'arguments list has second call argument');
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