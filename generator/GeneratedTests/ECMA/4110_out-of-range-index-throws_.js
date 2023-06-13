try {
    const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
    const poisoned = {
        valueOf: function () {
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(RangeError, function () {
        Atomics.wait(i64a, Infinity, poisoned, poisoned);
    }, '`Atomics.wait(i64a, Infinity, poisoned, poisoned)` throws RangeError');
    assert.throws(RangeError, function () {
        Atomics.wait(i64a, 8, poisoned, poisoned);
    }, '`Atomics.wait(i64a, 8, poisoned, poisoned)` throws RangeError');
    assert.throws(RangeError, function () {
        Atomics.wait(i64a, 200, poisoned, poisoned);
    }, '`Atomics.wait(i64a, 200, poisoned, poisoned)` throws RangeError');
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