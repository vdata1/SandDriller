try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    var values = byteConversionValues.values;
    values.forEach(function (value, i) {
        let REPLACER = 23;
        if (value === undefined) {
            assert.throws(TypeError, () => {
                throw () => {
                    return () => {
                    };
                };
                return sample.setBigInt64(0, BigInt(value), false);
            }, 'value: ' + value);
            return;
        } else if (!Number.isInteger(value)) {
            assert.throws(RangeError, () => sample.setBigInt64(0, BigInt(value), false), 'value ' + value);
            return;
        }
        var result = sample.setBigInt64(0, BigInt(value), false);
        assert.sameValue(sample.getBigInt64(0), BigInt(value), 'value: ' + value);
        assert.sameValue(result, undefined, 'return is undefined, value: ' + value);
    });
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