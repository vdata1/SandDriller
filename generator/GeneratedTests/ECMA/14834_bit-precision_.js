try {
    function body(FloatArray) {
        var subject = new FloatArray(NaNs.length * 2);
        NaNs.forEach(function (v, i) {
            subject[i] = v;
        });
        var originalBytes, copiedBytes;
        var length = NaNs.length * FloatArray.BYTES_PER_ELEMENT;
        originalBytes = new Uint8Array(subject.buffer, 0, length);
        subject.copyWithin(NaNs.length, 0);
        copiedBytes = new Uint8Array(subject.buffer, length);
        assert(compareArray(originalBytes, copiedBytes));
    }
    testWithTypedArrayConstructors(body, [
        Float32Array,
        Float64Array
    ]);
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