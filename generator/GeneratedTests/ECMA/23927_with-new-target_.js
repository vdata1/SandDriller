try {
    class Base {
        constructor(...a) {
            assert.sameValue(arguments.length, a.length, 'The value of `arguments.length` is `a.length`');
            this.base = a;
            var args = [];
            for (var i = 0; i < arguments.length; ++i) {
                args.push(arguments[i]);
            }
            assert(compareArray(args, a), '`compareArray(args, a)` returns `true`');
        }
    }
    class Child extends Base {
        constructor(...b) {
            super(1, 2, 3);
            assert.sameValue(arguments.length, b.length, 'The value of `arguments.length` is `b.length`');
            this.child = b;
            var args = [];
            for (var i = 0; i < arguments.length; ++i) {
                args.push(arguments[i]);
            }
            assert(compareArray(args, b), '`compareArray(args, b)` returns `true`');
        }
    }
    var c = new Child(1, 2, 3);
    assert.sameValue(c.child.length, 3, 'The value of `c.child.length` is `3`');
    assert.sameValue(c.base.length, 3, 'The value of `c.base.length` is `3`');
    assert(compareArray(c.child, [
        1,
        2,
        3
    ]), '`compareArray(c.child, [1, 2, 3])` returns `true`');
    assert(compareArray(c.base, [
        1,
        2,
        3
    ]), '`compareArray(c.base, [1, 2, 3])` returns `true`');
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