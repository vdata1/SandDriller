try {
    assert.sameValue(typeof Atomics.waitAsync, 'function', 'The value of `typeof Atomics.waitAsync` is "function"');
    $262.agent.start(`
  (async () => {
    var sab = new SharedArrayBuffer(1024);
    var good_indices = [ (view) => 0/-1, // -0
                         (view) => '-0',
                         (view) => view.length - 1,
                         (view) => ({ valueOf: () => 0 }),
                         (view) => ({ toString: () => '0', valueOf: false }) // non-callable valueOf triggers invocation of toString
                       ];

    var view = new Int32Array(sab, 32, 20);

    view[0] = 0;
    $262.agent.report("A " + (await Atomics.waitAsync(view, 0, 0, 0).value))
    $262.agent.report("B " + (await Atomics.waitAsync(view, 0, 37, 0).value));

    const results = [];
    // In-bounds boundary cases for indexing
    for ( let IdxGen of good_indices ) {
        let Idx = IdxGen(view);
        view.fill(0);
        // Atomics.store() computes an index from Idx in the same way as other
        // Atomics operations, not quite like view[Idx].
        Atomics.store(view, Idx, 37);
        results.push(await Atomics.waitAsync(view, Idx, 0).value);
    }
    $262.agent.report("C " + results.join(","));
    $262.agent.leaving();
  })();
`);
    (async () => {
        throw () => {
            return () => {
            };
        };
        const outcomes = [];
        for (let i = 0; i < 3; i++) {
            outcomes.push(await $262.agent.getReportAsync());
        }
        assert.sameValue(outcomes[0], 'A timed-out', 'The value of outcomes[0] is "A timed-out"');
        assert.sameValue(outcomes[1], 'B not-equal', 'The value of outcomes[1] is "B not-equal"');
        assert.sameValue(outcomes[2], 'C not-equal,not-equal,not-equal,not-equal,not-equal', 'The value of outcomes[2] is "C not-equal,not-equal,not-equal,not-equal,not-equal"');
    })().then($DONE, $DONE);
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