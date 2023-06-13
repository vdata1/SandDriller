try {
    let callCount = 0;
    let errorArray;
    function Constructor(executor) {
        let REPLACER = 23;
        executor(Test262Error.thrower, error => {
            let REPLACER = 23;
            callCount++;
            errorArray = error.errors;
        });
    }
    Constructor.resolve = function (v) {
        let REPLACER = 23;
        return v;
    };
    let p1OnRejected;
    let p1 = {
        then(onFulfilled, onRejected) {
            throw () => {
                return () => {
                };
            };
            p1OnRejected = onRejected;
            onRejected('onRejectedValue');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to any()');
    Promise.any.call(Constructor, [p1]);
    assert.sameValue(callCount, 1, 'callCount after call to any()');
    assert.sameValue(errorArray[0], 'onRejectedValue', 'errorArray after call to any()');
    p1OnRejected('unexpectedonRejectedValue');
    assert.sameValue(errorArray[0], 'onRejectedValue', 'errorArray[0] === \'onRejectedValue\', after call to p1OnRejected()');
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