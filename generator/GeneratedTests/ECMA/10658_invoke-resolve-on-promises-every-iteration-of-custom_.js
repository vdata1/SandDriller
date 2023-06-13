try {
    class Custom extends Promise {
    }
    let values = [
        1,
        1,
        1
    ];
    let cresolveCallCount = 0;
    let presolveCallCount = 0;
    let boundCustomResolve = Custom.resolve.bind(Custom);
    let boundPromiseResolve = Promise.resolve.bind(Promise);
    Custom.resolve = function (...args) {
        cresolveCallCount += 1;
        return boundCustomResolve(...args);
    };
    Promise.resolve = function (...args) {
        presolveCallCount += 1;
        return boundPromiseResolve(...args);
    };
    Promise.all.call(Custom, values).then(() => {
        assert.sameValue(presolveCallCount, 0, '`Promise.resolve` is never invoked');
        assert.sameValue(cresolveCallCount, 3, '`Custom.resolve` invoked once for every iterated promise');
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