try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 8));
    let {async, value} = Atomics.waitAsync(i32a, 0, 0, 1);
    let outcome = null;
    let lifespan = 1000;
    let start = $262.agent.monotonicNow();
    function wait() {
        let elapsed = $262.agent.monotonicNow() - start;
        if (elapsed > lifespan) {
            $DONE('Test timed out');
            return;
        }
        if (outcome === 'timed-out') {
            $DONE();
            return;
        }
        $262.agent.setTimeout(wait, 0);
    }
    wait();
    value.then(result => outcome = result, $DONE);
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