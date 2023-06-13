try {
    testTypedArrayConversions(byteConversionValues, function (TA, value, expected, initial) {
        if (TA === Float64Array || TA === Float32Array || TA === Uint8ClampedArray) {
            return;
        }
        if (TA === Int32Array) {
            return;
        }
        var sab, src, target;
        sab = new SharedArrayBuffer(4);
        src = new Int32Array(sab);
        src[0] = value;
        target = new TA([initial]);
        target.set(src);
        assert.sameValue(target[0], expected, 'src is SAB-backed');
        sab = new SharedArrayBuffer(4);
        src = new Int32Array([value]);
        target = new TA(sab);
        target[0] = initial;
        target.set(src);
        assert.sameValue(target[0], expected, 'target is SAB-backed');
        var sab1 = new SharedArrayBuffer(4);
        var sab2 = new SharedArrayBuffer(4);
        src = new Int32Array(sab1);
        src[0] = value;
        target = new TA(sab2);
        target[0] = initial;
        target.set(src);
        assert.sameValue(target[0], expected, 'src and target are SAB-backed');
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