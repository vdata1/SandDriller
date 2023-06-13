try {
    const NUMAGENT = 3;
    const WAIT_INDEX = 0;
    const SPIN = 1;
    const RUNNING = SPIN + NUMAGENT;
    const BUFFER_SIZE = RUNNING + 1;
    for (var i = 0; i < NUMAGENT; i++) {
        $262.agent.start(`
    $262.agent.receiveBroadcast(function(sab) {
      const i32a = new Int32Array(sab);
      Atomics.add(i32a, ${ RUNNING }, 1);

      while (Atomics.load(i32a, ${ SPIN + i }) === 0) {
        /* nothing */
      }

      $262.agent.report(${ i });
      Atomics.wait(i32a, ${ WAIT_INDEX }, 0);
      $262.agent.report(${ i });

      $262.agent.leaving();
    });
  `);
    }
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * BUFFER_SIZE));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, NUMAGENT);
    var waiterlist = [];
    for (var i = 0; i < NUMAGENT; i++) {
        assert.sameValue(Atomics.store(i32a, SPIN + i, 1), 1, `Atomics.store(i32a, SPIN + ${ i }, 1) returns 1`);
        waiterlist.push($262.agent.getReport());
        $262.agent.tryYield();
    }
    var notified = [];
    for (var i = 0; i < NUMAGENT; i++) {
        assert.sameValue(Atomics.notify(i32a, WAIT_INDEX, 1), 1, `Atomics.notify(i32a, WAIT_INDEX, 1) returns 1 (${ i })`);
        notified.push($262.agent.getReport());
    }
    assert.sameValue(notified.join(''), waiterlist.join(''), 'notified.join(\'\') returns waiterlist.join(\'\')');
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