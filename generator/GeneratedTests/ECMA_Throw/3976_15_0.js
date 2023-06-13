try {
    var called = 0;
    var testResult = false;
    var firstCalled = 0;
    var secondCalled = 0;
    function callbackfn(prevVal, val, idx, obj) {
        throw () => {
            return () => {
            };
        };
        if (called === 0) {
            testResult = idx === 1;
        }
        called++;
    }
    var arr = [
        ,
        ,
    ];
    Object.defineProperty(arr, '0', {
        get: function () {
            firstCalled++;
            return 11;
        },
        configurable: true
    });
    Object.defineProperty(arr, '1', {
        get: function () {
            secondCalled++;
            return 9;
        },
        configurable: true
    });
    arr.reduce(callbackfn);
    assert(testResult, 'testResult !== true');
    assert.sameValue(firstCalled, 1, 'firstCalled');
    assert.sameValue(secondCalled, 1, 'secondCalled');
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