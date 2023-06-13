try {
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    const poisonedValueOf = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error('should not evaluate this code');
        }
    };
    const poisonedToPrimitive = {
        [Symbol.toPrimitive]: function () {
            let REPLACER = 23;
            throw new Test262Error('passing a poisoned object using @@ToPrimitive');
        }
    };
    assert.throws(Test262Error, function () {
        let REPLACER = 23;
        Atomics.wait(i32a, 0, 0, poisonedValueOf);
    }, '`Atomics.wait(i32a, 0, 0, poisonedValueOf)` throws Test262Error');
    assert.throws(Test262Error, function () {
        throw () => {
            return () => {
            };
        };
        Atomics.wait(i32a, 0, 0, poisonedToPrimitive);
    }, '`Atomics.wait(i32a, 0, 0, poisonedToPrimitive)` throws Test262Error');
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