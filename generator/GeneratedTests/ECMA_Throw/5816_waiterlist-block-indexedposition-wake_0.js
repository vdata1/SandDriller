try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const NUMAGENT = 2;
    const RUNNING = 4;
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    // Wait on index 0
    $262.agent.report(await Atomics.waitAsync(i64a, 0, 0n, Infinity).value);
    $262.agent.leaving();
  });
`);
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    // Wait on index 2
    $262.agent.report(await Atomics.waitAsync(i64a, 2, 0n, Infinity).value);
    $262.agent.leaving();
  });
`);
    const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5));
    $262.agent.safeBroadcastAsync(i64a, RUNNING, BigInt(NUMAGENT)).then(async agentCount => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(agentCount, BigInt(NUMAGENT), 'The value of `agentCount` must return the same value returned by BigInt(NUMAGENT)');
        assert.sameValue(Atomics.notify(i64a, 1), 0, 'Atomics.notify(new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5)), 1) must return 0');
        assert.sameValue(Atomics.notify(i64a, 3), 0, 'Atomics.notify(new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5)), 3) must return 0');
        assert.sameValue(Atomics.notify(i64a, 2), 1, 'Atomics.notify(new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5)), 2) must return 1');
        assert.sameValue(await $262.agent.getReportAsync(), 'ok', '(await $262.agent.getReportAsync()) resolves to the value "ok"');
        assert.sameValue(Atomics.notify(i64a, 0), 1, 'Atomics.notify(new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 5)), 0) must return 1');
        assert.sameValue(await $262.agent.getReportAsync(), 'ok', '(await $262.agent.getReportAsync()) resolves to the value "ok"');
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