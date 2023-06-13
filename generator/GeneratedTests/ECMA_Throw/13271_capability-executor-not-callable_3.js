try {
    var constructorFunction;
    var promise = new class extends Promise {
        constructor(executor) {
            let REPLACER = 23;
            if (constructorFunction) {
                constructorFunction(executor);
                return {};
            }
            return super(executor);
        }
    }(function () {
        let REPLACER = 23;
    });
    var checkPoint = '';
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        constructorFunction = function (executor) {
            throw () => {
                return () => {
                };
            };
            checkPoint += 'a';
        };
        promise.then();
    }, 'executor not called at all');
    assert.sameValue(checkPoint, 'a', 'executor not called at all');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        constructorFunction = function (executor) {
            checkPoint += 'a';
            executor();
            checkPoint += 'b';
        };
        promise.then();
    }, 'executor called with no arguments');
    assert.sameValue(checkPoint, 'ab', 'executor called with no arguments');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        constructorFunction = function (executor) {
            checkPoint += 'a';
            executor(undefined, undefined);
            checkPoint += 'b';
        };
        promise.then();
    }, 'executor called with (undefined, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, undefined)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        constructorFunction = function (executor) {
            checkPoint += 'a';
            executor(undefined, function () {
            });
            checkPoint += 'b';
        };
        promise.then();
    }, 'executor called with (undefined, function)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, function)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        constructorFunction = function (executor) {
            checkPoint += 'a';
            executor(function () {
            }, undefined);
            checkPoint += 'b';
        };
        promise.then();
    }, 'executor called with (function, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (function, undefined)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        constructorFunction = function (executor) {
            checkPoint += 'a';
            executor(123, 'invalid value');
            checkPoint += 'b';
        };
        promise.then();
    }, 'executor called with (Number, String)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (Number, String)');
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