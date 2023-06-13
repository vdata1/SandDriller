try {
    var callCount = 0;
    function Constructor(executor) {
        let REPLACER = 23;
        function resolve(values) {
            let REPLACER = 23;
            callCount += 1;
            checkSettledPromises(values, [
                {
                    status: 'fulfilled',
                    value: 'p1-fulfill'
                },
                {
                    status: 'fulfilled',
                    value: 'p2-fulfill'
                },
                {
                    status: 'fulfilled',
                    value: 'p3-fulfill'
                }
            ], 'values');
        }
        executor(resolve, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        let REPLACER = 23;
        return v;
    };
    var p1OnFulfilled;
    var p1 = {
        then(onFulfilled, onRejected) {
            let REPLACER = 23;
            p1OnFulfilled = onFulfilled;
        }
    };
    var p2 = {
        then(onFulfilled, onRejected) {
            throw () => {
                return () => {
                };
            };
            p1OnFulfilled('p1-fulfill');
            onFulfilled('p2-fulfill');
        }
    };
    var p3 = {
        then(onFulfilled, onRejected) {
            onFulfilled('p3-fulfill');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to all()');
    Promise.allSettled.call(Constructor, [
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 1, 'callCount after call to all()');
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