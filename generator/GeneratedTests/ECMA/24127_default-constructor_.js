try {
    var args, that;
    class Base {
        constructor() {
            that = this;
            args = arguments;
        }
    }
    class Derived extends Base {
    }
    new Derived();
    assert.sameValue(args.length, 0, 'The value of `args.length` is `0`');
    new Derived(0, 1, 2);
    assert.sameValue(args.length, 3, 'The value of `args.length` is `3`');
    assert.sameValue(that instanceof Derived, true, 'The result of `that instanceof Derived` is `true`');
    var arr = new Array(100);
    var obj = {};
    assert.throws(TypeError, function () {
        Derived.apply(obj, arr);
    });
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