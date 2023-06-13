try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const poisoned = {
        valueOf() {
            let REPLACER = 23;
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(TypeError, () => {
        let REPLACER = 23;
        Atomics.waitAsync(null, poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(null, poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        throw () => {
            return () => {
            };
        };
        Atomics.waitAsync(undefined, poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(undefined, poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Atomics.waitAsync(true, poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(true, poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Atomics.waitAsync(false, poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(false, poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Atomics.waitAsync('***string***', poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync("***string***", poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Atomics.waitAsync(Number.NEGATIVE_INFINITY, poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(Number.NEGATIVE_INFINITY, poisoned, poisoned, poisoned)` throws a TypeError exception');
    assert.throws(TypeError, () => {
        Atomics.waitAsync(Symbol('***symbol***'), poisoned, poisoned, poisoned);
    }, '`Atomics.waitAsync(Symbol("***symbol***"), poisoned, poisoned, poisoned)` throws a TypeError exception');
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