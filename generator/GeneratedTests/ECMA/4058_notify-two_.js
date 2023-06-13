try {
    const WAIT_INDEX = 0;
    const RUNNING = 1;
    const NOTIFYCOUNT = 2;
    const NUMAGENT = 3;
    const BUFFER_SIZE = 4;
    const TIMEOUT = $262.agent.timeouts.long;
    for (var i = 0; i < NUMAGENT; i++) {
        $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${ RUNNING }, 1);

      // Waiters that are not woken will time out eventually.
      $262.agent.report(Atomics.wait(i32a, ${ WAIT_INDEX }, 0, ${ TIMEOUT }));
      $262.agent.leaving();
    })
  `);
    }
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
    $262.agent.tryYield();
    assert.sameValue(Atomics.notify(i32a, 0, NOTIFYCOUNT), NOTIFYCOUNT, 'Atomics.notify(i32a, 0, NOTIFYCOUNT) returns the value of `NOTIFYCOUNT`');
    $262.agent.trySleep(TIMEOUT);
    const reports = [];
    for (var i = 0; i < NUMAGENT; i++) {
        reports.push($262.agent.getReport());
    }
    reports.sort();
    for (var i = 0; i < NOTIFYCOUNT; i++) {
        assert.sameValue(reports[i], 'ok', 'The value of reports[i] is "ok"');
    }
    for (var i = NOTIFYCOUNT; i < NUMAGENT; i++) {
        assert.sameValue(reports[i], 'timed-out', 'The value of reports[i] is "timed-out"');
    }
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