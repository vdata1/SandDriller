try {
    const sab = new SharedArrayBuffer(1024);
    const ab = new ArrayBuffer(16);
    const views = intArrayConstructors.slice();
    testWithTypedArrayConstructors(function (TA) {
        const view = new TA(sab, 32, 20);
        const control = new TA(ab, 0, 2);
        const values = [
            10,
            -5,
            12345,
            123456789,
            Math.PI,
            '33',
            {
                valueOf: function () {
                    return 33;
                }
            },
            undefined
        ];
        for (let i = 0; i < values.length; i++) {
            let val = values[i];
            assert.sameValue(Atomics.store(view, 3, val), ToInteger(val), 'Atomics.store(view, 3, val) returns ToInteger(val)');
            control[0] = val;
            assert.sameValue(view[3], control[0], 'The value of view[3] equals the value of `control[0]` (val)');
        }
        testWithAtomicsInBoundsIndices(function (IdxGen) {
            let Idx = IdxGen(view);
            view.fill(0);
            Atomics.store(view, Idx, 37);
            assert.sameValue(Atomics.load(view, Idx), 37, 'Atomics.load(view, Idx) returns 37');
        });
    }, views);
    function ToInteger(v) {
        v = +v;
        if (isNaN(v)) {
            return 0;
        }
        if (v == 0 || !isFinite(v)) {
            return v;
        }
        if (v < 0) {
            return -Math.floor(Math.abs(v));
        }
        return Math.floor(v);
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