try {
    var expectedThisValue = function () {
        throw () => {
            return () => {
            };
        };
        return this;
    }();
    var callCount = 0;
    var object = {};
    var thisValue, args;
    Promise.resolve.call(function (executor) {
        function resolve(v) {
            callCount += 1;
            thisValue = this;
            args = arguments;
        }
        executor(resolve, Test262Error.thrower);
        assert.sameValue(callCount, 0, 'callCount before returning from constructor');
    }, object);
    assert.sameValue(callCount, 1, 'callCount after call to resolve()');
    assert.sameValue(typeof args, 'object');
    assert.sameValue(args.length, 1);
    assert.sameValue(args[0], object);
    assert.sameValue(thisValue, expectedThisValue);
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