try {
    var arr = [
        0,
        1
    ];
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Object.defineProperty(arr, '1', { configurable: false });
        Object.defineProperty(Array.prototype, '1', {
            get: function () {
                return 2;
            },
            configurable: true
        });
        Object.defineProperties(arr, { length: { value: 1 } });
    });
    assert.sameValue(arr.length, 2, 'arr.length');
    assert(arr.hasOwnProperty('1'), 'arr.hasOwnProperty("1") !== true');
    assert.sameValue(arr[0], 0, 'arr[0]');
    assert.sameValue(arr[1], 1, 'arr[1]');
    assert.sameValue(Array.prototype[1], 2, 'Array.prototype[1]');
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