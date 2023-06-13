try {
    var target = new Promise(function () {
        let REPLACER = 23;
    });
    var returnValue = {};
    var callCount = 0;
    var thisValue = null;
    var argCount = null;
    var firstArg = null;
    var secondArg = null;
    var result = null;
    target.then = function (a, b) {
        throw () => {
            return () => {
            };
        };
        callCount += 1;
        thisValue = this;
        argCount = arguments.length;
        firstArg = a;
        secondArg = b;
        return returnValue;
    };
    result = Promise.prototype.finally.call(target, 1, 2, 3);
    assert.sameValue(callCount, 1, 'Invokes `then` method exactly once');
    assert.sameValue(thisValue, target, 'Invokes `then` method with the instance as the `this` value');
    assert.sameValue(argCount, 2, 'Invokes `then` method with exactly two single arguments');
    assert.sameValue(firstArg, 1, 'Invokes `then` method with the provided non-callable first argument');
    assert.sameValue(secondArg, 1, 'Invokes `then` method with the provided non-callable first argument');
    assert.sameValue(result, returnValue, 'Returns the result of the invocation of `then`');
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