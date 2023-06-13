try {
    const WAIT_INDEX = 0;
    const WAIT_FAKE = 1;
    const RUNNING = 2;
    const NOTIFY_INDEX = 3;
    const NUMAGENT = 3;
    const TIMEOUT_AGENT_MESSAGES = 2;
    const BUFFER_SIZE = 4;
    const TIMEOUT = $262.agent.timeouts.long;
    for (var i = 0; i < NUMAGENT; i++) {
        $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${ RUNNING }, 1);

      $262.agent.report("A " + Atomics.wait(i32a, ${ WAIT_INDEX }, 0));
      $262.agent.leaving();
    });
  `);
    }
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    // This will always time out.
    $262.agent.report("B " + Atomics.wait(i32a, ${ WAIT_FAKE }, 0, ${ TIMEOUT }));

    // If this value is not 1, then the agent timeout before the main agent
    // called Atomics.notify.
    const result = Atomics.load(i32a, ${ NOTIFY_INDEX }) === 1
                   ? "timeout after Atomics.notify"
                   : "timeout before Atomics.notify";
    $262.agent.report("W " + result);

    $262.agent.leaving();
  });
`);
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, NUMAGENT + 1);
    $262.agent.tryYield();
    assert.sameValue(Atomics.notify(i32a, WAIT_INDEX), NUMAGENT, 'Atomics.notify(i32a, WAIT_INDEX) returns the value of `NUMAGENT`');
    Atomics.store(i32a, NOTIFY_INDEX, 1);
    const reports = [];
    for (var i = 0; i < NUMAGENT + TIMEOUT_AGENT_MESSAGES; i++) {
        reports.push($262.agent.getReport());
    }
    reports.sort();
    for (var i = 0; i < NUMAGENT; i++) {
        assert.sameValue(reports[i], 'A ok', 'The value of reports[i] is "A ok"');
    }
    assert.sameValue(reports[NUMAGENT], 'B timed-out', 'The value of reports[NUMAGENT] is "B timed-out"');
    assert.sameValue(reports[NUMAGENT + 1], 'W timeout after Atomics.notify', 'The value of reports[NUMAGENT + 1] is "W timeout after Atomics.notify"');
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