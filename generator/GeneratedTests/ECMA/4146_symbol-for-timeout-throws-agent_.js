try {
    const RUNNING = 1;
    $262.agent.start(`
  $262.agent.receiveBroadcast(function(sab) {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${ RUNNING }, 1);

    let status1 = "";
    let status2 = "";

    try {
      Atomics.wait(i32a, 0, 0, Symbol("1"));
    } catch (error) {
      status1 = 'Symbol("1")';
    }
    try {
      Atomics.wait(i32a, 0, 0, Symbol("2"));
    } catch (error) {
      status2 = 'Symbol("2")';
    }

    $262.agent.report(status1);
    $262.agent.report(status2);
    $262.agent.leaving();
  });
`);
    const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));
    $262.agent.safeBroadcast(i32a);
    $262.agent.waitUntil(i32a, RUNNING, 1);
    $262.agent.tryYield();
    assert.sameValue($262.agent.getReport(), 'Symbol("1")', '$262.agent.getReport() returns "Symbol("1")"');
    assert.sameValue($262.agent.getReport(), 'Symbol("2")', '$262.agent.getReport() returns "Symbol("2")"');
    assert.sameValue(Atomics.notify(i32a, 0), 0, 'Atomics.notify(i32a, 0) returns 0');
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