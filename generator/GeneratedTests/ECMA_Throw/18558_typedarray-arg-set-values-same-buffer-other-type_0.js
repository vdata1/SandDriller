try {
    var expected = {
        Float64Array: [
            1.0000002464512363,
            42,
            1.875,
            4,
            5,
            6,
            7,
            8
        ],
        Float32Array: [
            0,
            42,
            512.0001220703125,
            4,
            5,
            6,
            7,
            8
        ],
        Int32Array: [
            1109917696,
            42,
            0,
            4,
            5,
            6,
            7,
            8
        ],
        Int16Array: [
            0,
            42,
            0,
            4,
            5,
            6,
            7,
            8
        ],
        Int8Array: [
            0,
            42,
            0,
            66,
            5,
            6,
            7,
            8
        ],
        Uint32Array: [
            1109917696,
            42,
            0,
            4,
            5,
            6,
            7,
            8
        ],
        Uint16Array: [
            0,
            42,
            0,
            4,
            5,
            6,
            7,
            8
        ],
        Uint8Array: [
            0,
            42,
            0,
            66,
            5,
            6,
            7,
            8
        ],
        Uint8ClampedArray: [
            0,
            42,
            0,
            66,
            5,
            6,
            7,
            8
        ]
    };
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var other = TA === Float32Array ? Float64Array : Float32Array;
        var sample = new TA([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
        ]);
        var src = new other(sample.buffer, 0, 2);
        src[0] = 42;
        var result = sample.set(src, 1);
        assert(compareArray(sample, expected[TA.name]), sample);
        assert.sameValue(result, undefined, 'returns undefined');
    });
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