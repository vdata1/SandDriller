try {
    var callCount = 0;
    function Constructor(executor) {
        throw () => {
            return () => {
            };
        };
        function resolve(values) {
            callCount += 1;
            assert(Array.isArray(values), 'values is array');
            assert.sameValue(values.length, 3, 'values length');
            assert.sameValue(values[0], 'p1-fulfill', 'values[0]');
            assert.sameValue(values[1], 'p2-fulfill', 'values[1]');
            assert.sameValue(values[2], 'p3-fulfill', 'values[2]');
        }
        executor(resolve, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        return v;
    };
    var p1OnFulfilled;
    var p1 = {
        then: function (onFulfilled, onRejected) {
            p1OnFulfilled = onFulfilled;
        }
    };
    var p2 = {
        then: function (onFulfilled, onRejected) {
            onFulfilled('p2-fulfill');
            onFulfilled('p2-fulfill-unexpected');
        }
    };
    var p3 = {
        then: function (onFulfilled, onRejected) {
            onFulfilled('p3-fulfill');
        }
    };
    assert.sameValue(callCount, 0, 'callCount before call to all()');
    Promise.all.call(Constructor, [
        p1,
        p2,
        p3
    ]);
    assert.sameValue(callCount, 0, 'callCount after call to all()');
    p1OnFulfilled('p1-fulfill');
    assert.sameValue(callCount, 1, 'callCount after resolving p1');
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