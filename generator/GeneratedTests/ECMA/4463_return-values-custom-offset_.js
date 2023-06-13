try {
    var buffer = new ArrayBuffer(16);
    var sample = new DataView(buffer, 0);
    sample.setUint8(4, 67);
    sample.setUint8(5, 67);
    sample.setUint8(6, 68);
    sample.setUint8(7, 68);
    sample.setUint8(8, 67);
    sample.setUint8(9, 67);
    sample.setUint8(10, 68);
    sample.setUint8(11, 68);
    sample.setUint8(12, 67);
    sample.setUint8(13, 67);
    sample.setUint8(14, 68);
    sample.setUint8(15, 68);
    sample = new DataView(buffer, 4);
    assert.sameValue(sample.getFloat64(0, false), 10846169068898440, '0');
    assert.sameValue(sample.getFloat64(1, false), 11409110432516230, '1');
    assert.sameValue(sample.getFloat64(2, false), 747563348316297500000, '2');
    assert.sameValue(sample.getFloat64(3, false), 710670423110242000000, '3');
    assert.sameValue(sample.getFloat64(4, false), 10846169068898440, '4');
    assert.sameValue(sample.getFloat64(0, true), 747563348316297500000, '0, true');
    assert.sameValue(sample.getFloat64(1, true), 11409110432516230, '1, true');
    assert.sameValue(sample.getFloat64(2, true), 10846169068898440, '2, true');
    assert.sameValue(sample.getFloat64(3, true), 710670423110242000000, '3, true');
    assert.sameValue(sample.getFloat64(4, true), 747563348316297500000, '4, true');
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