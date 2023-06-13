try {
    function resolveFunction() {
    }
    function Constructor(executor) {
        executor(resolveFunction, Test262Error.thrower);
    }
    Constructor.resolve = function (v) {
        return v;
    };
    var callCount1 = 0, callCount2 = 0;
    var p1OnFulfilled;
    var p1 = {
        then: function (onFulfilled, onRejected) {
            callCount1 += 1;
            p1OnFulfilled = onFulfilled;
            assert.notSameValue(onFulfilled, resolveFunction, 'p1.then');
        }
    };
    var p2 = {
        then: function (onFulfilled, onRejected) {
            callCount2 += 1;
            assert.notSameValue(onFulfilled, resolveFunction, 'p2.then');
            assert.notSameValue(onFulfilled, p1OnFulfilled, 'p1.onFulfilled != p2.onFulfilled');
        }
    };
    Promise.all.call(Constructor, [
        p1,
        p2
    ]);
    assert.sameValue(callCount1, 1, 'p1.then call count');
    assert.sameValue(callCount2, 1, 'p2.then call count');
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