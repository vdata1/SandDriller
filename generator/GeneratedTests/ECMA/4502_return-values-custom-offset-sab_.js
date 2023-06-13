try {
    var buffer = new SharedArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 39);
    sample.setUint8(1, 2);
    sample.setUint8(2, 6);
    sample.setUint8(3, 2);
    sample.setUint8(4, 128);
    sample.setUint8(5, 0);
    sample.setUint8(6, 128);
    sample.setUint8(7, 1);
    sample.setUint8(8, 127);
    sample.setUint8(9, 0);
    sample.setUint8(10, 127);
    sample.setUint8(11, 1);
    sample = new DataView(buffer, 4);
    assert.sameValue(sample.getInt32(0, false), -2147450879, '0, false');
    assert.sameValue(sample.getInt32(1, false), 8388991, '1, false');
    assert.sameValue(sample.getInt32(2, false), -2147385600, '2, false');
    assert.sameValue(sample.getInt32(3, false), 25100415, '3, false');
    assert.sameValue(sample.getInt32(0, true), 25165952, '0, true');
    assert.sameValue(sample.getInt32(1, true), 2130804736, '1, true');
    assert.sameValue(sample.getInt32(2, true), 8323456, '2, true');
    assert.sameValue(sample.getInt32(3, true), 2130738945, '3, true');
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