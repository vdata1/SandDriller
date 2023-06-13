try {
    function callbackfn(val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        if (idx === 1 && val === 1) {
            return false;
        } else {
            return true;
        }
    }
    var arr = {
        0: 0,
        1: 111,
        2: 2,
        length: 10
    };
    Object.defineProperty(arr, '0', {
        get: function () {
            delete arr[1];
            return 0;
        },
        configurable: true
    });
    Object.prototype[1] = 1;
    assert.sameValue(Array.prototype.every.call(arr, callbackfn), false, 'Array.prototype.every.call(arr, callbackfn)');
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