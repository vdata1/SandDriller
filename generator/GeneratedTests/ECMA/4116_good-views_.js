try {
    $262.agent.start(`
  var sab = new SharedArrayBuffer(1024);
  var ab = new ArrayBuffer(16);

  var good_indices = [ (view) => 0/-1, // -0
                       (view) => '-0',
                       (view) => view.length - 1,
                       (view) => ({ valueOf: () => 0 }),
                       (view) => ({ toString: () => '0', valueOf: false }) // non-callable valueOf triggers invocation of toString
                     ];

  var view = new Int32Array(sab, 32, 20);

  view[0] = 0;
  $262.agent.report("A " + Atomics.wait(view, 0, 0, 0))
  $262.agent.report("B " + Atomics.wait(view, 0, 37, 0));

  // In-bounds boundary cases for indexing
  for ( let IdxGen of good_indices ) {
      let Idx = IdxGen(view);
      view.fill(0);
      // Atomics.store() computes an index from Idx in the same way as other
      // Atomics operations, not quite like view[Idx].
      Atomics.store(view, Idx, 37);
      $262.agent.report("C " + Atomics.wait(view, Idx, 0));
  }

  $262.agent.report("done");
  $262.agent.leaving();
`);
    assert.sameValue($262.agent.getReport(), 'A timed-out', '$262.agent.getReport() returns "A timed-out"');
    assert.sameValue($262.agent.getReport(), 'B not-equal', '$262.agent.getReport() returns "B not-equal"');
    var r;
    while ((r = $262.agent.getReport()) !== 'done') {
        assert.sameValue(r, 'C not-equal', '$262.agent.getReport() returns "C not-equal"');
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