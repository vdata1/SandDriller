try {
    var sample;
    var buffer = new ArrayBuffer(12);
    sample = new DataView(buffer, 0);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.getUint8(Infinity);
    }, 'getIndex == Infinity');
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.getUint8(13);
    }, '13 + 1 > 12');
    assert.throws(RangeError, function () {
        sample.getUint8(12);
    }, '12 + 1 > 12');
    sample = new DataView(buffer, 11);
    assert.throws(RangeError, function () {
        sample.getUint8(1);
    }, '1 + 1 > 1 (offset)');
    sample = new DataView(buffer, 0, 1);
    assert.throws(RangeError, function () {
        sample.getUint8(1);
    }, '1 + 1 > 1 (length)');
    sample = new DataView(buffer, 4, 1);
    assert.throws(RangeError, function () {
        sample.getUint8(1);
    }, '1 + 1 > 1 (offset+length)');
    sample = new DataView(buffer, 4, 0);
    assert.throws(RangeError, function () {
        sample.getUint8(0);
    }, '0 + 1 > 0 (offset+length)');
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