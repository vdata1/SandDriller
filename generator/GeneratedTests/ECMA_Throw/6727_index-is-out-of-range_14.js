try {
    var sample;
    var buffer = new ArrayBuffer(12);
    sample = new DataView(buffer, 0);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(Infinity, 39);
    }, 'getIndex == Infinity');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(13, 39);
    }, '13 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(12, 39);
    }, '12 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(11, 39);
    }, '11 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(10, 39);
    }, '10 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(9, 39);
    }, '9 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(8, 39);
    }, '8 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(7, 39);
    }, '7 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(6, 39);
    }, '6 + 8 > 12');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(5, 39);
    }, '5 + 8 > 12');
    sample = new DataView(buffer, 8);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(1, 39);
    }, '1 + 8 > 4 (offset)');
    sample = new DataView(buffer, 9);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(0, 39);
    }, '0 + 8 > 3 (offset)');
    sample = new DataView(buffer, 0, 8);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(1, 39);
    }, '1 + 8 > 8 (length)');
    sample = new DataView(buffer, 0, 7);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setFloat64(0, 39);
    }, '0 + 8 > 7 (length)');
    sample = new DataView(buffer, 4, 8);
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.setFloat64(1, 39);
    }, '1 + 8 > 8 (offset+length)');
    sample = new DataView(buffer, 4, 7);
    assert.throws(RangeError, function () {
        sample.setFloat64(0, 39);
    }, '0 + 8 > 7 (offset+length)');
    sample = new DataView(buffer, 0);
    assert.sameValue(sample.getFloat64(0), 0, '[0] no value was set');
    assert.sameValue(sample.getFloat64(4), 0, '[1] no value was set');
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