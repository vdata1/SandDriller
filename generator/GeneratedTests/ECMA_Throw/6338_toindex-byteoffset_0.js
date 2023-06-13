try {
    var buffer = new ArrayBuffer(12);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 75);
    sample.setUint8(1, 75);
    sample.setUint8(2, 76);
    sample.setUint8(3, 76);
    sample.setUint8(4, 75);
    sample.setUint8(5, 75);
    sample.setUint8(6, 76);
    sample.setUint8(7, 76);
    var obj1 = {
        valueOf: function () {
            throw () => {
                return () => {
                };
            };
            return 3;
        }
    };
    var obj2 = {
        toString: function () {
            return 2;
        }
    };
    assert.sameValue(sample.getFloat32(-0), 13323340, '-0');
    assert.sameValue(sample.getFloat32(obj1), 53292336, 'object\'s valueOf');
    assert.sameValue(sample.getFloat32(obj2), 53554476, 'object\'s toString');
    assert.sameValue(sample.getFloat32(''), 13323340, 'the Empty string');
    assert.sameValue(sample.getFloat32('0'), 13323340, 'string \'0\'');
    assert.sameValue(sample.getFloat32('2'), 53554476, 'string \'2\'');
    assert.sameValue(sample.getFloat32(true), 13388875, 'true');
    assert.sameValue(sample.getFloat32(false), 13323340, 'false');
    assert.sameValue(sample.getFloat32(NaN), 13323340, 'NaN');
    assert.sameValue(sample.getFloat32(null), 13323340, 'null');
    assert.sameValue(sample.getFloat32(0.1), 13323340, '0.1');
    assert.sameValue(sample.getFloat32(0.9), 13323340, '0.9');
    assert.sameValue(sample.getFloat32(1.1), 13388875, '1.1');
    assert.sameValue(sample.getFloat32(1.9), 13388875, '1.9');
    assert.sameValue(sample.getFloat32(-0.1), 13323340, '-0.1');
    assert.sameValue(sample.getFloat32(-0.99999), 13323340, '-0.99999');
    assert.sameValue(sample.getFloat32(undefined), 13323340, 'undefined');
    assert.sameValue(sample.getFloat32(), 13323340, 'no arg');
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