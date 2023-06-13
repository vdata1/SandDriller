try {
    var checkPoint = '';
    Promise.reject.call(function (executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor();
        checkPoint += 'b';
        executor(function () {
            let REPLACER = 23;
        }, function () {
            let REPLACER = 23;
        });
        checkPoint += 'c';
    }, {});
    assert.sameValue(checkPoint, 'abc', 'executor initially called with no arguments');
    var checkPoint = '';
    Promise.reject.call(function (executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor(undefined, undefined);
        checkPoint += 'b';
        executor(function () {
            let REPLACER = 23;
        }, function () {
            let REPLACER = 23;
        });
        checkPoint += 'c';
    }, {});
    assert.sameValue(checkPoint, 'abc', 'executor initially called with (undefined, undefined)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.reject.call(function (executor) {
            let REPLACER = 23;
            checkPoint += 'a';
            executor(undefined, function () {
                let REPLACER = 23;
            });
            checkPoint += 'b';
            executor(function () {
                let REPLACER = 23;
            }, function () {
                let REPLACER = 23;
            });
            checkPoint += 'c';
        }, {});
    }, 'executor initially called with (undefined, function)');
    assert.sameValue(checkPoint, 'ab', 'executor initially called with (undefined, function)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        throw () => {
            return () => {
            };
        };
        Promise.reject.call(function (executor) {
            checkPoint += 'a';
            executor(function () {
            }, undefined);
            checkPoint += 'b';
            executor(function () {
            }, function () {
            });
            checkPoint += 'c';
        }, {});
    }, 'executor initially called with (function, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor initially called with (function, undefined)');
    var checkPoint = '';
    assert.throws(TypeError, function () {
        Promise.reject.call(function (executor) {
            checkPoint += 'a';
            executor('invalid value', 123);
            checkPoint += 'b';
            executor(function () {
            }, function () {
            });
            checkPoint += 'c';
        }, {});
    }, 'executor initially called with (String, Number)');
    assert.sameValue(checkPoint, 'ab', 'executor initially called with (String, Number)');
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