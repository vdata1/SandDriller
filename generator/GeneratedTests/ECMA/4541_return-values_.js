try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 127);
    sample.setUint8(1, 255);
    sample.setUint8(2, 255);
    sample.setUint8(3, 255);
    sample.setUint8(4, 128);
    sample.setUint8(5, 0);
    sample.setUint8(6, 1);
    sample.setUint8(7, 0);
    assert.sameValue(sample.getUint16(0, false), 32767, '0, false');
    assert.sameValue(sample.getUint16(1, false), 65535, '1, false');
    assert.sameValue(sample.getUint16(2, false), 65535, '2, false');
    assert.sameValue(sample.getUint16(3, false), 65408, '3, false');
    assert.sameValue(sample.getUint16(4, false), 32768, '4, false');
    assert.sameValue(sample.getUint16(5, false), 1, '5, false');
    assert.sameValue(sample.getUint16(6, false), 256, '8, false');
    assert.sameValue(sample.getUint16(0, true), 65407, '0, true');
    assert.sameValue(sample.getUint16(1, true), 65535, '1, true');
    assert.sameValue(sample.getUint16(2, true), 65535, '2, true');
    assert.sameValue(sample.getUint16(3, true), 33023, '3, true');
    assert.sameValue(sample.getUint16(4, true), 128, '4, true');
    assert.sameValue(sample.getUint16(5, true), 256, '5, true');
    assert.sameValue(sample.getUint16(6, true), 1, '6, true');
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