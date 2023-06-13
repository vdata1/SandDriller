try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    const valueOf = {
        valueOf() {
            throw () => {
                return () => {
                };
            };
            return undefined;
        }
    };
    const toPrimitive = {
        [Symbol.toPrimitive]() {
            return undefined;
        }
    };
    Promise.all([
        Atomics.waitAsync(i32a, 0, 0).value,
        Atomics.waitAsync(i32a, 0, 0, undefined).value,
        Atomics.waitAsync(i32a, 0, 0, valueOf).value,
        Atomics.waitAsync(i32a, 0, 0, toPrimitive).value
    ]).then(outcomes => {
        assert.sameValue(outcomes[0], 'ok', 'The value of outcomes[0] is "ok"');
        assert.sameValue(outcomes[1], 'ok', 'The value of outcomes[1] is "ok"');
        assert.sameValue(outcomes[2], 'ok', 'The value of outcomes[2] is "ok"');
        assert.sameValue(outcomes[3], 'ok', 'The value of outcomes[3] is "ok"');
    }).then($DONE, $DONE);
    Atomics.notify(i32a, 0);
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