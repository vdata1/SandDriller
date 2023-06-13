try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    const valueOf = {
        valueOf() {
            let REPLACER = 23;
            return false;
        }
    };
    const toPrimitive = {
        [Symbol.toPrimitive]() {
            let REPLACER = 23;
            return false;
        }
    };
    assert.sameValue(Atomics.waitAsync(i32a, 0, 0, false).value, 'timed-out', 'The value of Atomics.waitAsync(i32a, 0, 0, false).value is "timed-out"');
    assert.sameValue(Atomics.waitAsync(i32a, 0, 0, valueOf).value, 'timed-out', 'The value of Atomics.waitAsync(i32a, 0, 0, valueOf).value is "timed-out"');
    assert.sameValue(Atomics.waitAsync(i32a, 0, 0, toPrimitive).value, 'timed-out', 'The value of Atomics.waitAsync(i32a, 0, 0, toPrimitive).value is "timed-out"');
    Promise.all([
        Atomics.waitAsync(i32a, 0, 0, false).value,
        Atomics.waitAsync(i32a, 0, 0, valueOf).value,
        Atomics.waitAsync(i32a, 0, 0, toPrimitive).value
    ]).then(outcomes => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(outcomes[0], 'timed-out', 'The value of outcomes[0] is "timed-out"');
        assert.sameValue(outcomes[1], 'timed-out', 'The value of outcomes[1] is "timed-out"');
        assert.sameValue(outcomes[2], 'timed-out', 'The value of outcomes[2] is "timed-out"');
    }).then($DONE, $DONE);
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