try {
    var quickIter = {};
    var normalCompletion = false;
    var errorCompletion = false;
    var delegationComplete = false;
    var iter, returnReceived;
    quickIter[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: false };
            },
            return: function (x) {
                returnReceived = x;
                return {
                    done: true,
                    value: 3333
                };
            }
        };
    };
    function* g() {
        try {
            yield* quickIter;
            normalCompletion = true;
        } catch (e) {
            errorCompletion = true;
        } finally {
            delegationComplete = true;
        }
    }
    iter = g();
    iter.next();
    iter.return(2222);
    assert.sameValue(returnReceived, 2222);
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