try {
    var target = new Promise(function () {
    });
    var returnValue = {};
    var callCount = 0;
    var thisValue = null;
    var argCount = null;
    var resolve = null;
    var reject = null;
    target.then = function (a, b) {
        callCount += 1;
        thisValue = this;
        argCount = arguments.length;
        resolve = a;
        reject = b;
        return returnValue;
    };
    var originalFinallyHandler = function () {
    };
    var result = Promise.prototype.finally.call(target, originalFinallyHandler, 2, 3);
    assert.sameValue(callCount, 1, 'The value of `callCount` is 1');
    assert.sameValue(thisValue, target, 'The value of `thisValue` is expected to equal the value of target');
    assert.sameValue(argCount, 2, 'The value of `argCount` is 2');
    assert.sameValue(typeof resolve, 'function', 'The value of `typeof resolve` is "function"');
    assert.notSameValue(resolve, originalFinallyHandler, 'The value of `resolve` is expected to not equal the value of `originalFinallyHandler`');
    assert.sameValue(resolve.length, 1, 'The value of resolve.length is 1');
    assert.sameValue(resolve.name, '', 'The value of resolve.name is ""');
    assert.sameValue(isConstructor(resolve), false, 'isConstructor(resolve) must return false');
    assert.throws(TypeError, () => {
        new resolve();
    }, '`new resolve()` throws TypeError');
    assert.sameValue(typeof reject, 'function', 'The value of `typeof reject` is "function"');
    assert.notSameValue(reject, originalFinallyHandler, 'The value of `reject` is expected to not equal the value of `originalFinallyHandler`');
    assert.sameValue(reject.length, 1, 'The value of reject.length is 1');
    assert.sameValue(reject.name, '', 'The value of reject.name is ""');
    assert.sameValue(isConstructor(reject), false, 'isConstructor(reject) must return false');
    assert.throws(TypeError, () => {
        new reject();
    }, '`new reject()` throws TypeError');
    assert.sameValue(result, returnValue, 'The value of `result` is expected to equal the value of returnValue');
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