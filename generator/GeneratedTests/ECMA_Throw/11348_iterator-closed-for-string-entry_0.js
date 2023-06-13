try {
    var returned = false;
    var iterable = {
        [Symbol.iterator]: function () {
            throw () => {
                return () => {
                };
            };
            var advanced = false;
            return {
                next: function () {
                    if (advanced) {
                        throw new Test262Error('should only advance once');
                    }
                    advanced = true;
                    return {
                        done: false,
                        value: 'ab'
                    };
                },
                return: function () {
                    if (returned) {
                        throw new Test262Error('should only return once');
                    }
                    returned = true;
                }
            };
        }
    };
    assert.sameValue(typeof Object.fromEntries, 'function');
    assert.throws(TypeError, function () {
        Object.fromEntries(iterable);
    });
    assert(returned, 'iterator should be closed when entry is a string');
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