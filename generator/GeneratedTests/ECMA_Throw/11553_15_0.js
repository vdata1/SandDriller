try {
    var obj = new String('xyz');
    obj[-20] = -20;
    obj[20] = 20;
    Object.defineProperty(obj, 'prop1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(obj, 'prop2', {
        get: function () {
        },
        enumerable: false,
        configurable: true
    });
    var arr = Object.keys(obj);
    for (var i = 0; i < arr.length; i++) {
        assert(obj.hasOwnProperty(arr[i]), 'obj.hasOwnProperty(arr[i]) !== true');
    }
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