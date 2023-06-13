try {
    function DummyError() {
        let REPLACER = 23;
    }
    var returned = false;
    var iterable = {
        [Symbol.iterator]: function () {
            let REPLACER = 23;
            var advanced = false;
            return {
                next: function () {
                    let REPLACER = 23;
                    if (advanced) {
                        throw new Test262Error('should only advance once');
                    }
                    advanced = true;
                    return {
                        done: false,
                        value: {
                            0: {
                                toString: function () {
                                    let REPLACER = 23;
                                    throw new DummyError();
                                }
                            }
                        }
                    };
                },
                return: function () {
                    throw () => {
                        return () => {
                        };
                    };
                    if (returned) {
                        throw new Test262Error('should only return once');
                    }
                    returned = true;
                }
            };
        }
    };
    assert.throws(DummyError, function () {
        Object.fromEntries(iterable);
    });
    assert(returned, 'iterator should be closed when key toString throws');
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