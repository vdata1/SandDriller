try {
    var buffer = new SharedArrayBuffer(8);
    var sample = new DataView(buffer, 0);
    sample.setUint8(0, 127);
    sample.setUint8(1, 255);
    sample.setUint8(2, 255);
    sample.setUint8(3, 255);
    sample.setUint8(4, 128);
    sample.setUint8(5, 255);
    sample.setUint8(6, 255);
    sample.setUint8(7, 255);
    var obj1 = {
        valueOf: function () {
            return 2;
        }
    };
    var obj2 = {
        toString: function () {
            return 3;
        }
    };
    assert.sameValue(sample.getInt32(-0), 2147483647, '-0');
    assert.sameValue(sample.getInt32(obj1), -32513, 'object\'s valueOf');
    assert.sameValue(sample.getInt32(obj2), -8323073, 'object\'s toString');
    assert.sameValue(sample.getInt32(''), 2147483647, 'the Empty string');
    assert.sameValue(sample.getInt32('0'), 2147483647, 'string \'0\'');
    assert.sameValue(sample.getInt32('2'), -32513, 'string \'2\'');
    assert.sameValue(sample.getInt32(true), -128, 'true');
    assert.sameValue(sample.getInt32(false), 2147483647, 'false');
    assert.sameValue(sample.getInt32(NaN), 2147483647, 'NaN');
    assert.sameValue(sample.getInt32(null), 2147483647, 'null');
    assert.sameValue(sample.getInt32(0.1), 2147483647, '0.1');
    assert.sameValue(sample.getInt32(0.9), 2147483647, '0.9');
    assert.sameValue(sample.getInt32(1.1), -128, '1.1');
    assert.sameValue(sample.getInt32(1.9), -128, '1.9');
    assert.sameValue(sample.getInt32(-0.1), 2147483647, '-0.1');
    assert.sameValue(sample.getInt32(-0.99999), 2147483647, '-0.99999');
    assert.sameValue(sample.getInt32(undefined), 2147483647, 'undefined');
    assert.sameValue(sample.getInt32(), 2147483647, 'no arg');
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