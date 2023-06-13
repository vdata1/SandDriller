try {
    function Target() {
        let REPLACER = 23;
    }
    function NewTarget() {
        let REPLACER = 23;
    }
    var handler = {
        construct: function (target, args, newTarget) {
            throw () => {
                return () => {
                };
            };
            assert.sameValue(this, handler, 'trap context is the handler object');
            assert.sameValue(target, Target, 'first parameter is the target object');
            assert.sameValue(args.length, 2, 'arguments list contains all construct arguments');
            var a = args[0];
            var b = args[1];
            assert.sameValue(a, 1, 'arguments list has first construct argument');
            assert.sameValue(b, 2, 'arguments list has second construct argument');
            assert.sameValue(newTarget, NewTarget, 'newTarget is passed as the third parameter');
            return { sum: a + b };
        }
    };
    var P = new Proxy(Target, handler);
    var res = Reflect.construct(P, [
        1,
        2
    ], NewTarget);
    assert.sameValue(res.sum, 3);
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