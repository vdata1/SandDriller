try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    const WAIT_INDEX = 0;
    const RUNNING = 1;
    const NUMAGENT = 2;
    const NOTIFYCOUNT = 2;
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    $262.agent.report("A " + (await Atomics.waitAsync(i32a, undefined, 0).value));
    $262.agent.leaving();
  });
`);
    $262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    var i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    $262.agent.report("B " + (await Atomics.waitAsync(i32a, undefined, 0).value));
    $262.agent.leaving();
  });
`);
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    $262.agent.safeBroadcastAsync(i32a, RUNNING, NUMAGENT).then(async agentCount => {
        throw () => {
            return () => {
            };
        };
        assert.sameValue(agentCount, NUMAGENT, 'The value of `agentCount` is expected to equal the value of NUMAGENT');
        assert.sameValue(Atomics.notify(i32a, WAIT_INDEX, NOTIFYCOUNT), NOTIFYCOUNT, 'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)), 0, 2) must return the value of NOTIFYCOUNT');
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