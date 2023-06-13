try {
    var sample;
    var buffer = new ArrayBuffer(12);
    sample = new DataView(buffer, 0);
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.setInt32(Infinity, 39);
    }, 'getIndex == Infinity');
    assert.throws(RangeError, function () {
        sample.setInt32(13, 39);
    }, '13 + 4 > 12');
    assert.throws(RangeError, function () {
        sample.setInt32(12, 39);
    }, '12 + 4 > 12');
    assert.throws(RangeError, function () {
        sample.setInt32(11, 39);
    }, '11 + 4 > 12');
    assert.throws(RangeError, function () {
        sample.setInt32(10, 39);
    }, '10 + 4 > 12');
    assert.throws(RangeError, function () {
        sample.setInt32(9, 39);
    }, '9 + 4 > 12');
    sample = new DataView(buffer, 8);
    assert.throws(RangeError, function () {
        sample.setInt32(1, 39);
    }, '1 + 4 > 4 (offset)');
    sample = new DataView(buffer, 9);
    assert.throws(RangeError, function () {
        sample.setInt32(0, 39);
    }, '0 + 4 > 3 (offset)');
    sample = new DataView(buffer, 0, 4);
    assert.throws(RangeError, function () {
        sample.setInt32(1, 39);
    }, '1 + 4 > 4 (length)');
    sample = new DataView(buffer, 0, 3);
    assert.throws(RangeError, function () {
        sample.setInt32(0, 39);
    }, '0 + 4 > 3 (length)');
    sample = new DataView(buffer, 4, 4);
    assert.throws(RangeError, function () {
        sample.setInt32(1, 39);
    }, '1 + 4 > 4 (offset+length)');
    sample = new DataView(buffer, 4, 3);
    assert.throws(RangeError, function () {
        sample.setInt32(0, 39);
    }, '0 + 4 > 3 (offset+length)');
    sample = new DataView(buffer, 0);
    assert.sameValue(sample.getInt32(0), 0, '[0] no value was set');
    assert.sameValue(sample.getInt32(4), 0, '[1] no value was set');
    assert.sameValue(sample.getInt32(8), 0, '[2] no value was set');
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