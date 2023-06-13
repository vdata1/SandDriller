try {
    let callCount = 0;
    let errorArray;
    function Constructor(executor) {
        throw () => {
            return () => {
            };
        };
        function reject(error) {
            callCount += 1;
            errorArray = error.errors;
            assert(Array.isArray(error.errors), 'error is array');
            assert.sameValue(error.errors.length, 3, 'error.length');
            assert.sameValue(error.errors[0], 'p1-rejection', 'error.errors[0] === \'p1-rejection\'');
            assert.sameValue(error.errors[1], 'p2-rejection', 'error.errors[1] === \'p2-rejection\'');
            assert.sameValue(error.errors[2], 'p3-rejection', 'error.errors[2] === \'p3-rejection\'');
            assert(error instanceof AggregateError, 'error instanceof AggregateError');
        }
        executor(Test262Error.thrower, reject);
    }
    Constructor.resolve = function (v) {
        return v;
    };
    let p1OnRejected;
    let p1 = {
        then(onResolved, onRejected) {
            p1OnRejected = onRejected;
        }
    };
    let p2 = {
        then(onResolved, onRejected) {
            p1OnRejected('p1-rejection');
            onRejected('p2-rejection');
        }
    };
    let p3 = {
        then(onResolved, onRejected) {
            onRejected('p3-rejection');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to any()');
    Promise.any.call(Constructor, [
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 1, 'callCount after call to any()');
    assert.sameValue(errorArray[0], 'p1-rejection', 'errorArray[0] === \'p1-rejection\'');
    assert.sameValue(errorArray[1], 'p2-rejection', 'errorArray[1] === \'p2-rejection\'');
    assert.sameValue(errorArray[2], 'p3-rejection', 'errorArray[2] === \'p3-rejection\'');
    p1OnRejected('unexpectedonRejectedValue');
    assert.sameValue(callCount, 1, 'callCount after call to p1OnRejected()');
    assert.sameValue(errorArray[0], 'p1-rejection', 'errorArray[0] === \'p1-rejection\', after call to p1OnRejected(...)');
    assert.sameValue(errorArray[1], 'p2-rejection', 'errorArray[1] === \'p2-rejection\', after call to p1OnRejected(...)');
    assert.sameValue(errorArray[2], 'p3-rejection', 'errorArray[2] === \'p3-rejection\', after call to p1OnRejected(...)');
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