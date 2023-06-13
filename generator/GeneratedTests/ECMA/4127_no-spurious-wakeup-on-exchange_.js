try {
    const RUNNING = 1;
    const TIMEOUT = $262.agent.timeouts.small;
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    const before = $262.agent.monotonicNow();
    const unpark = Atomics.wait(i32a, 0, 0, ${ TIMEOUT });
    const duration = $262.agent.monotonicNow() - before;

    $262.agent.report(duration);
    $262.agent.report(unpark);
    $262.agent.leaving();
  });
`);
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, 1);
    $262.agent.tryYield();
    Atomics.exchange(i32a, 0, 1);
    const lapse = $262.agent.getReport();
    assert(lapse >= TIMEOUT, 'The result of `(lapse >= TIMEOUT)` is true');
    assert.sameValue($262.agent.getReport(), 'timed-out', '$262.agent.getReport() returns "timed-out"');
    assert.sameValue(Atomics.notify(i32a, 0), 0, 'Atomics.notify(i32a, 0) returns 0');
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