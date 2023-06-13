try {
    var NUMAGENT = 2;
    var RUNNING = 4;
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    // Wait on index 0
    $262.agent.report(Atomics.wait(i32a, 0, 0, Infinity));
    $262.agent.leaving();
  });
`);
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    // Wait on index 2
    $262.agent.report(Atomics.wait(i32a, 2, 0, Infinity));
    $262.agent.leaving();
  });
`);
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 5));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
    assert.sameValue(Atomics.notify(i32a, 1), 0, 'Atomics.notify(i32a, 1) returns 0');
    assert.sameValue(Atomics.notify(i32a, 3), 0, 'Atomics.notify(i32a, 3) returns 0');
    var woken = 0;
    while ((woken = Atomics.notify(i32a, 2)) === 0);
    assert.sameValue(woken, 1, 'Atomics.notify(i32a, 2) returns 1');
    assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() returns "ok"');
    var woken = 0;
    while ((woken = Atomics.notify(i32a, 0)) === 0);
    assert.sameValue(woken, 1, 'Atomics.notify(i32a, 0) returns 1');
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