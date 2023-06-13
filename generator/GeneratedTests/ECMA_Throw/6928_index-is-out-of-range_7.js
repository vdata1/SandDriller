try {
    var sample;
    var buffer = new ArrayBuffer(12);
    sample = new DataView(buffer, 0);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(Infinity, 39);
    }, 'getIndex == Infinity');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(13, 39);
    }, '13 + 2 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(12, 39);
    }, '12 + 2 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(11, 39);
    }, '11 + 2 > 12');
    sample = new DataView(buffer, 10);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(1, 39);
    }, '1 + 2 > 2 (offset)');
    sample = new DataView(buffer, 11);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(0, 39);
    }, '0 + 2 > 1 (offset)');
    sample = new DataView(buffer, 0, 2);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint16(1, 39);
    }, '1 + 2 > 2 (length)');
    sample = new DataView(buffer, 0, 1);
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.setUint16(0, 39);
    }, '0 + 2 > 1 (length)');
    sample = new DataView(buffer, 4, 2);
    assert.throws(RangeError, function () {
        sample.setUint16(1, 39);
    }, '1 + 2 > 2 (offset+length)');
    sample = new DataView(buffer, 4, 1);
    assert.throws(RangeError, function () {
        sample.setUint16(0, 39);
    }, '0 + 2 > 1 (offset+length)');
    sample = new DataView(buffer, 0);
    assert.sameValue(sample.getUint16(0), 0, '[0] no value was set');
    assert.sameValue(sample.getUint16(2), 0, '[1] no value was set');
    assert.sameValue(sample.getUint16(4), 0, '[2] no value was set');
    assert.sameValue(sample.getUint16(6), 0, '[3] no value was set');
    assert.sameValue(sample.getUint16(8), 0, '[4] no value was set');
    assert.sameValue(sample.getUint16(10), 0, '[5] no value was set');
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