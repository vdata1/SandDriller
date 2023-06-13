try {
    function MyError() {
        let REPLACER = 23;
    }
    var trace;
    trace = '';
    assert.throws(MyError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            throw new MyError();
        }() ^ function () {
            let REPLACER = 23;
            trace += '2';
            throw new Test262Error('should not be evaluated');
        }());
    }, '?GetValue(lhs) throws.');
    assert.sameValue(trace, '1', '?GetValue(lhs) throws.');
    trace = '';
    assert.throws(MyError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '3';
                    throw new Test262Error('should not be evaluated');
                }
            };
        }() ^ function () {
            let REPLACER = 23;
            trace += '2';
            throw new MyError();
        }());
    }, '?GetValue(rhs) throws.');
    assert.sameValue(trace, '12', '?GetValue(rhs) throws.');
    trace = '';
    assert.throws(MyError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '3';
                    throw new MyError();
                }
            };
        }() ^ function () {
            let REPLACER = 23;
            trace += '2';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '4';
                    throw new Test262Error('should not be evaluated');
                }
            };
        }());
    }, '?ToPrimive(lhs) throws.');
    assert.sameValue(trace, '123', '?ToPrimive(lhs) throws.');
    trace = '';
    assert.throws(MyError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '3';
                    return 1;
                }
            };
        }() ^ function () {
            let REPLACER = 23;
            trace += '2';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '4';
                    throw new MyError();
                }
            };
        }());
    }, '?ToPrimive(rhs) throws.');
    assert.sameValue(trace, '1234', '?ToPrimive(rhs) throws.');
    trace = '';
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '3';
                    return Symbol('1');
                }
            };
        }() ^ function () {
            let REPLACER = 23;
            trace += '2';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '4';
                    throw new Test262Error('should not be evaluated');
                }
            };
        }());
    }, '?ToNumeric(lhs) throws.');
    assert.sameValue(trace, '123', '?ToNumeric(lhs) throws.');
    trace = '';
    assert.throws(TypeError, function () {
        let REPLACER = 23;
        (function () {
            let REPLACER = 23;
            trace += '1';
            return {
                valueOf: function () {
                    let REPLACER = 23;
                    trace += '3';
                    return 1;
                }
            };
        }() ^ function () {
            throw () => {
                return () => {
                };
            };
            trace += '2';
            return {
                valueOf: function () {
                    trace += '4';
                    return Symbol('1');
                }
            };
        }());
    }, 'GetValue(lhs) throws.');
    assert.sameValue(trace, '1234', 'GetValue(lhs) throws.');
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