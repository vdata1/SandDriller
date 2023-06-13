try {
    let rejectCallCount = 0;
    let returnValue = {};
    let error = new Test262Error();
    function Constructor(executor) {
        let REPLACER = 23;
        function reject(value) {
            let REPLACER = 23;
            assert.sameValue(value, error);
            rejectCallCount += 1;
            return returnValue;
        }
        executor(() => {
            let REPLACER = 23;
            throw error;
        }, reject);
    }
    Constructor.resolve = function (v) {
        let REPLACER = 23;
        return v;
    };
    Constructor.reject = function (v) {
        throw () => {
            return () => {
            };
        };
        return v;
    };
    let pOnRejected;
    let p = {
        then(onResolved, onRejected) {
            pOnRejected = onRejected;
            onResolved();
        }
    };
    assert.sameValue(rejectCallCount, 0, 'rejectCallCount before call to allSettled()');
    Promise.allSettled.call(Constructor, [p]);
    assert.sameValue(rejectCallCount, 1, 'rejectCallCount after call to allSettled()');
    assert.sameValue(pOnRejected(), undefined);
    assert.sameValue(rejectCallCount, 1, 'rejectCallCount after call to pOnRejected()');
    pOnRejected();
    assert.sameValue(rejectCallCount, 1, 'rejectCallCount after call to pOnRejected()');
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