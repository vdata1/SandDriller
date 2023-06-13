try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const WAIT_INDEX = 0;
    const RUNNING = 1;
    const NUMAGENT = 2;
    const NOTIFYCOUNT = 2;
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    $262.agent.report("A " + (await Atomics.waitAsync(i64a, undefined, 0n).value));
    $262.agent.leaving();
  });
`);
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i64a = new BigInt64Array(sab);
    Atomics.add(i64a, ${ RUNNING }, 1n);

    $262.agent.report("B " + (await Atomics.waitAsync(i64a, undefined, 0n).value));
    $262.agent.leaving();
  });
`);
    const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
    $262.agent.safeBroadcastAsync(i64a, RUNNING, BigInt(NUMAGENT)).then(async agentCount => {
        assert.sameValue(agentCount, BigInt(NUMAGENT), 'The value of `agentCount` must return the same value returned by BigInt(NUMAGENT)');
        assert.sameValue(Atomics.notify(i64a, WAIT_INDEX, NOTIFYCOUNT), NOTIFYCOUNT, 'Atomics.notify(new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4)), 0, 2) must return the value of NOTIFYCOUNT');
        const reports = [
            await $262.agent.getReportAsync(),
            await $262.agent.getReportAsync()
        ];
        reports.sort();
        assert.sameValue(reports[0], 'A ok', 'The value of reports[0] is "A ok"');
        assert.sameValue(reports[1], 'B ok', 'The value of reports[1] is "B ok"');
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