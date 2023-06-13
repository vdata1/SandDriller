try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    sample.setUint8(4, 75);
    sample.setUint8(5, 75);
    sample.setUint8(6, 75);
    sample.setUint8(7, 75);
    sample.setUint8(8, 76);
    sample.setUint8(9, 76);
    sample.setUint8(10, 77);
    sample.setUint8(11, 77);
    sample = new DataView(buffer, 4);
    assert.sameValue(sample.getFloat32(0, false), 13323083, '0, false');
    assert.sameValue(sample.getFloat32(1, false), 13323084, '1, false');
    assert.sameValue(sample.getFloat32(2, false), 13323340, '2, false');
    assert.sameValue(sample.getFloat32(3, false), 13388877, '3, false');
    assert.sameValue(sample.getFloat32(4, false), 53556532, '4, false');
    assert.sameValue(sample.getFloat32(0, true), 13323083, '0, true');
    assert.sameValue(sample.getFloat32(1, true), 53292332, '1, true');
    assert.sameValue(sample.getFloat32(2, true), 53554476, '2, true');
    assert.sameValue(sample.getFloat32(3, true), 214222000, '3, true');
    assert.sameValue(sample.getFloat32(4, true), 215270592, '4, true');
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