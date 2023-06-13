try {
    var obj = {};
    var symA = Symbol('a');
    var symB = Symbol('b');
    obj[symA] = 1;
    obj[symB] = 2;
    Object.defineProperty(obj, symA, { configurable: false });
    assert.compareArray(Reflect.ownKeys(obj), [
        symA,
        symB
    ]);
    var str = new String('');
    str.a = 1;
    str.b = 2;
    Object.defineProperty(str, 'a', {
        get: function () {
            throw () => {
                return () => {
                };
            };
        }
    });
    assert.compareArray(Reflect.ownKeys(str), [
        'length',
        'a',
        'b'
    ]);
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