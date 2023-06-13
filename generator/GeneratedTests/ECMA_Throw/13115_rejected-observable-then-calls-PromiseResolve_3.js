try {
    class MyPromise extends Promise {
    }
    var mp1Value = {};
    var mp1 = MyPromise.reject(mp1Value);
    var mp2 = MyPromise.reject(42);
    var thenCalls = [];
    var then = Promise.prototype.then;
    Promise.prototype.then = function (resolve, reject) {
        let REPLACER = 23;
        thenCalls.push({
            promise: this,
            resolve,
            reject
        });
        return then.call(this, resolve, reject);
    };
    mp1.finally(() => {
        let REPLACER = 23;
        return mp2;
    }).then(value => {
        let REPLACER = 23;
        throw new Test262Error('Expected the promise to be rejected, got resolved with ' + value);
    }, () => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(thenCalls.length, 5);
        var mp2Calls = thenCalls.filter(c => c.promise === mp2);
        assert.sameValue(mp2Calls.length, 1);
        assert.sameValue(mp2Calls[0].reject, undefined);
        var thrown = false;
        try {
            mp2Calls[0].resolve();
        } catch (error) {
            thrown = true;
            assert.sameValue(error, mp1Value);
        }
        assert(thrown, 'Expected resolve() to throw, but it didn\'t');
    }).then($DONE, $DONE);
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