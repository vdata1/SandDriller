try {
    var buffer = new ArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 67);
    sample.setUint8(1, 17);
    sample.setUint8(2, 0);
    sample.setUint8(3, 0);
    sample.setUint8(4, 0);
    sample.setUint8(5, 0);
    sample.setUint8(6, 20);
    sample.setUint8(7, 68);
    assert.sameValue(sample.getFloat64(0), 1196268651021585, 'no arg');
    assert.sameValue(sample.getFloat64(0, undefined), 1196268651021585, 'undefined');
    assert.sameValue(sample.getFloat64(0, null), 1196268651021585, 'null');
    assert.sameValue(sample.getFloat64(0, 0), 1196268651021585, '0');
    assert.sameValue(sample.getFloat64(0, ''), 1196268651021585, 'the empty string');
    assert.sameValue(sample.getFloat64(0, {}), 92233720368620160000, '{}');
    assert.sameValue(sample.getFloat64(0, Symbol('1')), 92233720368620160000, 'symbol');
    assert.sameValue(sample.getFloat64(0, 1), 92233720368620160000, '1');
    assert.sameValue(sample.getFloat64(0, 'string'), 92233720368620160000, 'string');
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