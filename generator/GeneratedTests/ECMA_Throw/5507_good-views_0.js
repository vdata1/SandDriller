try {
    const sab = new SharedArrayBuffer(1024);
    const ab = new ArrayBuffer(16);
    const views = intArrayConstructors.slice();
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        const view = new TA(sab, 32, 20);
        const control = new TA(ab, 0, 2);
        view[8] = 0;
        assert.sameValue(Atomics.compareExchange(view, 8, 0, 10), 0, 'Atomics.compareExchange(view, 8, 0, 10) returns 0');
        assert.sameValue(view[8], 10, 'The value of view[8] is 10');
        view[8] = 0;
        assert.sameValue(Atomics.compareExchange(view, 8, 1, 10), 0, 'Atomics.compareExchange(view, 8, 1, 10) returns 0');
        assert.sameValue(view[8], 0, 'The value of view[8] is 0');
        view[8] = 0;
        assert.sameValue(Atomics.compareExchange(view, 8, 0, -5), 0, 'Atomics.compareExchange(view, 8, 0, -5) returns 0');
        control[0] = -5;
        assert.sameValue(view[8], control[0], 'The value of view[8] equals the value of `control[0]` (-5)');
        view[3] = -5;
        control[0] = -5;
        assert.sameValue(Atomics.compareExchange(view, 3, -5, 0), control[0], 'Atomics.compareExchange(view, 3, -5, 0) returns the value of `control[0]` (-5)');
        assert.sameValue(view[3], 0, 'The value of view[3] is 0');
        control[0] = 12345;
        view[3] = 12345;
        assert.sameValue(Atomics.compareExchange(view, 3, 12345, 0), control[0], 'Atomics.compareExchange(view, 3, 12345, 0) returns the value of `control[0]` (12345)');
        assert.sameValue(view[3], 0, 'The value of view[3] is 0');
        control[0] = 123456789;
        view[3] = 123456789;
        assert.sameValue(Atomics.compareExchange(view, 3, 123456789, 0), control[0], 'Atomics.compareExchange(view, 3, 123456789, 0) returns the value of `control[0]` (123456789)');
        assert.sameValue(view[3], 0, 'The value of view[3] is 0');
        testWithAtomicsInBoundsIndices(function (IdxGen) {
            let Idx = IdxGen(view);
            view.fill(0);
            Atomics.store(view, Idx, 37);
            assert.sameValue(Atomics.compareExchange(view, Idx, 37, 0), 37, 'Atomics.compareExchange(view, Idx, 37, 0) returns 37');
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