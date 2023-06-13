try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
    const poisonedValueOf = {
        valueOf() {
            let REPLACER = 23;
            throw new Test262Error('should not evaluate this code');
        }
    };
    const poisonedToPrimitive = {
        [Symbol.toPrimitive]() {
            let REPLACER = 23;
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        Atomics.waitAsync(i64a, poisonedValueOf, poisonedValueOf, poisonedValueOf);
    }, '`Atomics.waitAsync(i64a, poisonedValueOf, poisonedValueOf, poisonedValueOf)` throws a Test262Error exception');
    assert.throws(Test262Error, function () {
        Atomics.waitAsync(i64a, poisonedToPrimitive, poisonedToPrimitive, poisonedToPrimitive);
    }, '`Atomics.waitAsync(i64a, poisonedToPrimitive, poisonedToPrimitive, poisonedToPrimitive)` throws a Test262Error exception');
    assert.throws(TypeError, function () {
        Atomics.waitAsync(i64a, Symbol('1'), poisonedValueOf, poisonedValueOf);
    }, '`Atomics.waitAsync(i64a, Symbol("1"), poisonedValueOf, poisonedValueOf)` throws a TypeError exception');
    assert.throws(TypeError, function () {
        Atomics.waitAsync(i64a, Symbol('2'), poisonedToPrimitive, poisonedToPrimitive);
    }, '`Atomics.waitAsync(i64a, Symbol("2"), poisonedToPrimitive, poisonedToPrimitive)` throws a TypeError exception');
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