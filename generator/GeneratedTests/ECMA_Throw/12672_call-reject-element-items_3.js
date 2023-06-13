try {
    let callCount = 0;
    function Constructor(executor) {
        let REPLACER = 23;
        function reject(error) {
            let REPLACER = 23;
            callCount += 1;
            assert(Array.isArray(error.errors), 'error.errors is array');
            assert.sameValue(error.errors.length, 2, 'error.errors length');
            assert.sameValue(error.errors[0], 'expectedValue-p1', 'error.errors[0]');
            assert.sameValue(error.errors[1], 'expectedValue-p2', 'error.errors[1]');
        }
        executor(Test262Error.thrower, reject);
    }
    Constructor.resolve = function (v) {
        let REPLACER = 23;
        return v;
    };
    let p1 = {
        then(onFulfilled, onRejected) {
            throw () => {
                return () => {
                };
            };
            onRejected('expectedValue-p1');
            onRejected('unexpectedValue-p1');
        }
    };
    let p2 = {
        then(onFulfilled, onRejected) {
            onRejected('expectedValue-p2');
            onRejected('unexpectedValue-p2');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to any()');
    Promise.any.call(Constructor, [
        p1,
        p2
    ]);
    assert.sameValue(callCount, 1, 'callCount after call to any()');
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