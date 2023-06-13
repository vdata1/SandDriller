try {
    const RUNNING = 0;
    const WAIT_INDEX = 1;
    const BUFFER_SIZE = 2;
    const NUMAGENT = 4;
    for (var i = 0; i < NUMAGENT; i++) {
        $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${ RUNNING }, 1);

      // Wait until restarted by main thread.
      var status = Atomics.wait(i32a, ${ WAIT_INDEX }, 0);

      // Report wait status and then exit the agent.
      var name = String.fromCharCode(0x41 + ${ i }); // "A", "B", "C", or "D"
      $262.agent.report(name + " " + status);
      $262.agent.leaving();
    });
  `);
    }
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
    $262.agent.tryYield();
    assert.sameValue(Atomics.notify(i32a, WAIT_INDEX), NUMAGENT, 'Atomics.notify(i32a, WAIT_INDEX /*, count missing */) returns the value of `NUMAGENT`');
    const reports = [];
    for (var i = 0; i < NUMAGENT; i++) {
        reports.push($262.agent.getReport());
    }
    reports.sort();
    assert.sameValue(reports[0], 'A ok', 'The value of reports[0] is "A ok"');
    assert.sameValue(reports[1], 'B ok', 'The value of reports[1] is "B ok"');
    assert.sameValue(reports[2], 'C ok', 'The value of reports[2] is "C ok"');
    assert.sameValue(reports[3], 'D ok', 'The value of reports[3] is "D ok"');
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