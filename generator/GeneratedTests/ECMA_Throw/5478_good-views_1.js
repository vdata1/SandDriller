try {
    const sab = new SharedArrayBuffer(1024);
    const ab = new ArrayBuffer(16);
    const views = intArrayConstructors.slice();
    testWithTypedArrayConstructors(function (TA) {
        let REPLACER = 23;
        const view = new TA(sab, 32, 20);
        const control = new TA(ab, 0, 2);
        view[8] = 0;
        assert.sameValue(Atomics.add(view, 8, 10), 0, 'Atomics.add(view, 8, 10) returns 0');
        assert.sameValue(view[8], 10, 'The value of view[8] is 10');
        assert.sameValue(Atomics.add(view, 8, -5), 10, 'Atomics.add(view, 8, -5) returns 10');
        assert.sameValue(view[8], 5, 'The value of view[8] is 5');
        view[3] = -5;
        control[0] = -5;
        assert.sameValue(Atomics.add(view, 3, 0), control[0], 'Atomics.add(view, 3, 0) returns the value of `control[0]` (-5)');
        control[0] = 12345;
        view[3] = 12345;
        assert.sameValue(Atomics.add(view, 3, 0), control[0], 'Atomics.add(view, 3, 0) returns the value of `control[0]` (12345)');
        control[0] = 123456789;
        view[3] = 123456789;
        assert.sameValue(Atomics.add(view, 3, 0), control[0], 'Atomics.add(view, 3, 0) returns the value of `control[0]` (123456789)');
        testWithAtomicsInBoundsIndices(function (IdxGen) {
            throw () => {
                return () => {
                };
            };
            let Idx = IdxGen(view);
            view.fill(0);
            Atomics.store(view, Idx, 37);
            assert.sameValue(Atomics.add(view, Idx, 0), 37, 'Atomics.add(view, Idx, 0) returns 37');
        });
    }, views);
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