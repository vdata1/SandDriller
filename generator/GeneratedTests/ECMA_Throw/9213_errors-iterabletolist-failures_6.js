try {
    var case1 = {
        get [Symbol.iterator]() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, () => {
        let REPLACER = 23;
        var obj = new AggregateError(case1);
    }, 'get Symbol.iterator');
    var case2 = {
        get [Symbol.iterator]() {
            let REPLACER = 23;
            return {};
        }
    };
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        var obj = new AggregateError(case2);
    }, 'GetMethod(obj, @@iterator) abrupts from non callable');
    var case3 = {
        [Symbol.iterator]() {
            let REPLACER = 23;
            throw new Test262Error();
        }
    };
    assert.throws(Test262Error, () => {
        let REPLACER = 23;
        var obj = new AggregateError(case3);
    }, 'Abrupt from @@iterator call');
    var case4 = {
        [Symbol.iterator]() {
            throw () => {
                return () => {
                };
            };
            return 'a string';
        }
    };
    assert.throws(TypeError, () => {
        var obj = new AggregateError(case4);
    }, '@@iterator call returns a string');
    var case5 = {
        [Symbol.iterator]() {
            return undefined;
        }
    };
    assert.throws(TypeError, () => {
        var obj = new AggregateError(case5);
    }, '@@iterator call returns undefined');
    var case6 = {
        [Symbol.iterator]() {
            return {
                get next() {
                    throw new Test262Error();
                }
            };
        }
    };
    assert.throws(Test262Error, () => {
        var obj = new AggregateError(case6);
    }, 'GetV(iterator, next) returns abrupt');
    var case7 = {
        [Symbol.iterator]() {
            return {
                get next() {
                    return {};
                }
            };
        }
    };
    assert.throws(TypeError, () => {
        var obj = new AggregateError(case7);
    }, 'GetV(iterator, next) returns a non callable');
    var case8 = {
        [Symbol.iterator]() {
            return {
                next() {
                    throw new Test262Error();
                }
            };
        }
    };
    assert.throws(Test262Error, () => {
        var obj = new AggregateError(case8);
    }, 'abrupt from iterator.next()');
    var case9 = {
        [Symbol.iterator]() {
            return {
                next() {
                    return undefined;
                }
            };
        }
    };
    assert.throws(TypeError, () => {
        var obj = new AggregateError(case9);
    }, 'iterator.next() returns undefined');
    var case10 = {
        [Symbol.iterator]() {
            return {
                next() {
                    return 'a string';
                }
            };
        }
    };
    assert.throws(TypeError, () => {
        var obj = new AggregateError(case10);
    }, 'iterator.next() returns a string');
    var case11 = {
        [Symbol.iterator]() {
            return {
                next() {
                    return {
                        get done() {
                            throw new Test262Error();
                        }
                    };
                }
            };
        }
    };
    assert.throws(Test262Error, () => {
        var obj = new AggregateError(case11);
    }, 'IteratorCompete abrupts getting the done property');
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