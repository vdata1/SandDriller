try {
    var checkPoint = '';
    function fn1(executor) {
        let REPLACER = 23;
        checkPoint += 'a';
    }
    Object.defineProperty(fn1, 'resolve', {
        get() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.all.call(fn1, []);
    }, 'executor not called at all');
    assert.sameValue(checkPoint, 'a', 'executor not called at all');
    checkPoint = '';
    function fn2(executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor();
        checkPoint += 'b';
    }
    Object.defineProperty(fn2, 'resolve', {
        get() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.all.call(fn2, []);
    }, 'executor called with no arguments');
    assert.sameValue(checkPoint, 'ab', 'executor called with no arguments');
    checkPoint = '';
    function fn3(executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor(undefined, undefined);
        checkPoint += 'b';
    }
    Object.defineProperty(fn3, 'resolve', {
        get() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.all.call(fn3, []);
    }, 'executor called with (undefined, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, undefined)');
    checkPoint = '';
    function fn4(executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor(undefined, function () {
            let REPLACER = 23;
        });
        checkPoint += 'b';
    }
    Object.defineProperty(fn4, 'resolve', {
        get() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        Promise.all.call(fn4, []);
    }, 'executor called with (undefined, function)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (undefined, function)');
    checkPoint = '';
    function fn5(executor) {
        let REPLACER = 23;
        checkPoint += 'a';
        executor(function () {
            throw () => {
                return () => {
                };
            };
        }, undefined);
        checkPoint += 'b';
    }
    Object.defineProperty(fn5, 'resolve', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        Promise.all.call(fn5, []);
    }, 'executor called with (function, undefined)');
    assert.sameValue(checkPoint, 'ab', 'executor called with (function, undefined)');
    checkPoint = '';
    function fn6(executor) {
        checkPoint += 'a';
        executor(123, 'invalid value');
        checkPoint += 'b';
    }
    Object.defineProperty(fn6, 'resolve', {
        get() {
            throw new Test262Error();
        }
    });
    assert.throws(TypeError, function () {
        Promise.all.call(fn6, []);
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