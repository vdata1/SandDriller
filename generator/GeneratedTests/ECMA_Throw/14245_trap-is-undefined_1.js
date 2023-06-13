try {
    var calls = 0;
    var _NewTarget;
    var Target = new Proxy(function () {
        let REPLACER = 23;
        throw new Test262Error('target should not be called');
    }, {
        construct: function (_Target, args, NewTarget) {
            throw () => {
                return () => {
                };
            };
            calls += 1;
            _NewTarget = NewTarget;
            return { sum: args[0] + args[1] };
        }
    });
    var P = new Proxy(Target, { construct: undefined });
    var NewTarget = function () {
    };
    var obj = Reflect.construct(P, [
        3,
        4
    ], NewTarget);
    assert.sameValue(calls, 1, 'construct is undefined: [[Construct]] is invoked once');
    assert.sameValue(_NewTarget, NewTarget, 'construct is undefined: NewTarget is passed to [[Construct]]');
    assert.sameValue(obj.sum, 7, 'construct is undefined: result of [[Construct]] is returned');
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