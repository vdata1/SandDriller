try {
    var sab = new SharedArrayBuffer(1024);
    var ab = new ArrayBuffer(16);
    var views = intArrayConstructors.slice();
    testWithTypedArrayConstructors(function (TA) {
        var view = new TA(sab, 32, 20);
        var control = new TA(ab, 0, 2);
        view[8] = 858993459;
        control[0] = 858993459;
        assert.sameValue(Atomics.xor(view, 8, 1431655765), control[0], 'Atomics.xor(view, 8, 0x55555555) returns the value of `control[0]` (0x33333333)');
        control[0] = 1717986918;
        assert.sameValue(view[8], control[0], 'The value of view[8] equals the value of `control[0]` (0x66666666)');
        assert.sameValue(Atomics.xor(view, 8, 4042322160), control[0], 'Atomics.xor(view, 8, 0xF0F0F0F0) returns the value of `control[0]` (0x66666666)');
        control[0] = 2526451350;
        assert.sameValue(view[8], control[0], 'The value of view[8] equals the value of `control[0]` (0x96969696)');
        view[3] = -5;
        control[0] = -5;
        assert.sameValue(Atomics.xor(view, 3, 0), control[0], 'Atomics.xor(view, 3, 0) returns the value of `control[0]` (-5)');
        assert.sameValue(view[3], control[0], 'The value of view[3] equals the value of `control[0]` (-5)');
        control[0] = 12345;
        view[3] = 12345;
        assert.sameValue(Atomics.xor(view, 3, 0), control[0], 'Atomics.xor(view, 3, 0) returns the value of `control[0]` (12345)');
        assert.sameValue(view[3], control[0], 'The value of view[3] equals the value of `control[0]` (12345)');
        control[0] = 123456789;
        view[3] = 123456789;
        assert.sameValue(Atomics.xor(view, 3, 0), control[0], 'Atomics.xor(view, 3, 0) returns the value of `control[0]` (123456789)');
        assert.sameValue(view[3], control[0], 'The value of view[3] equals the value of `control[0]` (123456789)');
        testWithAtomicsInBoundsIndices(function (IdxGen) {
            let Idx = IdxGen(view);
            view.fill(0);
            Atomics.store(view, Idx, 37);
            assert.sameValue(Atomics.xor(view, Idx, 0), 37, 'Atomics.xor(view, Idx, 0) returns 37');
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