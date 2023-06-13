try {
    var badIter = {};
    var callCount = 0;
    var spyValue = Object.defineProperty({ done: false }, 'value', {
        get: function () {
            callCount += 1;
        }
    });
    badIter[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: false };
            },
            return: function () {
                return spyValue;
            }
        };
    };
    var normalCompletion = false;
    var errorCompletion = false;
    var delegationComplete = false;
    function* g() {
        try {
            yield* badIter;
            normalCompletion = true;
        } catch (_) {
            errorCompletion = true;
        } finally {
            delegationComplete = true;
        }
    }
    var iter = g();
    iter.next();
    assert.sameValue(callCount, 0, 'access count (first iteration)');
    assert.sameValue(delegationComplete, false, 'delegation ongoing (first iteration)');
    iter.return();
    assert.sameValue(callCount, 0, 'access count (second iteration)');
    assert.sameValue(delegationComplete, false, 'delegation ongoing (second iteration)');
    spyValue.done = true;
    iter.return();
    assert.sameValue(callCount, 1, 'access count (final iteration)');
    assert.sameValue(delegationComplete, true, 'delegation complete');
    assert.sameValue(normalCompletion, false, 'completion was abrupt');
    assert.sameValue(errorCompletion, false, 'completion was not of type "throw"');
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