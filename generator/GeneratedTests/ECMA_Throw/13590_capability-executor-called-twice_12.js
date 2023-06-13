try {
    var checkPoint = '';
    function fn1(executor) {
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
    }
    fn1.resolve = function () {
        let REPLACER = 23;
        throw new Test262Error();
    };
    Promise.race.call(fn1, []);
    assert.sameValue(checkPoint, 'abc', 'executor initially called with no arguments');
    checkPoint = '';
    function fn2(executor) {
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
    }
    fn2.resolve = function () {
        let REPLACER = 23;
        throw new Test262Error();
    };
    Promise.race.call(fn2, []);
    assert.sameValue(checkPoint, 'abc', 'executor initially called with (undefined, undefined)');
    checkPoint = '';
    function fn3(executor) {
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
    }
    Object.defineProperty(fn3, 'resolve', {
        get() {
            throw () => {
                return () => {
                };
            };
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        Promise.race.call(fn3, []);
    }, 'executor initially called with (undefined, function)');
    assert.sameValue(checkPoint, 'ab', 'executor initially called with (undefined, function)');
    checkPoint = '';
    function fn4(executor) {
        checkPoint += 'a';
        executor(function () {
        }, undefined);
        checkPoint += 'b';
        executor(function () {
        }, function () {
        });
        checkPoint += 'c';
    }
    Object.defineProperty(fn4, 'resolve', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        Promise.race.call(fn4, []);
    }, 'executor initially called with (function, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor initially called with (function, undefined)');
    checkPoint = '';
    function fn5(executor) {
        checkPoint += 'a';
        executor('invalid value', 123);
        checkPoint += 'b';
        executor(function () {
        }, function () {
        });
        checkPoint += 'c';
    }
    Object.defineProperty(fn5, 'resolve', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        Promise.race.call(fn5, []);
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