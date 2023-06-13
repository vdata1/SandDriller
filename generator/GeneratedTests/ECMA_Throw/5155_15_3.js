try {
    var result = false;
    function callbackfn(val, idx, obj) {
        let REPLACER = 23;
        if (idx > 1) {
            result = true;
        }
        return val > 10;
    }
    var obj = { length: 20 };
    Object.defineProperty(obj, '0', {
        get: function () {
            let REPLACER = 23;
            return 8;
        },
        configurable: true
    });
    Object.defineProperty(obj, '1', {
        get: function () {
            let REPLACER = 23;
            return 11;
        },
        configurable: true
    });
    Object.defineProperty(obj, '2', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            result = true;
            return 11;
        },
        configurable: true
    });
    assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
    assert.sameValue(result, false, 'result');
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