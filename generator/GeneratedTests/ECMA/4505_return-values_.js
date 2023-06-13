try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 127);
    sample.setUint8(1, 255);
    sample.setUint8(2, 255);
    sample.setUint8(3, 255);
    sample.setUint8(4, 128);
    sample.setUint8(5, 0);
    sample.setUint8(6, 0);
    sample.setUint8(7, 0);
    sample.setUint8(8, 1);
    sample.setUint8(9, 0);
    sample.setUint8(10, 0);
    sample.setUint8(11, 0);
    assert.sameValue(sample.getInt32(0, false), 2147483647, '0, false');
    assert.sameValue(sample.getInt32(1, false), -128, '1, false');
    assert.sameValue(sample.getInt32(2, false), -32768, '2, false');
    assert.sameValue(sample.getInt32(3, false), -8388608, '3, false');
    assert.sameValue(sample.getInt32(4, false), -2147483648, '4, false');
    assert.sameValue(sample.getInt32(5, false), 1, '5, false');
    assert.sameValue(sample.getInt32(6, false), 256, '6, false');
    assert.sameValue(sample.getInt32(7, false), 65536, '7, false');
    assert.sameValue(sample.getInt32(8, false), 16777216, '8, false');
    assert.sameValue(sample.getInt32(0, true), -129, '0, true');
    assert.sameValue(sample.getInt32(1, true), -2130706433, '1, true');
    assert.sameValue(sample.getInt32(2, true), 8454143, '2, true');
    assert.sameValue(sample.getInt32(3, true), 33023, '3, true');
    assert.sameValue(sample.getInt32(4, true), 128, '4, true');
    assert.sameValue(sample.getInt32(5, true), 16777216, '5, true');
    assert.sameValue(sample.getInt32(6, true), 65536, '6, true');
    assert.sameValue(sample.getInt32(7, true), 256, '7, true');
    assert.sameValue(sample.getInt32(8, true), 1, '8, true');
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