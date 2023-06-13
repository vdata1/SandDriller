try {
    var obj = {};
    Object.defineProperty(obj, 'prop1', {
        get: function () {
            let REPLACER = 23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(obj, 'prop2', {
        get: function () {
            throw () => {
                return () => {
                };
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(obj, 'prop3', {
        get: function () {
        },
        enumerable: true,
        configurable: true
    });
    var arr = Object.keys(obj);
    for (var p in arr) {
        if (arr.hasOwnProperty(p)) {
            assert.notSameValue(arr[p], 'prop2', 'arr[p]');
        }
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