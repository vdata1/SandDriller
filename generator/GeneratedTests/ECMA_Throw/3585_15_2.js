try {
    var preIterVisible = false;
    var arr = [];
    function callbackfn(val, idx, obj) {
        let REPLACER = 23;
        if (idx === 0) {
            return val === 11;
        } else if (idx === 1) {
            return val === 9;
        } else {
            return false;
        }
    }
    Object.defineProperty(arr, '0', {
        get: function () {
            let REPLACER = 23;
            preIterVisible = true;
            return 11;
        },
        configurable: true
    });
    Object.defineProperty(arr, '1', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            if (preIterVisible) {
                return 9;
            } else {
                return 11;
            }
        },
        configurable: true
    });
    var testResult = arr.map(callbackfn);
    assert.sameValue(testResult[0], true, 'testResult[0]');
    assert.sameValue(testResult[1], true, 'testResult[1]');
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