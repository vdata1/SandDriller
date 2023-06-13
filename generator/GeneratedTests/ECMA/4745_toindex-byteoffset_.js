try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    var obj1 = {
        valueOf: function () {
            return 3;
        }
    };
    var obj2 = {
        toString: function () {
            return 4;
        }
    };
    sample.setUint32(0, 0);
    sample.setUint32(-0, 42);
    assert.sameValue(sample.getUint32(0), 42, '-0');
    sample.setUint32(3, 0);
    sample.setUint32(obj1, 42);
    assert.sameValue(sample.getUint32(3), 42, 'object\'s valueOf');
    sample.setUint32(4, 0);
    sample.setUint32(obj2, 42);
    assert.sameValue(sample.getUint32(4), 42, 'object\'s toString');
    sample.setUint32(0, 0);
    sample.setUint32('', 42);
    assert.sameValue(sample.getUint32(0), 42, 'the Empty string');
    sample.setUint32(0, 0);
    sample.setUint32('0', 42);
    assert.sameValue(sample.getUint32(0), 42, 'string \'0\'');
    sample.setUint32(2, 0);
    sample.setUint32('2', 42);
    assert.sameValue(sample.getUint32(2), 42, 'string \'2\'');
    sample.setUint32(1, 0);
    sample.setUint32(true, 42);
    assert.sameValue(sample.getUint32(1), 42, 'true');
    sample.setUint32(0, 0);
    sample.setUint32(false, 42);
    assert.sameValue(sample.getUint32(0), 42, 'false');
    sample.setUint32(0, 0);
    sample.setUint32(NaN, 42);
    assert.sameValue(sample.getUint32(0), 42, 'NaN');
    sample.setUint32(0, 0);
    sample.setUint32(null, 42);
    assert.sameValue(sample.getUint32(0), 42, 'null');
    sample.setUint32(0, 0);
    sample.setUint32(0.1, 42);
    assert.sameValue(sample.getUint32(0), 42, '0.1');
    sample.setUint32(0, 0);
    sample.setUint32(0.9, 42);
    assert.sameValue(sample.getUint32(0), 42, '0.9');
    sample.setUint32(1, 0);
    sample.setUint32(1.1, 42);
    assert.sameValue(sample.getUint32(1), 42, '1.1');
    sample.setUint32(1, 0);
    sample.setUint32(1.9, 42);
    assert.sameValue(sample.getUint32(1), 42, '1.9');
    sample.setUint32(0, 0);
    sample.setUint32(-0.1, 42);
    assert.sameValue(sample.getUint32(0), 42, '-0.1');
    sample.setUint32(0, 0);
    sample.setUint32(-0.99999, 42);
    assert.sameValue(sample.getUint32(0), 42, '-0.99999');
    sample.setUint32(0, 0);
    sample.setUint32(undefined, 42);
    assert.sameValue(sample.getUint32(0), 42, 'undefined');
    sample.setUint32(0, 7);
    sample.setUint32();
    assert.sameValue(sample.getUint32(0), 0, 'no arg');
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