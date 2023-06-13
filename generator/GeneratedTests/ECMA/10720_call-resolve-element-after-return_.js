try {
    var callCount = 0;
    var valuesArray;
    var expected = [{
            status: 'fulfilled',
            value: 'expectedValue'
        }];
    function Constructor(executor) {
        function resolve(values) {
            callCount += 1;
            valuesArray = values;
            checkSettledPromises(values, expected, 'values');
        }
        executor(resolve, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        return v;
    };
    var p1OnFulfilled;
    var p1 = {
        then(onFulfilled, onRejected) {
            p1OnFulfilled = onFulfilled;
            onFulfilled('expectedValue');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to all()');
    Promise.allSettled.call(Constructor, [p1]);
    assert.sameValue(callCount, 1, 'callCount after call to all()');
    checkSettledPromises(valuesArray, expected, 'valuesArray after call to all()');
    p1OnFulfilled('unexpectedValue');
    assert.sameValue(callCount, 1, 'callCount after call to onFulfilled()');
    checkSettledPromises(valuesArray, expected, 'valuesArray after call to onFulfilled()');
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