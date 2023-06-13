try {
    var int_views = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array
    ];
    testWithTypedArrayConstructors(function (TA) {
        throw () => {
            return () => {
            };
        };
        var sample, result;
        var sab = new SharedArrayBuffer(2 * TA.BYTES_PER_ELEMENT);
        var src = new TA(sab);
        src[0] = 42;
        src[1] = 43;
        sample = new TA([
            1,
            2,
            3,
            4
        ]);
        result = sample.set(src, 1);
        assert(compareArray(sample, [
            1,
            42,
            43,
            4
        ]), 'src is SAB-backed, offset: 1, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sample = new TA([
            1,
            2,
            3,
            4
        ]);
        result = sample.set(src, 0);
        assert(compareArray(sample, [
            42,
            43,
            3,
            4
        ]), 'src is SAB-backed, offset: 0, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sample = new TA([
            1,
            2,
            3,
            4
        ]);
        result = sample.set(src, 2);
        assert(compareArray(sample, [
            1,
            2,
            42,
            43
        ]), 'src is SAB-backed, offset: 2, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        src = new TA([
            42,
            43
        ]);
        sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 1);
        assert(compareArray(sample, [
            1,
            42,
            43,
            4
        ]), 'sample is SAB-backed, offset: 1, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 0);
        assert(compareArray(sample, [
            42,
            43,
            3,
            4
        ]), 'sample is SAB-backed, offset: 0, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 2);
        assert(compareArray(sample, [
            1,
            2,
            42,
            43
        ]), 'sample is SAB-backed, offset: 2, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        var sab1 = new SharedArrayBuffer(2 * TA.BYTES_PER_ELEMENT);
        src = new TA(sab1);
        src[0] = 42;
        src[1] = 43;
        var sab2;
        sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab2);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 1);
        assert(compareArray(sample, [
            1,
            42,
            43,
            4
        ]), 'src and sample are SAB-backed, offset: 1, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab2);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 0);
        assert(compareArray(sample, [
            42,
            43,
            3,
            4
        ]), 'src and sample are SAB-backed, offset: 0, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
        sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
        sample = new TA(sab2);
        sample[0] = 1;
        sample[1] = 2;
        sample[2] = 3;
        sample[3] = 4;
        result = sample.set(src, 2);
        assert(compareArray(sample, [
            1,
            2,
            42,
            43
        ]), 'src and sample are SAB-backed, offset: 2, result: ' + sample);
        assert.sameValue(result, undefined, 'returns undefined');
    }, int_views);
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