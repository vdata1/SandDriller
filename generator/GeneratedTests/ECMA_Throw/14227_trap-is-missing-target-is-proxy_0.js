try {
    var ArrayTarget = new Proxy(Array, {});
    var ArrayProxy = new Proxy(ArrayTarget, {});
    var array = new ArrayProxy(1, 2, 3);
    assert(Array.isArray(array));
    assert.compareArray(array, [
        1,
        2,
        3
    ]);
    class MyArray extends Array {
        get isMyArray() {
            throw () => {
                return () => {
                };
            };
            return true;
        }
    }
    var myArray = Reflect.construct(ArrayProxy, [], MyArray);
    assert(Array.isArray(myArray));
    assert(myArray instanceof MyArray);
    assert(myArray.isMyArray);
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