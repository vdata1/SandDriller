try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const RUNNING = 1;
    $262.agent.start(`
  const valueOf = {
    valueOf() {
      return true;
    }
  };

  const toPrimitive = {
    [Symbol.toPrimitive]() {
      return true;
    }
  };

  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, true).value);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, valueOf).value);
    $262.agent.report(await Atomics.waitAsync(i32a, 0, 0, toPrimitive).value);
    $262.agent.leaving();
  });
`);
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    $262.agent.safeBroadcastAsync(i32a, RUNNING, 1).then(async agentCount => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(agentCount, 1, 'The value of `agentCount` is 1');
        assert.sameValue(await $262.agent.getReportAsync(), 'timed-out', '(await $262.agent.getReportAsync()) resolves to the value "timed-out"');
        assert.sameValue(await $262.agent.getReportAsync(), 'timed-out', '(await $262.agent.getReportAsync()) resolves to the value "timed-out"');
        assert.sameValue(await $262.agent.getReportAsync(), 'timed-out', '(await $262.agent.getReportAsync()) resolves to the value "timed-out"');
        assert.sameValue(Atomics.notify(i32a, 0), 0, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)), 0) must return 0');
    }).then($DONE, $DONE);
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