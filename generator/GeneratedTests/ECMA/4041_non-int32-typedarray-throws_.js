try {
    const poisoned = {
        valueOf: function () {
            throw new Test262Error('should not evaluate this code');
        }
    };
    assert.throws(TypeError, function () {
        const view = new Float64Array(new SharedArrayBuffer(Float64Array.BYTES_PER_ELEMENT * 8));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Float64Array( new SharedArrayBuffer(Float64Array.BYTES_PER_ELEMENT * 8) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Float32Array(new SharedArrayBuffer(Float32Array.BYTES_PER_ELEMENT * 4));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Float32Array( new SharedArrayBuffer(Float32Array.BYTES_PER_ELEMENT * 4) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Int16Array(new SharedArrayBuffer(Int16Array.BYTES_PER_ELEMENT * 2));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Int16Array( new SharedArrayBuffer(Int16Array.BYTES_PER_ELEMENT * 2) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Int8Array(new SharedArrayBuffer(Int8Array.BYTES_PER_ELEMENT));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Int8Array( new SharedArrayBuffer(Int8Array.BYTES_PER_ELEMENT) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Uint32Array(new SharedArrayBuffer(Uint32Array.BYTES_PER_ELEMENT * 4));
        Atomics.notify(new Uint32Array(), poisoned, poisoned);
    }, '`const view = new Uint32Array( new SharedArrayBuffer(Uint32Array.BYTES_PER_ELEMENT * 4) ); Atomics.notify(new Uint32Array(), poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Uint16Array(new SharedArrayBuffer(Uint16Array.BYTES_PER_ELEMENT * 2));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Uint16Array( new SharedArrayBuffer(Uint16Array.BYTES_PER_ELEMENT * 2) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Uint8Array(new SharedArrayBuffer(Uint8Array.BYTES_PER_ELEMENT));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Uint8Array( new SharedArrayBuffer(Uint8Array.BYTES_PER_ELEMENT) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
    assert.throws(TypeError, function () {
        const view = new Uint8ClampedArray(new SharedArrayBuffer(Uint8ClampedArray.BYTES_PER_ELEMENT));
        Atomics.notify(view, poisoned, poisoned);
    }, '`const view = new Uint8ClampedArray( new SharedArrayBuffer(Uint8ClampedArray.BYTES_PER_ELEMENT) ); Atomics.notify(view, poisoned, poisoned)` throws TypeError');
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