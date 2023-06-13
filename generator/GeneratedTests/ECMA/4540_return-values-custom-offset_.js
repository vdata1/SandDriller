try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 0);
    sample.setUint8(1, 2);
    sample.setUint8(2, 6);
    sample.setUint8(3, 2);
    sample.setUint8(4, 128);
    sample.setUint8(5, 42);
    sample.setUint8(6, 128);
    sample.setUint8(7, 39);
    sample = new DataView(buffer, 4);
    assert.sameValue(sample.getUint16(0, false), 32810, '0, false');
    assert.sameValue(sample.getUint16(1, false), 10880, '1, false');
    assert.sameValue(sample.getUint16(2, false), 32807, '2, false');
    assert.sameValue(sample.getUint16(0, true), 10880, '0, true');
    assert.sameValue(sample.getUint16(1, true), 32810, '1, true');
    assert.sameValue(sample.getUint16(2, true), 10112, '2, true');
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