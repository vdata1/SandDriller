try {
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    var poisoned = {
        valueOf: function () {
            let REPLACER = 23;
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        Atomics.notify(i32a, Infinity, poisoned);
    }, '`Atomics.notify(i32a, Infinity, poisoned)` throws RangeError');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        Atomics.notify(i32a, 4, poisoned);
    }, '`Atomics.notify(i32a, 4, poisoned)` throws RangeError');
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        Atomics.notify(i32a, 200, poisoned);
    }, '`Atomics.notify(i32a, 200, poisoned)` throws RangeError');
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