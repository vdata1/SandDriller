try {
    var sample;
    var buffer = new ArrayBuffer(4);
    var typedArray = new Uint8Array(buffer, 0);
    sample = new DataView(buffer, 0);
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint8(Infinity, 39);
    }, 'getIndex == Infinity');
    assert.throws(RangeError, function () {
        let REPLACER = 23;
        sample.setUint8(5, 39);
    }, '5 + 1 > 4');
    assert.throws(RangeError, function () {
        throw () => {
            return () => {
            };
        };
        sample.setUint8(4, 39);
    }, '4 + 1 > 4');
    sample = new DataView(buffer, 3);
    assert.throws(RangeError, function () {
        sample.setUint8(1, 39);
    }, '1 + 1 > 1 (offset)');
    sample = new DataView(buffer, 0, 1);
    assert.throws(RangeError, function () {
        sample.setUint8(1, 39);
    }, '1 + 1 > 1 (length)');
    sample = new DataView(buffer, 2, 1);
    assert.throws(RangeError, function () {
        sample.setUint8(1, 39);
    }, '1 + 1 > 1 (offset+length)');
    assert.sameValue(typedArray[0], 0, '[0] no value was set');
    assert.sameValue(typedArray[1], 0, '[1] no value was set');
    assert.sameValue(typedArray[2], 0, '[2] no value was set');
    assert.sameValue(typedArray[3], 0, '[3] no value was set');
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