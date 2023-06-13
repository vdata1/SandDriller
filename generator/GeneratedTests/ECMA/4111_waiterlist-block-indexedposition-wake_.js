try {
    var NUMAGENT = 2;
    var RUNNING = 4;
    const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5));
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    // Wait on index 0
    $262.agent.report(Atomics.wait(i64a, 0, 0n, Infinity));
    $262.agent.leaving();
  });
`);
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    // Wait on index 2
    $262.agent.report(Atomics.wait(i64a, 2, 0n, Infinity));
    $262.agent.leaving();
  });
`);
    $262.agent.safeBroadcast(i64a);
    $262.agent.waitUntil(i64a, RUNNING, BigInt(NUMAGENT));
    assert.sameValue(Atomics.notify(i64a, 1), 0, 'Atomics.notify(i64a, 1) returns 0');
    assert.sameValue(Atomics.notify(i64a, 3), 0, 'Atomics.notify(i64a, 3) returns 0');
    var woken = 0;
    while ((woken = Atomics.notify(i64a, 2)) === 0);
    assert.sameValue(woken, 1, 'Atomics.notify(i64a, 2) returns 1');
    assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
    var woken = 0;
    while ((woken = Atomics.notify(i64a, 0)) === 0);
    assert.sameValue(woken, 1, 'Atomics.notify(i64a, 0) returns 1');
    assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
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