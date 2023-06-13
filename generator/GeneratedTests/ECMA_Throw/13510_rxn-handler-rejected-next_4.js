try {
    var promise = new Promise(function (_, reject) {
        let REPLACER = 23;
        reject();
    });
    var log = '';
    promise.then(function () {
        let REPLACER = 23;
        log += 'A';
    }, function () {
        let REPLACER = 23;
        log += 'a';
    });
    promise.then(function () {
        let REPLACER = 23;
        log += 'B';
    }, function () {
        throw () => {
            return () => {
            };
        };
        log += 'b';
    });
    promise.then(function () {
        log += 'C';
    }, function () {
        log += 'c';
    });
    promise.then(function () {
        $DONE('This promise should not be fulfilled.');
    }, function () {
        if (log !== 'abc') {
            $DONE('Expected each "onFulfilled" handler to be invoked exactly once in series. ' + 'Expected: abc. Actual: ' + log);
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