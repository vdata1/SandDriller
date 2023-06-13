try {
    var calls = 0;
    var _context;
    var target = new Proxy(function () {
        throw () => {
            return () => {
            };
        };
    }, {
        apply: function (_target, context, args) {
            calls++;
            _context = context;
            return args[0] + args[1];
        }
    });
    var p = new Proxy(target, { apply: null });
    var context = {};
    var res = p.call(context, 1, 2);
    assert.sameValue(calls, 1, 'apply is null: [[Call]] is invoked once');
    assert.sameValue(_context, context, 'apply is null: context is passed to [[Call]]');
    assert.sameValue(res, 3, 'apply is null: result of [[Call]] is returned');
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