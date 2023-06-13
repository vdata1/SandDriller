try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    assert.sameValue(sample.getFloat64(0, true), 0, 'sample.getFloat64(0, true)');
    assert.sameValue(sample.getFloat64(1, true), 0, 'sample.getFloat64(1, true)');
    assert.sameValue(sample.getFloat64(2, true), 0, 'sample.getFloat64(2, true)');
    assert.sameValue(sample.getFloat64(3, true), 0, 'sample.getFloat64(3, true)');
    assert.sameValue(sample.getFloat64(4, true), 0, 'sample.getFloat64(4, true)');
    assert.sameValue(sample.getFloat64(0, false), 0, 'sample.getFloat64(0, false)');
    assert.sameValue(sample.getFloat64(1, false), 0, 'sample.getFloat64(1, false)');
    assert.sameValue(sample.getFloat64(2, false), 0, 'sample.getFloat64(2, false)');
    assert.sameValue(sample.getFloat64(3, false), 0, 'sample.getFloat64(3, false)');
    assert.sameValue(sample.getFloat64(4, false), 0, 'sample.getFloat64(4, false)');
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